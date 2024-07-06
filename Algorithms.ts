// Merge sort
// Efficient, divide-and-conquer sorting algorithm.
// Divides the array into halves, sorts each half recursively, and merges them.
// Good for understanding recursion and divide-and-conquer strategies.
function mergeSort<T>(arr: T[]): T[] {
    if (arr.length <= 1) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const leftSide = arr.slice(0, middle);
    const rightSide = arr.slice(middle);

    // recursively sort each half
    const sortedLeft = mergeSort(leftSide);
    const sortedRight = mergeSort(rightSide);

    return merge(sortedLeft, sortedRight);
}

function merge<T>(left: T[], right: T[]): T[] {
    let result: T[] = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // iterate both
    while(leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] <= right[rightIndex]) {
            // Take from the left side, increase left index
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    result = [...result, ...left.slice(leftIndex), ...right.slice(rightIndex)];
    return result;
}

const arr = [5, 4, 6, 99, 45, 2, 7, 11, 56, 43, 29, 70, 101];
const sortedArr = mergeSort(arr);
console.log(sortedArr);


// Quick sort
// Efficient in-place sorting algorithm with average O(n log n) time complexity.
// Uses a pivot element to partition the array into smaller and larger elements.
// Important for understanding recursion and partitioning strategies.
function quickSort<T>(arr: T[]): T[] {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[0];
    const left: T[] = [];
    const right: T[] = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    const sortedLeft = quickSort(left);
    const sortedRight = quickSort(right);

    return [...sortedLeft, pivot, ...sortedRight];
}

const quickSortArr = [5, 2, 9, 1, 5, 6];
const sortedArray = quickSort(quickSortArr);
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
    for (let i = arr.length - 1; i > 0; i--) {
        // Swap root (max element) with last unsorted element
        swap(arr, 0, i);

        // Maintain max heap property on the reduced heap
        maxHeapify(arr, 0, i);
    }

    return arr;
}

// Helper function to build max heap
function buildMaxHeap(arr) {
    const n = arr.length;
    // Start from the last non-leaf node and heapify down to the root
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        maxHeapify(arr, i, n);
    }
}

// Helper function to maintain max heap property
function maxHeapify(arr, i, heapSize) {
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    let largest = i;

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
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

// Example usage:
const heapArr = [5, 2, 9, 1, 5, 6];
const sortedHeapArray = heapSort(heapArr.slice());
console.log(sortedHeapArray); // Output: [1, 2, 5, 5, 6, 9]


// Binary Search
// Efficient search algorithm for sorted arrays.
// Divides the array into halves, compares the target value with the middle element, and continues the search in the appropriate half.
// Important for understanding divide-and-conquer strategies and logarithmic time complexity.


// Dijkstra's Algorithm
// Finds the shortest path from a single source vertex to all other vertices in a weighted graph with non-negative weights.
// Uses a priority queue (min heap) to repeatedly select the vertex with the smallest distance.
// Crucial for understanding shortest path algorithms and graph traversal.