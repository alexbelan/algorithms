function curry<T, R>(func: (...rest: R[]) => T) {
  return function curreid(...args: T[]) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    }
    return function (...args2: T[]) {
      return curreid.apply(this, args.concat(args2));
    };
  };
}

function sum(a: number, b: number, c: number) {
  return a + b + c;
}

let curriedSum = curry(sum);

console.log(curriedSum(1, 2, 3)); // 6, still callable normally
console.log(curriedSum(1)(2, 3)); // 6, currying of 1st arg
console.log(curriedSum(1)(2)(3)); // 6, full currying
