let arr = [10,15,50,4,20];
let n = arr.length;

/* 
          10
         /  \
        15  50
        /\
       4  20
*/

function heapify(arr,n,i){
    let left = 2*i+1;
    let right = 2*i+2;
    let largest = i;

    if(left< n && arr[left] > arr[largest]){
        largest = left;
    }

    if(right< n && arr[right] > arr[largest]){
        largest = right;
    }

    if(largest != i){
        let temp = arr[largest];
        arr[largest] = arr[i];
        arr[i] = temp;

        heapify(arr,n,largest);
    }
}

function buildHeap(arr,n){
    for(let i = parseInt(n-2/2);i>=0;i--){
        heapify(arr,n,i);
    }
}

function heapSort(arr,n){
    buildHeap(arr,n);
    for(let i = n-1;i>=1;i--){
        let temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;
        heapify(arr,i,0);
    }

}
heapSort(arr,n);
console.log(arr);

