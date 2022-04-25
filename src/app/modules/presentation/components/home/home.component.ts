import { Component, OnInit } from '@angular/core';
import { HeaderdataService } from 'src/app/modules/api-rest/services/headerdata/headerdata.service';
import { ProjectdataService } from 'src/app/modules/api-rest/services/projects/projectdata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public data: ProjectdataService,

    private headerService: HeaderdataService) { } 

  ngOnInit(): void {

    this.headerService.setTitle('');
  }
}
