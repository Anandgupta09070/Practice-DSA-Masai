// Description

// You are given a matrix(2 dimensional array) of integers of n rows and m columns. Your task is to write a program that calculates sum of all such integers present in the matrix which are divisible by 3.


// Input
// Input Format

// First line contains n and m.

// In the next n lines, there are m integers in each line which makes up elements of matrix.

// Constraints

// n<100

// m<100


// Output
// Output Format

// Output one number which is the sum of all such integers which are divisible by 3.


// Sample Input 1 

// 2 3
// 3 1 8
// 2 6 0
// Sample Output 1

// 9
// Hint

// The given 2 dimensional array has 2 rows and 3 columns.

// There are two integers present in this array which are divisible by 3 (those are 3 and 6). So, the output is 9.

//Enter code here
function ConditionalMatrixSum(row, col, mat){
    let s = 0;
    for(let i=0; i<row; i++){
        for(let j=0; j<col; j++) {
            if(mat[i][j]%3===0){
                s += mat[i][j]
            }
        }
    }
    console.log(s)
}
function runProgram(input) {
input = input.trim().split("\n")
  let line = 1;
  let mat = [];
  let [row, col] = input[0].trim().split(" ").map(Number);
  for(let j=1; j<=row; j++)
{
  mat.push(input[line++].trim().split(" ").map(Number));
}

ConditionalMatrixSum(row, col, mat)
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