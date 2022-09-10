class minHeap{
    constructor(){
        this.arr = [];
    }

    insert(val){
        this.arr.push(val);

        let i = this.arr.length-1;
        let parent = Math.floor((i-1)/2);

        if(parent<0){
            return;
        }

        while(i>0 && this.arr[parent] > this.arr[i]){
            const temp = this.arr[parent];
            this.arr[parent] = this.arr[i];
            this.arr[i] = temp;

            i = parent;
            parent = Math.floor((i-1)/2);
        }
    }

    changeVal(index,val){
        if(index > this.arr.length){
            return;
        }

        this.arr[index] = val;

        let parent = Math.floor((index-1)/2);
        while(index>0 && this.arr[parent] > this.arr[index]){
            let temp = this.arr[parent];
            this.arr[parent] = this.arr[index];
            this.arr[index] = temp;

            index = parent;
            parent = Math.floor((index-1)/2);
        }

    }

    delete(index){
        if(index > this.arr.length){
            return;
        }

        let left = 2*index+1;
        let right = 2*index+2;

        if(left >= this.arr.length && right >= this.arr.length){
            this.arr.splice(index,1);
        }

        else if(right >= this.arr.length){
            this.arr[index] = this.arr[left];
            this.arr.pop();
        }

        else{
            let smallest = this.arr[left] < this.arr[right] ? left : right;
            console.log(smallest);
            this.arr[index] = this.arr[smallest];

            this.arr.splice(smallest,1);

        }

    }
}

let mh = new minHeap();
mh.insert(10);
mh.insert(20);
mh.insert(30);
mh.insert(40);
mh.insert(50);
mh.insert(35);
mh.insert(38);
mh.insert(45);

mh.delete(2);
console.log(mh.arr);