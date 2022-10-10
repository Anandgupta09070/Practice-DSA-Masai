const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

var deleteDuplicates = function(head) {
    let curr =head;
    let next;
    while(curr && curr.next){
        next=curr.next
    while(next && curr.data ==next.data){
        curr.next=next.next
        next=next.next
       }
       curr=curr.next
    }
    return head;

    
};

