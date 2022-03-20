export class ShellSort {
  arr = [];
  constructor(arr) {
    this.arr = arr;
  }

  start() {
    for(let gap = Math.floor(this.arr.length / 2); gap > 0; gap = Math.floor(gap / 2)) {
      for(let j = 0; j < this.arr.length; j++) {
        for(let k = j + gap; k < this.arr.length; k += gap) {
          if(this.arr[j] > this.arr[k]) {
            const temp = this.arr[j];
            this.arr[j] = this.arr[k];
            this.arr[k] = temp;
          }
        }
      }
    }
  }
}

const ss = new ShellSort([15,5,2,7,12,6,14,3,9,8,10]);
ss.start();

console.log(ss.arr);
