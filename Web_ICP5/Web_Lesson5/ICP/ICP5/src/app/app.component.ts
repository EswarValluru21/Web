import { Component } from '@angular/core';
import { TodoserviceService } from './todoservice.service';
import { Item } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoContent: string='';
  days: number;
  hrs: number;
  mins: number;
  secs: number;
  dateTime;

  constructor(private todoService : TodoserviceService) {
    let countDownDate = new Date("Jan 1, 2021 15:34:12").getTime();
    let now = new Date().getTime();
    const distance = countDownDate - now;
    this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
    this.hrs = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    this.secs = Math.floor((distance % (1000 * 60)) / 1000);
  }

  // define list of items
  items: Item[]=[];
  // Write code to push new item
  submitNewItem(newItem) {
    console.log("todo item is: ", this.todoContent);
    this.items=this.todoService.addTodo(newItem);
  }

  // Write code to delete item
  deleteItem(delItemId : number) {
    this.items=this.todoService.deleteItem(delItemId);
  }

  interval: number;
  countDownTimer() {
    this.interval = setInterval(() => {
      let countDownDate = new Date("Jan 1, 2021 15:34:12").getTime();
      let now = new Date().getTime();
      const distance = countDownDate - now;
      this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hrs = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.secs = Math.floor((distance % (1000 * 60)) / 1000);
    }, 1000);
  }

  pauseTimer(){
    clearInterval(this.interval);
  }

  completeItem(compItemId : number){
    this.items=this.todoService.completeItem(compItemId);
  }

  pendingItem(pendItemId : number){
    console.log("pending",pendItemId);
    this.items=this.todoService.pendingItem(pendItemId);
  }
}
