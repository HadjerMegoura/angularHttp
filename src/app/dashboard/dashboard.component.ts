import { Component, inject, OnInit } from '@angular/core';
import { CreateTaskComponent } from './create-task/create-task.component';
import { NgIf, NgFor, NgClass } from '@angular/common';
import { Task } from '../Models/Task';
import { TaskService } from '../services/task-service.service';




@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CreateTaskComponent,NgIf,NgFor,NgClass],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  showCreateTaskForm: boolean = false;

  isEditMood: boolean = false;

   //inject httpClient service 
  //  http: HttpClient = inject(HttpClient)

   allTasks: Task[] = [];

   selectedTask: Task;
   currentTaskId: string;

   //inject taskService
   taskService: TaskService = inject(TaskService);

   
   //whenever the page loads
   ngOnInit(): void {
    this.FetchAllTask();
   }

  OpenCreateTaskForm(){
    this.showCreateTaskForm = true;
    this.isEditMood = false;
    this.selectedTask = {'title':'','description':'','AssignTo':'','createdAt':'','priority':'','status':''}
  }

  CloseCreateTaskForm(){
    this.showCreateTaskForm = false;
  }

 
  CreateOrUpdateTask(taskData: Task) {
    if (!this.isEditMood) {
      this.taskService.CreateTask(taskData).subscribe((res)=> {
        this.FetchAllTask();
      })}
    else {
      console.log(this.selectedTask.id);
       this.taskService.UpdateTask(this.currentTaskId, taskData);
    }
    
  
    }

  private FetchAllTask() {
    this.taskService.GetAllTasks().subscribe((response) => {
        this.allTasks = response;
    })

  } 
  
  DeleteTask(taskId: string | undefined) {

    this.taskService.RemoveTask(taskId).subscribe((res) => {
      this.FetchAllTask();
    })
    
     
  }

  ClearAllTask() {

    this.taskService.ClearAllTasks().subscribe((res) => {
      this.FetchAllTask();
    })
  }

  OnEditTaskClicked(id: string | undefined) {
    this.showCreateTaskForm = true;
    this.isEditMood = true;
    this.selectedTask = this.allTasks.find((task) => { return id === task.id})
    this.currentTaskId = id;

  }
}
