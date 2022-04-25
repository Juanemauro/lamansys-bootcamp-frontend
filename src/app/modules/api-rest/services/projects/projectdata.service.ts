import { Injectable } from '@angular/core';
import { project } from 'src/app/modules/presentation/components/projects/project';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectdataService {

  constructor(private http: HttpClient, public userService: UserService) { }

  // API
  getProjectsAPI(): Observable<any> { // getProjectList
    return this.http.get('https://lamansys-tasks-fake-api.herokuapp.com/api/projects', {
      headers: new HttpHeaders({
        'auth': String(this.userService.getStorage('token')),
      })
    });
  }

  getProjectInfoAPI(id: number): Observable<any> {  // getProject
    return this.http.get(`https://lamansys-tasks-fake-api.herokuapp.com/api/projects/${id}`, {
      headers: new HttpHeaders({
        'auth': String(this.userService.getStorage('token')),
      })
    });
  }

  getProjectApi(projectId: number, project: project): Observable<any> {
    return this.http.get(`https://dhfakestore.herokuapp.com/api/projects/${projectId}`, {
      headers: new HttpHeaders({
        'auth': String(this.userService.getStorage('token')),
      })
    });
  }

}

