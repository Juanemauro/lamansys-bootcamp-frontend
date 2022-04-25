import { Component, OnInit } from '@angular/core';
import { HeaderdataService } from 'src/app/modules/api-rest/services/headerdata/headerdata.service';

@Component({
  selector: 'app-construction',
  templateUrl: './construction.component.html',
  styleUrls: ['./construction.component.css']
})
export class ConstructionComponent implements OnInit {

  constructor(private headerService: HeaderdataService) { }

  ngOnInit(): void {
    this.headerService.setTitle('Sitio en construcción');
  }

}
