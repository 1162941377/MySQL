// 抓取豆瓣读书中的书籍信息
const axios = require("axios").default;
const cheerio = require("cheerio");

const Book = require("../models/Book");

// 获取豆瓣读书网页的源代码
async function getBookHTML() {
  const html = await axios.get("https://book.douban.com/latest");
  return html.data;
}

// 从豆瓣读书上得到一个完整的网页，并从网页中过滤出书籍的信息，然后得到一个书籍的详情页链接数组
async function getBooksLinks() {
  const html = await getBookHTML();
  const $ = cheerio.load(html);
  const achorElements = $(".grid-12-12 .cover-col-4 li a.cover");
  const links = achorElements
    .map((i, ele) => {
      const href = ele.attribs["href"];
      // console.log(href);
      return href;
    })
    .get();
  // console.log(links);
  return links;
}

// getBookLists();

/**
 * 根据传入的书籍路径，得到该书籍的详细信息
 * @param {*} detailUrl 书籍路径
 */
async function getBookDetails(detailUrl) {
  const html = await axios.get(detailUrl);
  const $ = cheerio.load(html.data);

  const name = $("h1").text().trim(); // 得到书籍名
  const imgurl = $("#mainpic .nbg img").attr("src"); // 得到书籍图片路径
  const spans = $("#info span.pl");
  const authorSpan = spans.filter((i, ele) => $(ele).text().includes("作者"));
  const author = authorSpan.next("a").text(); // 得到作者名
  const publishSpan = spans.filter((i, ele) =>
    $(ele).text().includes("出版年")
  );
  const publishDate = publishSpan[0].nextSibling.nodeValue.trim(); // 得到出版年

  return {
    name,
    imgurl,
    publishDate,
    author,
  };
}

// 获取所有的书籍信息
async function fetchAll() {
  const links = await getBooksLinks(); // 得到详情页的地址
  const proms = links.map((link) => getBookDetails(link));
  return Promise.all(proms);
}

// 将得到的书籍信息保存到数据库中
async function saveToDB() {
  const books = await fetchAll();
  await Book.bulkCreate(books);
  console.log("抓取数据并保存到了数据库");
}

saveToDB();
