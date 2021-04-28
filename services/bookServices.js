const Book = require("../models/Book");
const { Op } = require("sequelize");

exports.addBook = async function (bookObj) {
  const ins = await Book.create(bookObj);
  return ins.toJSON();
};

exports.deleteBook = async function (id) {
  return await Book.destroy({
    where: {
      id,
    },
  });
};

exports.updateBook = async function (id, bookObj) {
  return await Book.destroy(bookObj, {
    where: {
      id,
    },
  });
};

exports.getBookById = async function (id) {
  const result = await Book.findByPk(id);
  if (result) {
    return result.toJSON();
  }
  return null;
};

exports.getBooks = async function (page = 1, limit = 10, keywords = "") {
  const result = await Book.findAndCountAll({
    attributes: ["id", "name", "imgurl", "publishDate"],
    where: {
      [Op.or]: [
        //里面的两个条件是或者关系
        {
          //条件1：姓名模糊匹配关键词
          name: {
            [Op.like]: `%${keywords}%`,
          },
        },
        {
          //条件2：作者模糊匹配关键词
          author: {
            [Op.like]: `%${keywords}%`,
          },
        },
      ],
    },
    offset: (page - 1) * limit, // 跳过多少行
    limit: +limit, // 查询多少行
  });
  // 返回一个对象，记录的是数量和对应的数据
  return {
    total: result.count,
    datas: JSON.parse(JSON.stringify(result.rows)),
  };
};
