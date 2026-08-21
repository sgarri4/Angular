import { TaskService } from './tasks.service';
import { Component, EventEmitter, inject, input, Input, output, Output } from '@angular/core';
import { Task } from './task.model';
import {DatePipe} from '@angular/common';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  //Nova sintaxis para declarar inputs e outputs
  task = input.required<Task>();
  //@Input({required: true}) task!: Task;
  complete = output<string>();
  //@Output() complete = new EventEmitter<string>();
  private tasksComponent = inject(TaskService);

  onCompleteTask(){
    this.tasksComponent.removeTask(this.task().id);
    this.complete.emit(this.task().id);
  }
}
