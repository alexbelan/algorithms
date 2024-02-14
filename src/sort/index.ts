const testArray = [2, 4, 1, 9, 2, 3, 1, 8, 3, 4, 16];

const bubbelSort = <T>(arr: Array<T>) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        const tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
      }
    }
  }
  return arr;
};

console.log(bubbelSort(testArray));
