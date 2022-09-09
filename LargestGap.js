/*
Largest gap in an array:
Given an unsorted array of length N, and we have to find the largest gap between any two elements of the array. 
In simple words, find max(|Ai-Aj|) where 1 ≤ i ≤ N and 1 ≤ j ≤ N.

Examples:  

Input : arr = {3, 10, 6, 7}
Output : 7
Explanation :
Here, we can see largest gap can be
found between 3 and 10 which is 7
Input : arr = {-3, -1, 6, 7, 0}
Output : 10
Explanation :
Here, we can see largest gap can be 
found between -3 and 7 which is 10 
*/

function largestGap(arr) {

    let max = Number.MIN_VALUE;

    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < arr.length; j++) {
            if (Math.abs(arr[i] - arr[j]) > max) {
                max = Math.abs(arr[i] - arr[j]);
            }
        }

    } return max;
}

let arr = [3, 10, 6, 7]; //Expect 3 and 10 = 7
let arr2 = [-3, -1, 6, 7, 0]; //Expect -3 and 7 = 10
let arr3 = [22, 100, 1, 8, 77, 3]; //Expect 1 and 100 = 99

console.log(largestGap(arr)); //Pass
console.log(largestGap(arr2)); //Pass
console.log(largestGap(arr3)); //Pass