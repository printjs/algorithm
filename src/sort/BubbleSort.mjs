export class BubbleSort {
  arr = []
  constructor(arr) {
    this.arr = arr;
  }

  start() {
    for(let i = 0; i < this.arr.length; i++) {
      for(let j = 0; j < this.arr.length; j++) {
        if(j + 1 < this.arr.length && this.arr[j] > this.arr[j + 1]) {
          this.swap(j + 1, j, this.arr);
        }
      }
    }
    return this.arr;
  }

  swap(source, target ,arr) {
    const temp = arr[target];
    arr[target] = arr[source];
    arr[source] = temp;
  }
}


console.log(new BubbleSort([15,5,2,7,12,6,14,3,9,8,10]).start());
