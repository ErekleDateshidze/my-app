import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tasks:any[]=[];
  tasksinprogress:any[]=[]
  done:any[]=[]
  taskName :string=''
  error=''
  options = [ ' Easy' , 'Medium' , 'Hard'];
  selectedValue:string='';

  diff = ''

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

}
