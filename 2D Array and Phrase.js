// You are given an arraymatrixofnrows andmcolumns which contains lower case English letters.

// How many times does the phrase "saba" appear horizontally, vertically, and diagonally in the grid?




// Input
// Input Format

// First line: Two integer n and m, where n denotes the number of rows and m denotes the number of columns in the grid

// Next n lines: Each line contains m characters which contains lower-case English letters only

// Constraints

// 1 <= n,m <= 100
// Output
// Output Format

// Print the number of times the word “saba” appears in the grid.


// Sample Input 1 

// 5 5
// safer
// amjad
// babol
// aaron
// songs
// Sample Output 1

// 2

//Enter code here
function stringtoArray(el){
    return el.split("");
}
function arrayCountString(arr){
    let c=0; 
    let n=arr.length;
    let m=arr[0].length;
    let temp;
    for(let i=0;i<n;i++){
        for(let j=0;j<=m;j++){
        if(m-j>=4){
           temp = arr[i][j] + arr[i][j + 1] + arr[i][j + 2] + arr[i][j + 3];
            if(temp=="saba")
                c++
        }
        if(n-i>=4){
            temp = arr[i][j]+arr[i + 1][j] + arr[i + 2][j] + arr[i + 3][j];
                if (temp == "saba")
                    c++;
       
        }
        if ((m - j >= 4) && (n - i>= 4)) {
          temp = arr[i][j] + arr[i + 1][j + 1] + arr[i + 2][j + 2] + arr[i + 3][j + 3];
           if (temp == "saba")
                    c++;
        }
        if(i>=3&&m-j>=4){
              temp = arr[i][j] + arr[i - 1][j + 1] + arr[i - 2][j + 2] + arr[i - 3][j + 3];
                if (temp == "saba")
                    c++;
    
            }    
        }
    
    }
        return c;
}
function runProgram(input) {
    input=input.trim().split("\n");
    let arrline=input.slice(1)
    let arr=arrline.map(stringtoArray);
console.log(arrayCountString(arr));
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