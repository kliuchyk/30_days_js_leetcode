function curry(fn) {
  let fnArgs = [];

  return function curried(...args) {
    fnArgs = [...fnArgs, ...args];

    if (fn.length === fnArgs.length) {
      const res = fn(...fnArgs);
      fnArgs = [];
      return res;
    } else {
      return curried;
    }
  };
}
