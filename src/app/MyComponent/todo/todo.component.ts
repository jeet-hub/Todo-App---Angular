import { Component, TemplateRef } from '@angular/core';
import { CommonModule, NgIfContext } from '@angular/common';
import { Todo } from '../../todo';
import { TodoItemComponent } from "../todo-item/todo-item.component";
import { AddTodoComponent } from "../add-todo/add-todo.component";

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, TodoItemComponent, AddTodoComponent],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
elseBlock: TemplateRef<NgIfContext<boolean>> | null | undefined;

  deletetodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    console.log(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  Addtodo(todo: Todo) {
    
    this.todos.push(todo);
    console.log(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

   toggleTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    console.log(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  localItem: string | null;

  todos: Todo[] = [];
  constructor(){
    this.localItem = localStorage.getItem("todos");
    if(this.localItem == null){
      this.todos =[];
    }else{
      this.todos = JSON.parse(this.localItem);
    }
  }
}
