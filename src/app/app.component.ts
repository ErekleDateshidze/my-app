import { Component } from '@angular/core';

interface toDo {
  taskName:string,
  difficulty:string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tasks:toDo[]=[];
  tasksinprogress:toDo[]=[]
  tasksdone:any=[]
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


  getItemClass (index :number) {
    return {
      red:index %2 ==0,
      blue: index %2==1 ,
    };
  }

  showNumber(index : number) {
    return index;

  }

  deleteItem(index:number){
    // this.tasks= this.tasks.filter((_,i) => i !==index)
    this.tasks.splice(index,1);
  }

  moveToProgress(index :number) { 
    this.tasksinprogress.push(this.tasks[index])
    this.tasks= this.tasks.filter((_,i) => i !==index)
  }

  moveToDone (index:number){
    this.tasksdone.push(this.tasksinprogress[index])
    this.tasksinprogress= this.tasksinprogress.filter((_,i) => i !==index)
  }

   moveBackToDo(index:number) {
    this.tasks.push(this.tasksinprogress[index])
    this.tasksinprogress= this.tasks.filter((_,i) => i !==index)
  }

  moveBackToInProgress(index:number) {
    this.tasksinprogress.push(this.tasksdone[index])
    this.tasksdone= this.tasks.filter((_,i) => i !==index)
  }

}
