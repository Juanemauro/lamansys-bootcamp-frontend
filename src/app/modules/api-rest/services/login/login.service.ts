import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private fb: FormBuilder,
    private http: HttpClient) { }

  loginForm: FormGroup;

  ngOnInit(): void {
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  login(user: any): Observable<any> {
    return this.http.post(`https://lamansys-tasks-fake-api.herokuapp.com/api/login`, { username: user.email.value, password: user.password.value }, this.httpOptions);
  }

}
