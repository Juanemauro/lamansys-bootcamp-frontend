import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/modules/api-rest/services/login/login.service';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/modules/api-rest/services/user/user.service';
import { HeaderdataService } from 'src/app/modules/api-rest/services/headerdata/headerdata.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private loginService: LoginService,
    public userService: UserService, public router: Router,
    private headerService: HeaderdataService,
    private snackBar: MatSnackBar) { }

  loginForm: FormGroup;

  mensajeError: string = 'El nombre de usuario y/o la contraseña son incorrectos.';

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: new FormControl(null, [Validators.required, Validators.minLength(4)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(4)]),
    })
    this.headerService.setTitle('Login');
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action);
  }

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }

  login() {
    const user = { email: this.loginForm.get('email'), password: this.loginForm.get('password') };
    this.loginService.login(user).subscribe(userData => {
      if (userData && userData.msg == 'username or password is incorrect') {
        this.openSnackBar(this.mensajeError, "Entendido!");
      } else {
        this.userService.setStorage("token", userData.token);
        this.userService.setStorage("iduser", userData.user.id);
        this.userService.setStorage("_iduser", userData.user._id);
        this.router.navigateByUrl('/');
      }     
    },
      (err) => {
        console.log(err.status);
        this.openSnackBar(this.mensajeError, "Entendido!");
      });
  }

}
