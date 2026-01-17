import { inject, Injectable } from '@angular/core';
import { Task } from '../Models/Task';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { LoggingService } from './logging.service';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  http: HttpClient = inject(HttpClient);
  allTasks: Task[] = [];
  loggingService: LoggingService = inject(LoggingService);

  constructor() {}

  CreateTask(taskData: Task) {
    return this.http.post<{ name: string }>(
      'https://my-project-a8d57-default-rtdb.firebaseio.com/Tasks.json',
      taskData,
    );
  }
  GetAllTasks() {
    return this.http
      .get<{
        [key: string]: Task;
      }>('https://my-project-a8d57-default-rtdb.firebaseio.com/Tasks.json')
      .pipe(
        map((response) => {
          //Transform data into array
          let tasks = [];

          for (let key in response) {
            if (response.hasOwnProperty(key)) {
              //add to the table the object response, with an id which is the key
              //(...) to extract the proprties and count them as the new object proprties
              tasks.push({ ...response[key], id: key });
            }
          }
          return tasks;
        }),
        catchError((error) => {
          const errorObject = {
            statusCode: error.status,
            errorMessage: error.message,
            dateTime: new Date(),
          };
          this.loggingService.logErrors(errorObject);
          return throwError(() => error);
        }),
      );
  }
  RemoveTask(taskId: string | undefined) {
    return this.http.delete(
      'https://my-project-a8d57-default-rtdb.firebaseio.com/Tasks/' +
        taskId +
        '.json',
    );
  }
  ClearAllTasks() {
    return this.http.delete(
      'https://my-project-a8d57-default-rtdb.firebaseio.com/Tasks/.json',
    );
  }

  UpdateTask(taskId: string | undefined, data: Task) {
    this.http
      .put(
        'https://my-project-a8d57-default-rtdb.firebaseio.com/Tasks/' +
          taskId +
          '.json',
        data,
      )
      .subscribe();
  }
}
