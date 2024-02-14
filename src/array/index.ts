console.log("Array");

interface Array<T> {
  myMap<I>(callback: (item: T, index?: number, arr?: Array<T>) => I): Array<I>;
  myFilter(
    callback: (item: T, index?: number, arr?: Array<T>) => boolean
  ): Array<T>;
  myReduce<I>(
    callback: (acc: I, currValue: T, index?: number, arr?: Array<T>) => I,
    initValue?: I
  ): Array<T>;
}

Array.prototype.myMap = function (callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this));
  }
  return newArray;
};

Array.prototype.myFilter = function (callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (Boolean(callback(this[i], i, this))) {
      newArray.push(this[i]);
    }
  }
  return newArray;
};

Array.prototype.myReduce = function (callback, initValue) {
  let value = initValue ?? this[0];
  for (let i = initValue !== undefined ? 0 : 1; i < this.length; i++) {
    value = callback(value, this[i], i, this);
  }
  return value;
};

const arrayBase = [1, 2, 3, 4];

console.log("arrayBase", arrayBase);

const arrayMap = arrayBase.myMap((item) => String(item));

console.log("array.myMap()", arrayMap);

const arrayFilter = arrayBase.myFilter((item) => item === 2);

console.log("array.myFilter()", arrayFilter);

const arrayReduce = arrayBase.myReduce<number>((acc, carr) => acc + carr);

console.log("array.myReduce()", arrayReduce);
