function runProgram(input) {
    input=input.trim().split("\n")
    var str1=input[0]
    var str2=input[1]
   console.log(StringsRotation(str1,str2))
 }
 
 function StringsRotation(str1,str2){
     for(let i = 0; i < str1.length; i++) {
         if (str1.slice(i) + str1.slice(0,i) === str2)
         return "Yes";
     }
     return "No";
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