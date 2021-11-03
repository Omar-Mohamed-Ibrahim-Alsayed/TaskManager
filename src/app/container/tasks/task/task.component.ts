import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor() { }
  
  Name = 'Task';
  color ='black';
  available = 'block';
  available2 = 'none';
  

  ngOnInit(): void {
  }

  changeColor(){
    if(this.color=='black'){
      this.color='red';
  }
  else if(this.color=='red'){
      this.color='blue';
  }
  else{
      this.color='black';
  }
  }

  remove(){
    this.available = 'none';
  }

  changeName(value: string){
    this.Name =value;
  }

  add(){
    this.available2 = 'block';
  }


}
