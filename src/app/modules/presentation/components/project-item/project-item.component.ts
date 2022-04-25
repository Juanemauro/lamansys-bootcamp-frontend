import { Component, Input, OnInit } from '@angular/core';
import { project } from '../projects/project';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectdataService } from 'src/app/modules/api-rest/services/projects/projectdata.service';


@Component({
  selector: 'project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css']
})
export class ProjectItemComponent implements OnInit {
  @Input() project: project ;

  projectid = '';  
  
  constructor(
    public data: ProjectdataService,
    private route: ActivatedRoute,
    private router: Router,  
  ) { }

  ngOnInit(): void {
  }

  goToProjectDetail(): void {
    this.router.navigate(['my-projects', this.project.id]);
  }
  
}
