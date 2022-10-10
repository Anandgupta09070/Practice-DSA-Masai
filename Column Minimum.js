//Enter code here

function runProgram(input) {
    input = input.trim().split("\n");
    var [m,n] = input[0].trim().split(" ").map(Number);
    var matrix = [];
    for(var i =1;i<=m;i++){
        matrix.push(input[i].trim().split(" ").map(Number));
    }
    Column_Min(m,n,matrix);
}	
function Column_Min(m,n,matrix){
    var arr1 = [];
    for(var i =0;i<n;i++){
        
        var min = matrix[0][i];
        for(var j =0;j<m;j++){
            if(matrix[j][i]<min){
                min = mat[j][i];
                
            }
            
        }
        arr1.push(min);
    
    }
     console.log(arr1.join(" "));
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