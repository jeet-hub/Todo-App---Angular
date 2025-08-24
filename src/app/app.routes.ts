import { Routes } from '@angular/router';
import { TodoComponent } from './MyComponent/todo/todo.component';
import { AboutComponent } from './MyComponent/about/about.component';
import { AddTodoComponent } from './MyComponent/add-todo/add-todo.component';
import { Todo } from './todo';


export const routes: Routes = [
    { path: '', component: TodoComponent },
  { path: 'about', component: AboutComponent},
  {path: 'add-todo', component: AddTodoComponent},
];
