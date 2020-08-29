class LinkedList{
    constructor(){
        this.head = null; // 1st element of the list
        this.tail = null; // last element of the list
    }

    append(value){
        const new_node = {value: value, next: null};
        if (this.tail){
            this.tail.next = new_node;
        }
        
        this.tail = new_node;

        if (!this.head){
            this.head = new_node;
        }
    } // append func ends

    to_array(){
        const elements = [];

        let cur_node = this.tail;
        while (cur_node){
            elements.push(cur_node);
        
        } // while ends

        return elements;
    } // to_array func ends

} // class ends





const linkedlist1 = new LinkedList();
linkedlist1.append(1);
linkedlist1.append('Amir Savvy');
linkedlist1.append('Test');
linkedlist1.append(true);
linkedlist1.append(56.78);

console.log(linkedlist1.to_array());
