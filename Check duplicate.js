// Check duplicate Ended
// Description

// Given an array of integers, check if it contains duplicate element. If present then print YES else print NO.


// Input
// 1<=T<=10

// 1<=N<=100000

// 1<=Ai<=100000


// Output
// output YES or NO as described for each test case.


// Sample Input 1 

// 3
// 1
// 1
// 2
// 1 1
// 3
// 1 2 3
// Sample Output 1

// NO
// YES
// NO

//Enter code 


function  Checkduplicate(n,arr) {
    {
        for (let i = 0; i < arr.length; i++)
        {
          for (let j = 0; j < arr.length; j++)
           {
               if (i != j)
                {
                  if (arr[i] == arr[j])
                    {
               return true;
                    }
                }
            }
        }
        return false;
       }
}
function runProgram(input) {
	let ni = input.trim().split('\n')
	let tc = +ni[0]
	let line = 1
	for(let i = 0; i < tc;i++){
	    let n = +ni[line++]
	    let arr = ni[line++].trim().split(' ').map(Number)
	 
	     if (Checkduplicate(n,arr))
      console.log("YES");
    else
     console.log("NO");
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