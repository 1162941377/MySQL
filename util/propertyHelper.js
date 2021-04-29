/**
 * 根据条件过滤传入的参数
 * @param {*} obj 传入要过滤的对象
 * @param  {...any} props 以剩余参数的形式接收
 * @returns 返回一个过滤好的对象
 */
exports.pick = function (obj, ...props) {
  if (!obj || typeof obj !== "object") {
    return obj;
  }
  const newObj = {};
  for (const key in obj) {
    if (props.includes(key)) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
};
