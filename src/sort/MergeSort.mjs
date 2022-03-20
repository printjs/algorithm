class MergeSort {
  arr = [];
  constructor(arr) {
    this.arr = arr;
  }

  start() {
    this.separate(0, this.arr.length);
  }

  separate(start, end) {
    if(end - start !== 1) {
      const center = Math.floor((start + end) / 2);
      this.separate(start, center);
      this.separate(center, end);
      this.sort(this.arr, start, center, end);
    }
  }

  sort(arr, start, center, end) {
    const a = [];
    const b = [];
    for(let i = start; i < center; i++) {
      a.push(arr[i]);
    }
    for(let i = center; i < end; i++) {
      b.push(arr[i]);
    }
    for(let k = start, i = 0, j = 0; k < end || i < a.length || j < b.length;) {
      if (a[i] > b[j]) {
        arr[k] = b[j];
        k++;
        j++;
      } else if(a[i] < b [j]) {
        arr[k] = a[i];
        i++;
        k++;
      } else {
        if(a[i]) {
          arr[k] = a[i];
          k++;
          i++;
        }
        if(b[j]) {
          arr[k] = b[j];
          k++;
          j++;
        }
      }
    }
  }
};

// [15,5,2,7,12,6,14,3,9,8,10]
// [2,6,9,10,1,3,7,8,11]
// const ms = new MergeSort([2,6,9,10,1,3,7,8,11]);
const ms = new MergeSort([15,5,2,7,12,6,14,3,9,8,10]);
ms.start();
console.log(ms.arr);
