import { Injectable } from '@angular/core';
import { task } from 'src/app/modules/presentation/components/tasks/task';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class TaskdataService {

  constructor(private http: HttpClient, public userService: UserService) { }

  // API
  getTasksFromStory(idStory): Observable<any> {
    return this.http.get(`https://lamansys-tasks-fake-api.herokuapp.com/api/stories/${idStory}/tasks`, {
      headers: new HttpHeaders({
        'auth': String(this.userService.getStorage('token')),
      })
    });
  }

  addTask(newTask: task): Observable<any> {
    return this.http.post(`https://lamansys-tasks-fake-api.herokuapp.com/api/tasks`, newTask, {
      headers: new HttpHeaders({
        'auth': String(this.userService.getStorage('token')),
      })
    });
  }

  deleteTask(taskId: number) { // será así?
    return this.http.delete(`https://lamansys-tasks-fake-api.herokuapp.com/api/tasks/${taskId}`, {
      headers: new HttpHeaders({
        'auth': String(this.userService.getStorage('token')),
      })
    });
  }

  getTasks(): Observable<any> {
    return this.http.get(` https://lamansys-tasks-fake-api.herokuapp.com/api/tasks`, {
      headers: new HttpHeaders({
        'auth': String(this.userService.getStorage('token')),
      })
    });
  }
}


