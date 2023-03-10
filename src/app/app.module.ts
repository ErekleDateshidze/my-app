import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AddTaskComponent } from './add-task/add-task.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent ,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] ,
})
export class AppModule { }
