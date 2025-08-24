import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Action } from 'rxjs/internal/scheduler/Action';
import { Todo } from '../../todo';

@Component({
  selector: 'app-add-todo',
  standalone: true,
   imports: [FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {
    title!: string;
  desc!: string;
    @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

 onSubmit() {

    console.log(this.title, this.desc);

    const todo = {
      sno:4,
      title: this.title,
      desc:this.desc,
      active:true
    }
    this.todoAdd.emit(todo);
  }

}
