import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/modules/api-rest/services/user/user.service';

@Component({
  selector: 'app-menu-desktop',
  templateUrl: './menu-desktop.component.html',
  styleUrls: ['./menu-desktop.component.css']
})
export class MenuDesktopComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  logout(){
    this.userService.deleteStorage();
  }

}
