//Enter code here
function runProgram(input){
    input = input.trim().split("\n");
    var tc = +input[0];
    var line = 1;
    for(var i=0; i<tc; i++){
        var n= +input[line++];
        var str = input[line++].trim();
         var str2= input[line++].trim();
         
         //console.log(n,str,str2);
         cowAndBulls(n,str,str2);
        
    }
}
function cowAndBulls(n,secret,guess){
    var obj = {};
    var cow=0;
    var bull=0;
    for(var i=0; i<n; i++){
        var char = secret[i];
        
        if(obj[char]){
            obj[char] = obj[char]+1;
        }
        else{
            obj[char] = 1;
        }
    }
    
    for(var i=0; i<n; i++){
        var char = guess[i];
        if(obj[char]){
            
            cow = cow+1;
            obj[char]=obj[char]-1;
        }
        if(secret[i]== guess[i]){
            bull = bull +1;
        }
    }
    console.log(bull+"A"+(cow-bull)+"B");
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