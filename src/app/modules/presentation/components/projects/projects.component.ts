import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { project } from './project';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectdataService } from 'src/app/modules/api-rest/services/projects/projectdata.service';
import { HeaderdataService } from 'src/app/modules/api-rest/services/headerdata/headerdata.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'my-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {

  projects: project[] = [];
  noProjects: string;
  projectsApi: any;

  constructor(public data: ProjectdataService,
    private route: ActivatedRoute,
    private router: Router,
    private headerService: HeaderdataService) {
  }
  

  projectsLoad() {
    this.headerService.setTitle('Mis proyectos');

    setTimeout(() => {
      let ringLoader = document.getElementById("ring-loader");
      ringLoader.style.display = "flex";
    }, 1300)
    setTimeout(() => {
      let ringLoader = document.getElementById("ring-loader");
      ringLoader.style.display = "none";
    }, 1300);

  }

  ngOnInit(): void {
    this.projectsLoad();
    this.data.getProjectsAPI().subscribe(
      data => {
        console.log(data);
        this.projects = data.data;
        //console.log(this.projects.length === 0);
        if (this.projects.length === 0) {
          console.log(this.projects.length == 0);
          this.noProjects = 'No participas de ningún proyecto. Regresa más tarde';
        }
      }     
    );
    
    this.headerService.setTitle('Mis proyectos');
  }
  

}
