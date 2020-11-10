/**
 * @func 利用装饰器统一处理methods里的aysnc函数
 * @param {*} target
 * @param {*} key
 * @param {*} descriptor
 * @return Promise([err,data])
 */
// eslint-disable-next-line import/prefer-default-export
export function handleAsyncError(target, key, descriptor) {
  const originFn = descriptor.value;
  // eslint-disable-next-line no-param-reassign
  descriptor.value = function newfunc(...args) {
    return Promise.resolve(originFn.apply(this, args))
      .then(res => [null, res])
      .catch(err => [err, null]);
  };
}
