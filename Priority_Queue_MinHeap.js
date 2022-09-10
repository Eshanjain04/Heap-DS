class PriorityQueue{
    constructor(){
        this.arr = [];
    }

    left(i){
        return 2*i+1;
    }

    right(i){
        return 2*i+2;
    }

    parent(i){
        return parseInt((i-1)/2);
    }

    isleaf(i){
        return this.left(i)>=this.arr.length ? true : false;
    }

    swap(i,j){
        let temp = this.arr[i];
        this.arr[i] = this.arr[j];
        this.arr[j] = temp;
    }

    shiftUp(i){
        while (i > 0 && this.arr[this.parent(i)] > this.arr[i]) {
            this.swap(this.parent(i),i);
            i = this.parent(i);
        }
    }

    heapify(i){
        if(this.isleaf(i)){
            return;
        }

        let left = this.left(i);
        let right = this.right(i);

        let smallest = i;

        if(left <= this.arr.length && this.arr[left] < this.arr[smallest] ){
            smallest = left;
        }

        if(right <= this.arr.length && this.arr[right] < this.arr[smallest] ){
            smallest = right;
        }

        if(smallest != i){
            this.swap(smallest,i);
            this.heapify(smallest);
        }
    }

    insert(val){
        this.arr.push(val);

        let i = this.arr.length-1;
        
        this.shiftUp(i);
    }

    peek(){
        return this.arr[0];
    }

    pop(){
        let ele = this.arr.splice(0,1);
        this.heapify(0);
        return ele[0];
    }

    changeVal(i,val){
        let old_val = this.arr[i];
        this.arr[i] = val;

        if(old_val > val){
            this.shiftUp(i);
        }else{
            this.heapify(i);
        }
    }

}

let pq = new PriorityQueue();
pq.insert(20);
pq.insert(14);
pq.insert(12);
pq.insert(31);
pq.insert(7);
pq.insert(11);
pq.insert(13);
pq.insert(45);
pq.insert(5);
console.log(pq.arr);
pq.pop();
console.log(pq.arr);
pq.pop();
console.log(pq.arr);
pq.changeVal(5,10);
console.log(pq.arr);
