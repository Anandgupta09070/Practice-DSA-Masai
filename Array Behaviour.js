// Description

// Given an array A of size N, find if the array is misbehaving or not. An array is said to be misbehaving if there are three consecutive elements in the array, which are odd.


// Input
// The first line contains T, the number of test cases.

// The first line of each test case contains N, the size of the array.

// The next line contains N space separated integers denoting the values of the array.

// Constraints

// 1 <= T <= 10

// 1 <= N <= 100

// 1 <= A[i] <= 100


// Output
// For each test case, print "Misbehave!", if the array is misbehaving, else print "Behave!", on a new line.


// Sample Input 1 

// 2
// 6
// 1 3 3 4 5 6
// 5
// 1 2 3 4 5
// Sample Output 1

// Misbehave!
// Behave!


function runProgram(input){  
    input=input.trim().split("\n")
    len=+input[0]
    num=1
    for(g=0;g<len;g++)
      {
       l=+input[num++]
       arr=input[num++].trim().split(" ").map(Number)
       ArrayBehaviou(arr,l)  }}
    function    ArrayBehaviou(arr,l){
        count=false
        for(i=0;i<l;i++)
        {
     if(arr[i]%2==1&&arr[i+1]%2==1&&arr[i+2]%2==1)
            {
                count=true
            }
        }
        if(count==true)
        {
          console.log("Misbehave!")  
        }
        else
    console.log("Behave!")
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
