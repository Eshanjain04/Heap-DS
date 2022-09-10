let arr = [40,20,30,35,25,80,32,100,70,60]

function heapify(arr,i){
    let left = 2*i + 1;
    let right = 2*i + 2;
    let smallest = i;

    if(left<arr.length && arr[left]<arr[smallest]){
        smallest = left;
    }

    if(right < arr.length && arr[right]< arr[smallest]){
        smallest = right;
    }

    if(smallest != i){
        let temp = arr[smallest];
        arr[smallest] = arr[i];
        arr[i] = temp;

        heapify(arr,smallest);
    }
}


heapify(arr,0);
console.log(arr);