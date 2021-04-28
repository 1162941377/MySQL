const Book = require("../models/Book");

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
