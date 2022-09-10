class Heap {
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
        let bigger = left;
        if (right < this.size)
            bigger = this.heap[left][0] > this.heap[right][0] ? left : right;
        if (this.heap[pos][0] < this.heap[bigger][0]) {
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
var topKFrequent = function(nums, k) {
    let n = nums.length
    let heap = new Heap();
    let hm = new Map();
    
    for(let i=0;i<n;i++){
        if(hm.has(nums[i])){
            let temp = hm.get(nums[i])[0];
            hm.set(nums[i],[temp+1,i]);
        }
        else{
            hm.set(nums[i],[1,i]);
        }
    }
    
    for(let value of hm.values()){
        heap.insert(value);
    }
    
    let ans = [];
    for(let i=0;i<k;i++){
        //console.log(heap.peek());
        ans.push(nums[heap.peek()[1]]);
        heap.delete();
    }
    
    return ans;
}

let nums = [-1,-1];
let k = 1;
console.log(topKFrequent(nums,k));