// Find the Missing Number:
// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing.
function findMissingNumber(nums) {
    var n = nums.length;
    var expectedSum = (n * (n + 1)) / 2; // Sum of first n natural numbers
    var actualSum = nums.reduce(function (sum, num) { return sum + num; }, 0); // Sum of array elements
    return expectedSum - actualSum; // The missing number
}
// Example Usage:
var nums = [3, 0, 1];
var missingNumber = findMissingNumber(nums);
console.log("The missing number is: ".concat(missingNumber));
