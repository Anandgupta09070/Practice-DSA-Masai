
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
var rotateRight = function(head, k) {
    let c=0;
    while(c<k){
        let curr =head
        let prev;
        while(curr.next){
            prev=curr;
            curr=curr.next
        }
            curr.next=head
            head=curr
            prev.next=null
            c++
    }
      return head
};

