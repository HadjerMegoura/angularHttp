import { HttpClient } from '@angular/common/http';
import {  Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  http: HttpClient = inject(HttpClient);

  constructor() { }
  
  //register the error we got into a collection called "log" in our database
  logErrors(data: {statusCode: number, errorMessage: string, dateTime: Date}) {
    this.http.post('https://angularhttpclient-ac5df-default-rtdb.firebaseio.com/log.json',data)
    .subscribe();
  }

  //fetch the list of error from database
  fetchErrors() {
    this.http.get('https://angularhttpclient-ac5df-default-rtdb.firebaseio.com/Tasks/log.json')
    .subscribe((response) => {
      console.log(response);
    });
  }
}
