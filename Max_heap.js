class Heap {
    constructor(stones) {
        this.heap = stones;
        this.size = stones.length;
        this.heapify(0);
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
        let bigger = left;
        if (right < this.size)
            bigger = this.heap[left] > this.heap[right] ? left : right;
        if (this.heap[pos] < this.heap[bigger]) {
            this.swap(pos, bigger);
            this.fix(bigger);
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

/*
[
  996, 919, 902, 434,
  667, 557, 634, 257,
  208, 212, 411, 222,
  378, 240, 425
] 

[
  996, 919, 902, 434,
  667, 557, 634, 257,
  208, 212, 411, 222,
  378, 240, 425
]
 */


let arr = [434,667,378,919,212,902,240,257,208,996,411,222,557,634,425];
let pq = new Heap(arr);

console.log(pq.heap);