import { Component, OnInit } from '@angular/core';
import { epic } from './epic';
import { EpicdataService } from 'src/app/modules/api-rest/services/epics/epicdata.service';

@Component({
  selector: 'epics',
  templateUrl: './epics.component.html',
  styleUrls: ['./epics.component.css']
})
export class EpicsComponent implements OnInit {

  epics: epic[] = [];

  constructor(public data: EpicdataService) { }

  ngOnInit(): void {
  }

}
