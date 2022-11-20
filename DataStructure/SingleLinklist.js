/**********************************************************************************
 *  Execution     :  1. default node  cmd> node SingleLinklist.js
 *                   2. if nodemon installed  cmd> nodenom SingleLinklist.js
 *
 *  Purpose       :  implementation of singly link list 
 *
 *  @description
 *
 *  @file         : Distance.js
 *  @overview     : implementation of singly link list
 *  @module       : This is optional if expeclictly its an npm or local package.
 *  @author       : AMAN VERMA <amanvermame786.gmail.com>
 *  @version      : 1.0
 *  @since        : 19-11-2022
 *
 **********************************************************************************/

class Node{
    constructor(data, next=null){
        this.data  = data;
        this.next  = null;
    }
}

class SingleLinklist {
     constructor() {
        this.head = null;
        this.size = 0;  
     }

    add(data) { /* function for inserting at the beginning the head */

        let node = new Node(data); //creating the new node
        let current; //create the variable to store the current node 

        if (this.head == null) {
            this.head = node; //if list is Empty add the element & make it head
        } else {
            current= this.head;

            while (current.next != null) { //iterate to the end of the list
                current = current.next;
            }

            current.next = node;
        }
        this.size++;
    }

    insertAt(data,index) { //insert the node at particular index 

        if (index < 0 || index > this.size) {
            return console.log('please enter the valid index...!');
        } else {
            let node = new Node(data); // create the new Node
            let curr, prev; // define the variable to store the current & previous head of linllist 

            curr = this.head;
            let it = 0;

            while ( it < index) { //iterate the position where we want to insert
                it++;
                prev = curr;
                curr = curr.next;
            }

            node.next = curr;
            prev.next = node;
        }
        this.size++;
    }

    removeFrom(index) { // remove the element form particular index

        if ( index < 0 || index > this.size) {
            return console.log('Please Enter the valid Index...!');
        } else {
            let curr,prev,it = 0;
            curr = this.head;
            prev = curr;

            if (index === 0) {
                this.head = curr.next; //deleting the first element
            } else {
                
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }
                prev.next = curr.next;
            }
            this.size--;
            return curr.data; // retrun the remove element
        }
    }    

    // removes a given element from the linklist
    removeElement(data) {
        let current = this.head;
        let prev = null;

        while ( current != null ) { // iterate the list
            if (current.data === data) {
                if(prev == null){
                    this.head = current.next;
                }else{
                    prev.next = current.next;
                }
                this.size--;
                return current.data;
            }
            prev = current;
            current = current.next;  
        }
        return -1;
    }

    indexOf(data) {//get the index of the element

        let count = 0;
        let current = this.head;

        while (current != null) {
            
            if (current.data === data) {
                return count;
            }
            count++;
            current = current.next;
        }

        return -1;
    }

    isEmpty() { // make the linklist empty     
        return this.size == 0;
    }

    sizeOfList(){ //print the size of linklist
        console.log(this.size);
    }

    printList() {

        let curr = this.head;
        let str = "";

        while (curr != null) {
            
            str += curr.data + " ";
            curr = curr.next;

        }
        console.log(str);
    }

}

var sll = new SingleLinklist();
 
// testing isEmpty on an empty list
// returns true
console.log(sll.isEmpty());
 
// adding element to the list
sll.add(10);
 
// prints 10
sll.printList();
 
// returns 1
console.log(sll.sizeOfList());
 
// adding more elements to the list
sll.add(20);
sll.add(30);
sll.add(40);
sll.add(50);
 
// returns 10 20 30 40 50
sll.printList();
 
// prints 50 from the list
console.log("is element removed ?" + sll.removeElement(50));
 
// prints 10 20 30 40
sll.printList();
 
// returns 3
console.log("Index of 40 " + sll.indexOf(40));
 
// insert 60 at second position
// ll contains 10 20 60 30 40
sll.insertAt(60, 2);
 
sll.printList();
 
// returns false
console.log("is List Empty ? " + sll.isEmpty());
 
// remove 3rd element from the list
console.log(sll.removeFrom(3));
 
// prints 10 20 60 40
sll.printList();