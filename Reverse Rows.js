// You will be given an n by n matrix. You'll have to reverse the elements of each row of the matrix
// Input
// Input Format
// First line will contain the number of rows n (same as the number of columns)
// After that next n lines will n rows of the matrix.
// Constraints
// n<=1000
// Elements Of the Matrix <= 10000
// Output
// You have to print the flipped matrix


// Sample Input 1 

// 4
// 1 2 3 4
// 1 2 3 4
// 1 2 3 4
// 1 2 3 4
// Sample Output 1

// 4 3 2 1
// 4 3 2 1
// 4 3 2 1
// 4 3 2 1

//Enter code here


function ReverseRows(N,mat){
    for(let i=0; i<N; i++){
        let bag="";
        for(let j=N-1; j>=0; j--){
            bag+=mat[i][j]+" ";
        }
       console.log(bag);
    }
     
}
function runProgram(input) {
  input=input.trim().split("\n");
  let N=+input[0];
  let mat=[];
  for(let i=1; i<=N; i++){
      mat.push(input[i].trim().split(" ").map(Number))
      
  } ReverseRows(N,mat)
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
