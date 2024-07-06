// Find the Missing Number:
// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing.
function findMissingNumber(nums: number[]): number {
    const n = nums.length;
    const expectedSum = (n * (n + 1)) / 2;  
    const actualSum = nums.reduce((sum, num) => sum + num, 0);
    
    return expectedSum - actualSum;
}

// Example Usage:
const nums = [3, 0, 1];
const missingNumber = findMissingNumber(nums);
console.log(`The missing number is: ${missingNumber}`);

