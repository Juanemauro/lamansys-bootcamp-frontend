import { Component, Input, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/modules/api-rest/services/navigation/navigationservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private navigation: NavigationService) { }

  url ='';
  title ='';

  @Input() sidenav: any;

  ngOnInit(): void {
    this.url = window.location.pathname;
  }

  goBack(): void {
    this.navigation.back();
  }
}
