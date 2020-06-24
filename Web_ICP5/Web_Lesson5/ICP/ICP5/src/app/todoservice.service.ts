import { Injectable } from '@angular/core';
import {Item} from "./item";

@Injectable({
  providedIn: 'root'
})
export class TodoserviceService {
todoList: Item[]=[];
count=0;
  constructor() { }
  addTodo(newitem: string): Item[]{
    console.log("item to be added is: ", newitem)

    const newItem1={
      id: this.count,
      content: newitem,
      status: false
    }
    this.todoList.push(newItem1);
    console.log("todolist is : ", this.todoList);
    this.count++;
    return this.todoList;
  }
  deleteItem(itemId: number): Item[]{
    console.log("item to be removed is: ", itemId);
    console.log("list before removing is: ", this.todoList);
    for (const item of this.todoList){
      if(itemId === item.id){
        this.todoList.splice(this.todoList.indexOf(item),1);
        console.log("list after removing is: ", this.todoList);
        return this.todoList;
      }
  }

  }
  completeItem(itemId: number): Item[]{
    this.todoList[itemId].status=true;
    console.log("list after complete",this.todoList);
    return this.todoList;
  }

  pendingItem(itemId: number): Item[]{
    this.todoList[itemId].status=true;
    console.log("list after pending",this.todoList);
    return this.todoList;
  }

}
