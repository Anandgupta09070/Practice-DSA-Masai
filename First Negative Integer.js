// escription

// Given an array A containing N space-separated integers. Find the first negative integer for each and every window(contiguous subarray) of sizeK.


// Input
// Input Format

// First-line contains T, no of test cases.

// First-line of each test case contains N, the size of the array, and an integer K.

// Second-line of each test case contains N spaced integers, elements of an array A.

// Constraints

// 1 <= T <= 10

// 1 <= N <= 10^5

// 0 <= abs(A[i]) <= 10^5

// 1 <= K <= N


// Output
// For each test case, print N-K+1 space-separated integers in a new line.


// Sample Input 1 

// 2
// 5 2
// -8 2 3 -6 10
// 8 3
// 12 -1 -7 8 -15 30 16 28
// Sample Output 1

// -8 0 -6 -6
// -1 -1 -7 -15 -15 0 
// Hint

// For the first test case,

// First negative integer for each window of size 2
// {-8, 2} = -8
// {2, 3} = 0 (does not contain a negative integer)
// {3, -6} = -6
// {-6, 10} = -6

// For the second test case,

// First negative integer for each window of size 3
// {12, -1, -7} = -1
// {-1, -7, 8} = -1
// {-7, 8, -15} = -7
// {8, -15, 30} = -15
// {-15, 30, 16} = -15
// {30, 16, 28} = 0 (does not contain a negative integer)

//Enter code here


function FirstNegativeInteger(arr,N,k){
    let ind =0
    let ele;
    let bag="";
    for(let i=k-1; i<N; i++){
     while((ind<i) &&(ind <=i-k || arr[ind]>=0)){
         ind++
     }
     if(arr[ind]<0){
         ele=arr[ind];
     }else{
         ele=0
     }
     bag +=ele+" "
    }
    console.log(bag)
}
function runProgram(input) {
    input=input.trim().split("\n")
    let tc=input[0];
    let line=1
    for(let i=0; i<tc; i++){
        let [N,k]=input[line++].trim().split(" ").map(Number)
        let arr=input[line++].trim().split(" ").map(Number)
        FirstNegativeInteger(arr,N,k)
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






