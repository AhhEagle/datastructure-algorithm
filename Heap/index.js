const minHeap = require('./minHeap.js');
const maxHeap = require('./maxHeap.js');
function minHeapify(heap, index) {
    var left = index * 2;
    var right = (index * 2) + 1;
    var smallest = index;

    if ((heap.length > left) && (heap[smallest] > heap[left])) {
        smallest = left
    }
    if ((heap.length > right) && (heap[smallest] > heap[right]))
        smallest = right
    if (smallest != index) {
        var tmp = heap[smallest]
        heap[smallest] = heap[index]
        heap[index] = tmp
        minHeapify(heap, smallest)
    }
    return heap;
}

function convertMax(maxHeap) {
    for (var i = Math.floor((maxHeap.length) / 2); i > -1; i--)
        maxHeap = minHeapify(maxHeap, i)
    return maxHeap
}



function findKSmallest(arr, k) {
  var myheap = new minHeap();
  myheap.buildHeap(arr)
  var kSmallest = [];
  if(k > arr.length){
    k = arr.length;
  }
  for (var i = 0; i < k; i++)
    kSmallest.push(myheap.removeMin());

  return kSmallest;

}



function findKLargest(lst, k) {
    var heap = new maxHeap()
    heap.buildHeap(lst)
    var kLargest = [];
    if (k > lst.length){
        k = lst.length;
    }
    for (var i = 0; i < k; i++)
        kLargest.push(heap.removeMax());

    return kLargest;
}
  