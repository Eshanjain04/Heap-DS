class Min_Heap {
    constructor() {
        this.heap = [];
        this.size = 0;
    }
    right(pos) {
        return 2 * pos + 2;
    }
    left(pos) {
        return 2 * pos + 1;
    }
    isleaf(pos) {
        if (2 * pos + 1 >= this.size) return true;
        return false;
    }
    swap(a, b) {
        let temp = this.heap[a];
        this.heap[a] = this.heap[b];
        this.heap[b] = temp;
    }
    fix(pos) {
        if (this.isleaf(pos)) return;
        let left = this.left(pos);
        let right = this.right(pos);
        let smaller = left;
        if (right < this.size)
            smaller = this.heap[left] < this.heap[right] ? left : right;
        if (this.heap[pos] > this.heap[smaller]) {
            this.swap(pos, smaller);
            this.fix(smaller);
        }
    }
    heapify(pos) {
        if (this.isleaf(pos)) return;
        this.heapify(this.left(pos));
        this.heapify(this.right(pos));
        this.fix(pos);
    }
    delete() {
        this.swap(0, --this.size);
        this.fix(0);
        return this.heap[0];
    }
    insert(val) {
        this.size++;
        this.heap[this.size - 1] = val;
        this.heapify(0);
    }
    peek() {
        return this.heap[0];
    }
}



let arr = [1,23,12,9,30,2,50];

let pq = new Min_Heap();
for(let i=0;i<arr.length;i++){
    pq.insert(arr[i]);
}
console.log(pq.heap);
