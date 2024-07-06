var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Merge sort
// Efficient, divide-and-conquer sorting algorithm.
// Divides the array into halves, sorts each half recursively, and merges them.
// Good for understanding recursion and divide-and-conquer strategies.
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    var middle = Math.floor(arr.length / 2);
    var leftSide = arr.slice(0, middle);
    var rightSide = arr.slice(middle);
    // recursively sort each half
    var sortedLeft = mergeSort(leftSide);
    var sortedRight = mergeSort(rightSide);
    return merge(sortedLeft, sortedRight);
}
function merge(left, right) {
    var result = [];
    var leftIndex = 0;
    var rightIndex = 0;
    // iterate both
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] <= right[rightIndex]) {
            // Take from the left side, increase left index
            result.push(left[leftIndex]);
            leftIndex++;
        }
        else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    result = __spreadArray(__spreadArray(__spreadArray([], result, true), left.slice(leftIndex), true), right.slice(rightIndex), true);
    return result;
}
var arr = [5, 4, 6, 99, 45, 2, 7, 11, 56, 43, 29, 70, 101];
var sortedArr = mergeSort(arr);
console.log(sortedArr);
// Quick sort
// Efficient in-place sorting algorithm with average O(n log n) time complexity.
// Uses a pivot element to partition the array into smaller and larger elements.
// Important for understanding recursion and partitioning strategies.
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    var pivot = arr[0];
    var left = [];
    var right = [];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        }
        else {
            right.push(arr[i]);
        }
    }
    var sortedLeft = quickSort(left);
    var sortedRight = quickSort(right);
    return __spreadArray(__spreadArray(__spreadArray([], sortedLeft, true), [pivot], false), sortedRight, true);
}
var quickSortArr = [5, 2, 9, 1, 5, 6];
var sortedArray = quickSort(quickSortArr);
console.log(sortedArray);
// Heap sort
// Efficient comparison-based sorting algorithm using a binary heap data structure.
// Builds a max heap (or min heap), repeatedly removes the root element (largest in max heap), and rebuilds the heap.
// Useful for understanding heap data structures and sorting techniques.
// Heap Sort function
function heapSort(arr) {
    // Build max heap
    buildMaxHeap(arr);
    // Extract elements from the heap one by one
    for (var i = arr.length - 1; i > 0; i--) {
        // Swap root (max element) with last unsorted element
        swap(arr, 0, i);
        // Maintain max heap property on the reduced heap
        maxHeapify(arr, 0, i);
    }
    return arr;
}
// Helper function to build max heap
function buildMaxHeap(arr) {
    var n = arr.length;
    // Start from the last non-leaf node and heapify down to the root
    for (var i = Math.floor(n / 2) - 1; i >= 0; i--) {
        maxHeapify(arr, i, n);
    }
}
// Helper function to maintain max heap property
function maxHeapify(arr, i, heapSize) {
    var left = 2 * i + 1;
    var right = 2 * i + 2;
    var largest = i;
    // Compare with left child
    if (left < heapSize && arr[left] > arr[largest]) {
        largest = left;
    }
    // Compare with right child
    if (right < heapSize && arr[right] > arr[largest]) {
        largest = right;
    }
    // If largest is not root, swap and recursively heapify affected sub-tree
    if (largest !== i) {
        swap(arr, i, largest);
        maxHeapify(arr, largest, heapSize);
    }
}
// Helper function to swap two elements in an array
function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
// Example usage:
var heapArr = [5, 2, 9, 1, 5, 6];
var sortedHeapArray = heapSort(heapArr.slice());
console.log(sortedHeapArray); // Output: [1, 2, 5, 5, 6, 9]
var graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
};
function dfsRecursive(graph, startVertex, visited) {
    visited.add(startVertex);
    console.log(startVertex);
    for (var _i = 0, _a = graph[startVertex]; _i < _a.length; _i++) {
        var neighbor = _a[_i];
        if (!visited.has(neighbor)) {
            dfsRecursive(graph, neighbor, visited);
        }
    }
}
// Function to initialize DFS traversal
function dfs(graph, startVertex) {
    var visited = new Set();
    dfsRecursive(graph, startVertex, visited);
}
// Example usage:
console.log("Depth-First Search starting from vertex 'A':");
dfs(graph, 'A');
// Dijkstra's Algorithm
// Finds the shortest path from a single source vertex to all other vertices in a weighted graph with non-negative weights.
// Uses a priority queue (min heap) to repeatedly select the vertex with the smallest distance.
// Crucial for understanding shortest path algorithms and graph traversal.
