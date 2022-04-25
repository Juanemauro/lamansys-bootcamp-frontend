import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { project } from 'src/app/modules/presentation/components/projects/project';
import { epic } from 'src/app/modules/presentation/components/epics/epic';
import { ProjectdataService } from 'src/app/modules/api-rest/services/projects/projectdata.service';
import { HeaderdataService } from 'src/app/modules/api-rest/services/headerdata/headerdata.service';
import { EpicdataService } from 'src/app/modules/api-rest/services/epics/epicdata.service';


@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  project: project;
  projectId: string;
  epics: epic[];
  noEpics: string = '';
  epicroute: string = '';
  idEpicABuscar: string;
  existeProject: boolean = true;
  description: string = '';
  projectname: string = '';

  epicsLoad() {
    setTimeout(() => {
      let ringLoader = document.getElementById("ring-loader");
      ringLoader.style.display = "flex";
    }, 20)
    setTimeout(() => {
      let ringLoader = document.getElementById("ring-loader");
      ringLoader.style.display = "none";
    }, 1300);
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectService: ProjectdataService,
    private epicService: EpicdataService,
    private headerService: HeaderdataService,
  ) { }


  ngOnInit(): void {
    this.projectId = this.route.snapshot.paramMap.get('idProject');
    this.epicsLoad();
    this.projectService.getProjectInfoAPI(Number(this.projectId)).subscribe(
      project => {
        this.project = project.data;
        this.projectname = project.data[0].name;
        this.description = project.data[0].description;
        this.headerService.setTitle(this.projectname);
        if (project.data.length === 0) {
          this.existeProject = false;
        } else {
          this.existeProject = true;
        }
      }
    );
    if (!this.existeProject) {
      this.noEpics = 'Este proyecto no existe. La URL es incorrecta.';
      this.headerService.setTitle('URL inexistente');
    } else {
      this.epicService.getEpicsFromProjectAPI(Number(this.projectId)).subscribe(
        epics => {
          if (epics.success) {
            this.epics = epics.data;
            if (this.epics.length == 0) {
              this.noEpics = 'Este proyecto no tiene épicas.';
            }
          } else {
            this.noEpics = 'Este proyecto no existe. La URL es incorrecta.';
            this.headerService.setTitle('URL inexistente');
          }

        }
      );
    }
  }

  goToEpicDetail(epicId) {
    this.epicroute = 'my-projects/' + this.projectId + "/" + epicId;
    this.router.navigate([this.epicroute]);
  }



}
