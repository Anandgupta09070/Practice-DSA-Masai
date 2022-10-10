// Encryption is the process of converting a plaintext message into ciphertext which can be decoded back into the original message. An encryption algorithm along with a key is used in the encryption and decryption of data. There are several types of data encryptions which form the basis of network security. Encryption schemes are based on block or stream ciphers.

// Today, your task is to encrypt and print the encrypted string. You will be given a single line which contains alphabets, numbers and symbols, followed by a number K. You need to encrypt it in a way such that every character in the string is rotated by the given fixed number K.

// Only encrypt Alphabets and Numbers. (A-Z, a-z, and 0-9) . All Symbols, such as - , ; %, should remain unencrypted.

// Look at the sample test case for better understanding.


// Input
// Input Format

// First line of input contains a single line of string 'S'

// Second line contains the number, encrypt key  K

// Constraints

// S contains alpha, numeric and symbols

// 0<=N<=1000




// Output
// Print the encrypted string.


// Sample Input 1 

// All-convoYs-9-be:Alert1.
// 4
// Sample Output 1

// Epp-gsrzsCw-3-fi:Epivx5.

//Enter code here


function runProgram(input){
    var input_arr = input.trim().split(/[\r\n]+/)
    var no_rotation = Number(input_arr[1])
    var string = input_arr[0].split("")
    var lower_case = "abcdefghijklmnopqrstuvwxyz"
    var upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var numbers = "01234567890"
    for(var i = 0; i < string.length; i++)
    {
        for(var j = 0; j < lower_case.length; j++)
       {
           if(string[i] == lower_case[j])
            {
               if(j+no_rotation >= 26)
           {
               string[i] = lower_case[(j+no_rotation)%26]
         }
        else
                {
                    string[i] = lower_case[j+no_rotation]
                }
                break;
            }
            else if(string[i] == upper_case[j])
            {
                if(j+no_rotation >= 26)
                {
                    string[i] = upper_case[(j+no_rotation)%26]
                }
                else
                {
                    string[i] = upper_case[j+no_rotation]
                }
                break;
            }
        }
        for(var k = 0; k < numbers.length; k++)
        {
            if(string[i] == Number(numbers[k]))
            {
                if(k+no_rotation > 9)
                {
                    string[i] = numbers[(Number(numbers[k]) + no_rotation)%10]
                }
                else
                {
                    string[i] = numbers[Number(numbers[k]) + no_rotation]
                }
                break;
            }
        }
    }
    string = string.join("")
    console.log(string)
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