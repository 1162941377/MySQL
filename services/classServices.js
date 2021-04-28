const Class = require("../models/Class");

exports.addClass = async function (classObj) {
  const ins = await Class.create(classObj);
  return ins.toJSON();
};

exports.deleteClass = async function (id) {
  return await Class.destroy({
    where: {
      id,
    },
  });
};

exports.updateClass = async function (id, classObj) {
  return await Class.update(classObj, {
    where: {
      id,
    },
  });
};
