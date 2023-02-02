var mergeSort = function (arr) {
  if (arr.length > 1) {
    var mid = Math.floor(arr.length / 2);
    var left = arr.slice(0, mid);
    var right = arr.slice(mid);
    mergeSort(left);
    mergeSort(right);
    var i = 0;
    var j = 0;
    var k = 0;
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
var arr = [24, 13, 10, 12, 8, 6, 9, 22, 1, 2, 16, 5, 20, 14, 11, 25, 3, 4, 21, 15, 19, 17, 7, 18, 23];
mergeSort(arr);
console.log(arr);
