const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

function nth_node(head,n){
    let first=head;
    let sec=head;
     let c=0;
    while(c!=n){
        first=first.next
        c++
    }
    while(first!=null){
        first=first.next
        sec=sec.next
    }
return sec.data;
}
