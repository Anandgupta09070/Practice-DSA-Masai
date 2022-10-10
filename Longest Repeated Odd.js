//Enter code here
function runProgram(input) {
    input=input.trim().split("\n");
    let N=+input[0];
    let arr=input[1].trim().split(" ").map(Number);
    
   //  console.log(N,arr)
    LongestRepeatedOdd(N,arr)
   }
   function LongestRepeatedOdd(N,arr){
       
       let count1=1;
       let count2=1;
       let max=1;
       for(let i=0;i<N-1;i++)
       {
           if(arr[i]==arr[i+1] && arr[i]%2!==0)
           {
               count1++;
           }
           else
           {
               if(count1>max)
               {
                   max=count1;
               }
               count1=1;
           }
           if(arr[i]%2===0)
           {
               count2++;
           }
       }
       if(count2===arr.length)
       {
           console.log(0);
       }
       else if(max==1)
       {
           console.log(count1)
       }
       else
       {
           console.log(max)
       }
   }
    if (process.env.USERNAME === "") {
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