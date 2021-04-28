const Student = require("../models/Student");

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
