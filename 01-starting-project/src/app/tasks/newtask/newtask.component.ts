import { Component, inject, input, output } from '@angular/core';
import { TaskService } from '../task/tasks.service';

@Component({
  selector: 'app-newtask',
  templateUrl: './newtask.component.html',
  styleUrl: './newtask.component.css'
})
export class NewtaskComponent {
  //Envío de datos al componente padre
 // @Output() closeDialog = new EventEmitter<void>();
  //@Input({required: true}) userId!: string;
  userId = input.required<string>();
  closeDialog = output<void>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  //inyectar el servicio de tareas "instanciar"
  private tasksService = inject(TaskService);
  isclosedDialog(){
    this.closeDialog.emit();
  }

  onCancel(){
    this.closeDialog.emit();
  }
  onSubmit(){
    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    },this.userId())
    this.closeDialog.emit();
  }
}

