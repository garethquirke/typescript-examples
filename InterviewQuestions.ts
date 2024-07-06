function sumArray<T extends number | bigint>(arr: number[]): bigint {
    return arr.reduce((acc, curr) => acc + curr, 0 as T);
}

const numbers = [1, 2, 3, 4, 5];
const bigIntegers = [BigInt(10), BigInt(20), BigInt(30)];

console.log(sumArray(numbers)); // Output: 15
console.log(sumArray(bigIntegers)); // Output: 60n
