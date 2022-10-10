//Enter code here
function ArmorDamage(n,k, arr){
    let answer= arr.reduce((ArmorDamage,answer)=>ArmorDamage+answer,0)
    console.log(answer-k+1)
}
function runProgram(input){
    input=input.trim().split("\n")
    let [n,k]= input[0].trim().split(" ").map(Number);
    let arr = input[1].trim().split(" ").map(Number);
    ArmorDamage(n,k,arr);
    
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
  