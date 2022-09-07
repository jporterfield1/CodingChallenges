/*
Maximum Sum SubArray using Divide and Conquer:
 
Given an array arr[] of integers, the task is to find the maximum sum sub-array among 
all the possible sub-arrays.
Examples: 
 
Input: arr[] = {-2, 1, -3, 4, -1, 2, 1, -5, 4} 
Output: 6 
{4, -1, 2, 1} is the required sub-array.
Input: arr[] = {2, 2, -2} 
Output: 4 
*/

function maxSum(arr) {

    let num = 0;
    let nextLastNum = arr[arr.length - 1];
    let lastNum = arr[arr.length];
    
    for (let i = 0; i <= arr.length; i++) {
        //console.log(arr[i]);
        if (num < (arr[i] - arr[i + 1])) {
            num = (arr[i] - arr[i + 1]);
            //console.log(num);
        }
    } return num;
    
    
}

let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
let arr2 = [2, 2, -2];
let arr3 = [2, 2, -2, 8, 1, -5];
let arr4 = [2, 2, -2, 8, 1, -5, -20];

//console.log(maxSum(arr));
//console.log(maxSum(arr2));
//console.log(maxSum(arr3));
console.log(maxSum(arr4));