
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function insertNodeAtPosition(head, data, position) {
    if (position ==0){
        let newlist =new LinkedListNode (data)
        newlist.next =head;
        return newlist
    }
    let curr =head;
    for(let i=0; i<position-1; i++){
        curr =curr.next;
    }
    let next=curr.next;
    let newlist=new LinkedListNode(data)
    newlist.next=next
    curr.next=newlist
    return head
}

