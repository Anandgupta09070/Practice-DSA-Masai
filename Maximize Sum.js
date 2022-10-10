// Maximize Sum Ended
// Description

// Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2), ..., (an, bn) such that the sum of min(ai, bi) for all i is maximized. print the maximized sum.


// Input
// Input Format

// First-line contains t - number of test cases.

// First-line of each test case contains n - where 2*n is the size of the array

// Second-line of each test case contains 2n space-separated integers.

// Constraints

// 1 <= t <= 10

// 1 <= n <= 10^4

// -10^4 <= a[i] <= 10^4


// Output
// For each test case print the maximum sum, in a new line.


// Sample Input 1 

// 2
// 2
// 1 4 3 2
// 3
// 6 2 6 5 1 2
// Sample Output 1

// 4
// 9
//Enter code here


function  MaximizeSum(N,arr){
    let v= N*2;
    let arr1=arr.sort(function(a,b){
        return a-b
    })
    let sum =0 ;
    for(let i=0; i<v-1; i=i+2){
        sum=sum+Math.min(arr1[i],arr[i+1])
    }
    console.log(sum)
}
function runProgram (input){
    input =input.trim().split("\n")
    let tc =+input[0];
    let line=1;
    for(let i =0 ; i<tc; i++){
        let N= +input[line++]
        let arr=input[ line++].split(" ").map(Number)
     MaximizeSum(N,arr)
    }
    
} 
if (process.env.USER === "") {
    runProgram(``);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }