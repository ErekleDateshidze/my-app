import { Component } from '@angular/core';

interface toDo {
  taskName:string,
  difficulty:string
}

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})

export class AddTaskComponent {
  tasks:toDo[]=[];
  taskName :string=''
  error=''
  options = [ ' Easy' , 'Medium' , 'Hard'];
  selectedValue:string='';
  diff :string= ''

  addTask() {
    if(!this.taskName) {
      this.error= 'Empty Input'
      return
    }
    this.tasks.push({taskName:this.taskName , difficulty : this.diff} );
    this.taskName='';
    this.error=''
  }
}
