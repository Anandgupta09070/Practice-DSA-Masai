
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
}
// Complete the function below

function reverse(head) {
    let curr=head;
    let prev=null;
    let currentnew=null;
    while(curr !=null){
        currentnew=curr.next;
        curr.next=prev;
        prev=curr;
        curr=currentnew
    }
    head=prev;
    return head 
    
}

