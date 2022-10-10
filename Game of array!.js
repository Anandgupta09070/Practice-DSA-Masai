// Game of array! Ended
// Description

// Pavan is very fond of numbers.He made an array of numbers of length N, and he wants to know the pattern after rotating it to the left by k times. He got confused in the middle since the array is very big can you help him to find the rotated array?


// Input
// First line consists of two integers N and k separated by space,

// Second line contains an array of N integers separated by space.

// 1 <= N,k <= 10^6


// Output
// Print output array after k rotations.


// Sample Input 1 

// 6 4
// 1 2 5 4 0 6
// Sample Output 1

// 0 6 1 2 5 4

//Enter code here


function runProgram(input){
    input=input.trim().split("\n");
    let s=input[0].trim().split(" ").map(Number);
     let arr=input[1].trim().split(" ").map(Number);
     let arr1=[];
     let N=s[0];
     let k=s[1];
     if(k>N){
         k=k%N
     }
     for(let i=k; i<N ;i++){
         arr1.push(arr[i]);
         
     }
     for(let i=0; i<k ;i++){
         arr1.push(arr[i])
     }
     console.log(arr1.join(" "))
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
