// You are given a Singly Linked list which have only 0's and 1's as data but they are at jumbled places. 
// Your boss like things in proper order so he gave you the task to
// separate all 0's and 1's in an order such that all the 0's comes before all the 1's, and
// return a reference to the head node.
// Sort the linked list containing 0's and 1's only and return a reference to the head node.
//  The head is at position 0.
// Complete the orderList in the editor below.
// orderList has the following parameters:
// -LinkedListNode pointer list:a reference to the head node in the list
// Input
// Input Format
// The first line of input contains an integer n, the number of elements in the linked list.
// The next line contains n integers, the node data values in order.
// Constraints
// 1 <= n <= 10^4

// 0 <= node values <= 1


// Output
// Output Format
// Output the n node values in sorted order.


// Sample Input 1 

// 5
// 1 0 1 1 0
// Sample Output 1

// 0 0 1 1 1
// Sample Input 2 

// 4
// 1 1 1 0
// Sample Output 2

// 0 1 1 1 

const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var orderList = function (head) {
    if(head==null || head.next==null)
    {
       return head;
    }
    let c=0;
    let c1=0;
    let temp=head;
    while(temp !=null){
        if(temp.data===0){
            c++
        }
        else{
            c1++;
        }
        temp=temp.next;
    }
    temp=head;
    while(c>0){
        temp.data=0;
        temp=temp.next;
        c--;
    }
    while(c1>0){
        temp.data=1
        temp=temp.next;
        c1--;
    }
    return head  
};