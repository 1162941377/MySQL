// 管理员的初始化

// 判断数据库中是否有管理员，如果没有，自动添加一个默认的管理员

const Admin = require("../models/Admin");
const md5 = require("md5");

exports.addAdmin = async function (adminObj) {
  // 应该判断 adminObj 的各种属性是否合理，以及账号是否具有该权限
  adminObj.loginPwd = md5(adminObj.loginPwd);
  const ins = await Admin.create(adminObj);
  return ins.toJSON(); // 转换为 JSON 格式
};

exports.deleteAdmin = async function (adminId) {
  /**
   * 方式一：
   * 先得到实例，再删除实例，但会运行两条 sql 语句，为了更好的执行效率，一般不这样使用
   * const ins = await Admin.findByPk(adminId);
   * if (ins) {
   *    await ins.destroy();
   * }
   */

  /**
   * 方式二：
   * 直接调用模型对象的destroy方法，推荐使用
   */
  return await Admin.destroy({
    where: {
      id: adminId,
    },
  });
};

exports.updateAdmin = async function (id, adminObj) {
  // 同样有两种方式，同上，推荐使用第二种
  /* const ins = await Admin.findByPk(id);
  ins.loginId = adminObj.loginId;
  ins.save(); // 保存 */

  return await Admin.destroy(adminObj, {
    where: {
      id,
    },
  });
};

exports.login = async function (loginId, loginPwd) {
  loginPwd = md5(loginPwd);
  const result = await Admin.findOne({
    where: {
      loginId,
      loginPwd,
    },
  });
  // 由于数据库是不区分大小写的，所以加上此验证
  // 按理说，密码也是要判断的，但是由于使用了md5加密，大小写的字母加密后的结果不一致，所以可以不用
  if (result && result.loginId === loginId) {
    return result.toJSON();
  }
  return null;
};

exports.getAdminById = async function (id) {
  const result = await Admin.findByPk(id);
  if (result) {
    return result.toJSON();
  }
  return null;
};

exports.getAdmins = async function () {
  const result = await Admin.findAll();
  return JSON.parse(JSON.stringify(result));
};
