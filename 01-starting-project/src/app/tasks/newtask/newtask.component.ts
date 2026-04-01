import { NewTaskData } from './../task/task.model';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-newtask',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './newtask.component.html',
  styleUrl: './newtask.component.css'
})
export class NewtaskComponent {
  @Output() closeDialog = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTaskData>();

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  isclosedDialog(){
    this.closeDialog.emit();
  }

  onSubmit(){
    this.add.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    });
  }
}

