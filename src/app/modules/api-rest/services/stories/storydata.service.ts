import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class StorydataService {

  constructor(private http: HttpClient, public userService: UserService) { }

  // API
  getAllStoriesAPI(): Observable<any> { // getProjectList
    return this.http.get('https://lamansys-tasks-fake-api.herokuapp.com/api/stories', {
      headers: new HttpHeaders({
        'auth': String(this.userService.getStorage('token')),
      })
    });
  }

  getStoriesFromEpicApi(idEpic): Observable<any> { // getStoryFromEpic
    return this.http.get(`https://lamansys-tasks-fake-api.herokuapp.com/api/epics/${idEpic}/stories`, {
      headers: new HttpHeaders({
        'auth': String(this.userService.getStorage('token')),
      })
    });
  }

  getStoryDetail(idStory): Observable<any> {
    return this.http.get(`https://lamansys-tasks-fake-api.herokuapp.com/api/stories/${idStory}`, {
      headers: new HttpHeaders({
        'auth': String(this.userService.getStorage('token')),
      })
    });
  }
}
