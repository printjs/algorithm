class HeapSort {
  arr = [];
  constructor(arr) {
    this.arr = arr;
  }

  start() {
    const result = [];
    for(let i = 0; i < this.arr.length;) {
      this.buildMaxHeap();
      result.push(this.arr[i]);
      this.arr[i] = this.arr[this.arr.length - 1];
      this.arr.pop();
    }
    return result;
  }

  buildMaxHeap() {
    for(let i = Math.floor(this.arr.length / 2); i >= 0; i--) {
      this.heapify(this.arr, i);
    }
  }

  heapify(arr, i) {
    const root = i - 1;
    const left = 2 * root + 1;
    const right = 2 * root + 2;
    if(left < arr.length) {
      if(arr[left] > arr[root]) {
        this.swap(left, root, arr);
      }
    }
    if(right < arr.length) {
      if(arr[right] > arr[root]) {
        this.swap(right, root, arr);
      }
    }
  }

  swap(source, target, arr) {
    const temp = arr[target];
    arr[target] = arr[source];
    arr[source] = temp;
  }
}


console.log(new HeapSort([15,5,2,7,12,6,14,3,9,8,10]).start());