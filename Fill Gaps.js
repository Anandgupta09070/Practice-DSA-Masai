const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var fillGaps = function (head) {
 let node =new LinkedListNode(0);
 let curr=node;
 let current =head;
 while(current!=null && current.next!=null){
     let d=Math.abs(current.data-current.next.data);
     
     for(let i=current.data;i<current.data+d; i++ ){
         curr.next=new LinkedListNode(i);
         curr=curr.next;
     }
     current=current.next;
 }
 curr.next=current;
 return node.next;
};
