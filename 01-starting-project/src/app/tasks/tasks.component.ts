import { NewTaskData } from './task/task.model';
import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewtaskComponent } from "./newtask/newtask.component";

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
  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Learn all the basic and advanced features of Angular ',
      dueDate: '2026-12-31'
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Master Angular',
      summary: 'Learn all the basic and advanced features of Angular ',
      dueDate: '2026-12-31'
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Master Angular',
      summary: 'Learn all the basic and advanced features of Angular ',
      dueDate: '2026-12-31'
    },
    {
      id: 't4',
      userId: 'u4',
      title: 'Master Angular',
      summary: 'Learn all the basic and advanced features of Angular ',
      dueDate: '2026-12-31'
    }
  ]

  get selectedUserTasks(){
    return this.tasks.filter((task)=> task.userId === this.userId);
  }

  onCompleteTask(id: string){
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  onAddComponent(){
    this.newTask = true;
  }

  onCancelDialog(){
    this.newTask = false;
  }

  onAddTask(taskData: NewTaskData){
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: this.userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date
    });
    this.newTask = false;
  }
}
