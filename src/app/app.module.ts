import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { RouterModule, Routes } from '@angular/router';
import { ViewTodoComponent } from './view-todo/view-todo.component';
import { NavComponent } from './nav/nav.component';

const myRoute: Routes=[
  {
    path:"",
    component:AddTodoComponent
  },
  {
    path:"table",
    component:ViewTodoComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AddTodoComponent,
    ViewTodoComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
