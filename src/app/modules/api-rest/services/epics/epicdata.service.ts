import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class EpicdataService {

  constructor(private http: HttpClient, public userService: UserService) { }

  // API
  getEpicsFromProjectAPI(idProject): Observable<any> { // getEpicList
    return this.http.get(`https://lamansys-tasks-fake-api.herokuapp.com/api/projects/${idProject}/epics`, {
      headers: new HttpHeaders({
        'auth': String(this.userService.getStorage('token')),
      })
    });
  }

  getEpicDetailApi(idEpic): Observable<any> { // getEpicDetail
    return this.http.get(`https://lamansys-tasks-fake-api.herokuapp.com/api/epics/${idEpic}`, {
      headers: new HttpHeaders({
        'auth': String(this.userService.getStorage('token')),
      })
    });
  }
}



