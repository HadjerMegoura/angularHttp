import { Component,Output,EventEmitter, Input, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Task } from '../../Models/Task';



@Component({
  selector: 'app-create-task',
  standalone: true,
  imports: [ FormsModule],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.css'
})
export class CreateTaskComponent {

  @Input() isEditMood: boolean = false;

  @Input() selectedTask: Task;

  @ViewChild('taskForm') taskForm : NgForm;

  @Output()
  CloseForm: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  EmitTaskData: EventEmitter<Task> = new EventEmitter<Task>();

  OnCloseForm(){
    this.CloseForm.emit(false);
  }

  OnFormSubmitted(form: NgForm) {
    //send task data to parent component
    this.EmitTaskData.emit(form.value);
    this.CloseForm.emit(false);
  }

  //after the form is selected and initialized (lifecycle hook)
  ngAfterViewInit() {
    setTimeout(()=>{
      this.taskForm.form.patchValue(this.selectedTask);
    },0)
 

  }

}
