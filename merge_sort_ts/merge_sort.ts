const mergeSort = (arr: number[]) => {
  if (arr.length > 1) {
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    mergeSort(left);
    mergeSort(right);

    let i = 0;
    let j = 0;
    let k = 0;

    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        arr[k] = left[i];
        i += 1;
      } else {
        arr[k] = right[j];
        j += 1;
      }
      k += 1;
    }

    while (i < left.length) {
      arr[k] = left[i];
      i += 1;
      k += 1;
    }

    while (j < right.length) {
      arr[k] = right[j];
      j += 1;
      k += 1;
    }
  }
};

let arr = [24, 13, 10, 12, 8, 6, 9, 22, 1, 2, 16, 5, 20, 14, 11, 25, 3, 4, 21, 15, 19, 17, 7, 18, 23];
mergeSort(arr)
console.log(arr)
