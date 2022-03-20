class QuickSort {
  arr = [];
  constructor(arr) {
    this.arr = arr;
  }

  start() {
    if(this.arr.length === 0 || this.arr.length === 1) {
      return this.arr;
    }
    this.quickSort(this.arr, 0 , this.arr.length - 1);
  }

  quickSort(arr, start, end) {
    if(start >= end) {
      return;
    }
    const middle = Math.floor((start + end) / 2);
    this.swap(end, middle, arr);
    for(let i = start, j = end - 1;;) {
      if(arr[i] <= arr[end]) {
        i++;
      }
      if(arr[j] >= arr[end]) {
        j--;
      }
      if(i > j) {
        this.swap(i, end, arr);
        this.quickSort(arr, start , i - 1);
        this.quickSort(arr, i + 1 , end);
        break;
      }
      if(arr[i] > arr[end] && arr[j] < arr[end]) {
        this.swap(i, j, arr);
      }
    }
  }

  swap(source, target, arr) {
    const temp = arr[target];
    arr[target] = arr[source];
    arr[source] = temp;
  }
};

// [15,5,2,7,12,6,14,3,9,8,10]
// [2,6,9,10,1,3,7,8,11]
// const ms = new MergeSort([2,6,9,10,1,3,7,8,11]);
const ms = new QuickSort([15,5,2,7,12,6,14,3,9,8,10]);
ms.start();
console.log(ms.arr);
