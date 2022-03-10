export class PriorityQueue {
  list = [];

  // biological order
  insert(val) {
    this.list.push(val);
    for(let i = this.list.length - 1; i > 0; i = Math.floor((i - 1) / 2)) {
      let rootIndex = Math.floor((i - 1) / 2);
      if(this.list[i] < this.list[rootIndex]) {
        const temp = this.list[rootIndex];
        this.list[rootIndex] = this.list[i];
        this.list[i] = temp;
        continue;
      }
      return;
    }
  }
  // remove min
  deleteMin() {
    let min;
    if(this.list.length > 0) {
      min = this.list[0];
      this.percolateDown(0);
    }
    this.list.pop();
    return min;
  }

  binaryHeap(arr) {
    if(arr.length  === 0) {
      return [];
    }
    for(let start = Math.floor(arr.length / 2) - 1; start >=0; start--) {
      this.buildHeap(arr, start);
    }
    return arr;
  }

  buildHeap(arr, start) {
    for(let i = start; i < arr.length;) {
      const left = 2 * i + 1;
      const right = 2 * i + 2;
      if(typeof arr[left] !== 'undefined' && typeof arr[right] !== 'undefined') {
        if(arr[left] > arr[right] && arr[right] < arr[i]) {
          this.swap(right, i, arr);
          i = right;
          continue;
        }
        if(arr[left] < arr[right] && arr[left] < arr[i]) {
          this.swap(left ,i ,arr);
          i = left;
          continue;
        }
      }
      if(typeof arr[left] !== 'undefined' && arr[left] < arr[i]) {
        this.swap(left ,i, arr);
        i = left;
        continue;
      }
      if(typeof arr[right] !== 'undefined' && arr[right] < arr[i]) {
        this.swap(right, i, arr);
        i = right;
        continue;
      }
      return;
    }
  }

  percolateDown(start) {
    for(;start < this.list.length;) {
      let leftIndex = 2 * start + 1;
      let rightIndex = 2 * start + 2;
      if(typeof this.list[leftIndex] !== 'undefined' && typeof this.list[rightIndex] !== 'undefined') {
        if(this.list[leftIndex] > this.list[rightIndex]) {
          this.list[start] = this.list[rightIndex];
          start = rightIndex;
        } else {
          this.list[start] = this.list[leftIndex];
          start = leftIndex;
        }
      } else if(typeof this.list[leftIndex] !== 'undefined') {
        this.list[start] = this.list[leftIndex];
        start = leftIndex;
      } else if(typeof this.list[rightIndex] !== 'undefined') {
        this.list[start] = this.list[rightIndex];
        start = rightIndex;
      } else if(start !== this.list.length - 1){
        this.list[start] = this.list[this.list.length - 1];
        break;
      } else if(start === this.list.length - 1) {
        break;
      }
    }
  }

  swap(source,target,arr) {
    const temp = arr[target];
    arr[target] = arr[source];
    arr[source] = temp;
  }
}

const pq = new PriorityQueue();

const arr = [10,9,8,7,6,5,4,3,2,1,11,12];
// const arr = [1,2,3,4,5,6];
for(let i = 0;i< arr.length; i++) {
  pq.insert(arr[i]);
}

console.log(pq.list);

pq.deleteMin();

console.log(pq.list);

console.log(pq.binaryHeap([5,10,3,4,9,2]));

console.log(pq.binaryHeap([4,10,7,9,2,6,3,8,1,0]));
