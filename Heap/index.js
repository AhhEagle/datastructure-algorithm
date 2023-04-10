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