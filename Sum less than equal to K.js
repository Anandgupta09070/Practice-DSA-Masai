//Enter code here
function SumlessthanequaltoK(n,k,arr){
    let sum=0;
     for(var i=0;i<arr.length;i++){
         if(arr[i]<=k){
              sum=sum+arr[i]
          }
      }
      console.log(sum)
  }
  function runProgram(input){
      var p=input.trim().split("\n")
      var [n,k]=p[0].trim().split(" ").map(Number)
      var arr=p[1].trim().split(" ").map(Number)
      SumlessthanequaltoK(n,k,arr);
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
  