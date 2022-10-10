// Count such pairs Ended
// Description

// You are given an array A of N integers along with a target integer. Your task is to find out the number of pairs of integers present in the array whose sum is equal to the target value.


// Input
// Input Format :

// First line contains 2 integers: N and the target respectively.

// Second line contains N integers which are the elements of the array.

// Constraints :

// N<100


// Output
// Print one number which is number of such pairs.


// Sample Input 1 

// 5 9
// 3 0 6 2 7
// Sample Output 1

// 2
//Enter code here
function runProgram(input) {
    input=input.trim().split("\n")
    let temp=input[0].split(" ").map(Number);
    let target=temp[1];
    let arr=input[1].split(" ").map(Number);
    let c=0;
    for(let i=0; i<arr.length-1; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i]+arr[j]==target){
                c++
            }
        }
    }console.log(c)
    
    
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
