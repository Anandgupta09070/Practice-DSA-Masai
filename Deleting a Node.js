
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function deleteNode(head, position) {
   
   let curr=head;
   let prev=null;
   let c=0;
   while(c!=position){
       prev=curr
       curr=curr.next
       c++
   }
   prev.next=curr.next
   return head;
}

