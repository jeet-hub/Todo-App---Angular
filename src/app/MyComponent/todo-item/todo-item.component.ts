import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../todo';


@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {

  @Input() todo!: Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();


 

  onClick(todo: Todo){
    this.todoDelete.emit(todo);
    console.log('btn clicked');
  }

  onCheckbocClick(todo:Todo){
    this.todoCheckbox.emit(todo);
  }

}
