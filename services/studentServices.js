const Student = require("../models/Student");
const { Op } = require("sequelize");
const Class = require("../models/Class");

exports.addStudent = async function (studentObj) {
  const ins = await Student.create(studentObj);
  return ins.toJSON();
};

exports.deleteStudent = async function (id) {
  return await Student.destroy({
    where: {
      id,
    },
  });
};

exports.updateStudent = async function (id, studentObj) {
  return await Student.update(studentObj, {
    where: {
      id,
    },
  });
};

exports.getStudentById = async function (id) {
  const result = await Student.findByPk(id);
  if (result) {
    return result.toJSON();
  }
  return null;
};

exports.getStudents = async function (
  page = 1,
  limit = 10,
  sex = -1,
  name = ""
) {
  const where = {};
  if (sex !== -1) {
    // 判断是否是传了 sex 的值，如果传了，将其转为 true 或 false
    where.sex = !!sex;
  }
  if (name) {
    where.name = {
      [Op.like]: `%${name}%`,
    };
  }

  const result = await Student.findAndCountAll({
    attributes: ["id", "name", "sex", "birthday"],
    where,
    include: [Class],
    offset: (page - 1) * limit,
    limit: +limit,
  });
  return {
    total: result.count,
    datas: JSON.parse(JSON.stringify(result.rows)),
  };
};
