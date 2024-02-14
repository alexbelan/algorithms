console.log("Promise");

interface Promise<T> {
  myAll<T>(values: readonly unknown[] | []): Promise<[] | unknown[]>;
}

Promise.prototype.myAll = function <T extends unknown[] | []>(iterable: any[]) {
  return new Promise(async (resolve, reject) => {
    const result: Array<T> = [];
    let count: number = 0;
    for (let i = 0; i < iterable.length; i++) {
      Promise.resolve(iterable[i]).then((value: any) => {
        count++;
        result[i] = value;
        if (count === iterable.length) {
          resolve(result);
        }
      });
    }
  });
};

const p1 = Promise.resolve(3);
const p2 = 1337;
const p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

Promise.prototype
  .myAll([p1, p2, p3])
  .then((value) => console.log("myAll", value))
  .catch((err) => console.log(err));
