import { NewTaskData } from './task/task.model';
import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewtaskComponent } from "./newtask/newtask.component";
import { TaskService } from './task/tasks.service';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewtaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) name?: string;
  @Input({required: true}) userId!: string;
  newTask = false;
  constructor(private tasksService: TaskService){}


  get selectedUserTasks(){
    return this.tasksService.getUserTasks(this.userId);
  }

  onAddComponent(){
    this.newTask = true;
  }

  onCloseAddTask(){
    this.newTask = false;
  }
}
