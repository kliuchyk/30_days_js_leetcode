function curry(fn) {
  let fnArgs = [];

  return function curried(...args) {
    fnArgs = [...fnArgs, ...args];

    if (fn.length === fnArgs.length) {
      const res = fn(...nums);
      nums = [];
      return res;
    } else {
      return curried;
    }
  };
}
