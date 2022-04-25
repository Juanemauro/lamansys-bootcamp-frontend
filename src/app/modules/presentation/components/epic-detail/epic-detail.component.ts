import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectdataService } from 'src/app/modules/api-rest/services/projects/projectdata.service';
import { story } from '../stories/story';
import { HeaderdataService } from 'src/app/modules/api-rest/services/headerdata/headerdata.service';
import { StorydataService } from 'src/app/modules/api-rest/services/stories/storydata.service';
import { EpicdataService } from 'src/app/modules/api-rest/services/epics/epicdata.service';

@Component({
  selector: 'epic-detail',
  templateUrl: './epic-detail.component.html',
  styleUrls: ['./epic-detail.component.css']
})
export class EpicDetailComponent implements OnInit {

  epic: any;
  description: string = '';
  proyectId: string;
  epicId: string;
  stories: story[];
  title = '';
  existeEpicaEnProyecto: boolean = false;
  noStories: string = '';
  storyroute: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectService: ProjectdataService,
    private epicService: EpicdataService,
    private headerService: HeaderdataService,
    private storiesServices: StorydataService) { }

  ngOnInit(): void {
    this.storiesLoad();
    this.proyectId = this.route.snapshot.paramMap.get('idProject');
    this.epicId = this.route.snapshot.paramMap.get('idEpic');
    this.epicService.getEpicDetailApi(Number(this.epicId)).subscribe(
      epic => {
        if (epic.data.length == 0) {
          this.noStories = 'Este proyecto no tiene épicas.';
        }
        this.epic = epic.data;
        if (epic.data[0].description != undefined) {
          this.description = epic.data[0].description;
        }
        if (epic.data.length === 0) {
          this.existeEpicaEnProyecto = false;
        } else {
          this.existeEpicaEnProyecto = true;
        }
      }
    );
    if (this.existeEpicaEnProyecto = false) {
      this.noStories = 'Esta épica no existe dentro del proyecto. La URL es incorrecta.';
      this.headerService.setTitle('URL inexistente');
    } else {
      this.storiesServices.getStoriesFromEpicApi(Number(this.epicId)).subscribe(
        stories => {
          this.stories = stories.data;
          if (this.stories.length == 0) {
            this.noStories = 'Este proyecto no tiene épicas.';
          }
        }
      );
      // this.title =  `Proyecto ${this.proyectId} <mat-icon>arrow_back_ios</mat-icon> Epica ${this.epicId}`;
      // this.title = "Proyecto " + this.proyectId + '<mat-icon>arrow_back_ios</mat-icon> + "Epica " + this.epicId; // acomodar esto para renderizar
      this.title = "Proyecto " + this.proyectId + ' > ' + "Epica " + this.epicId; // acomodar esto para renderizar
      this.headerService.setTitle(this.title);
    }
  }

  storiesLoad() {
    setTimeout(() => {
      let ringLoader = document.getElementById("ring-loader");
      ringLoader.style.display = "flex";
    }, 20)
    setTimeout(() => {
      let ringLoader = document.getElementById("ring-loader");
      ringLoader.style.display = "none";
    }, 1300);
  }

  goToStoryDetail(storyId) {
    this.storyroute = 'my-projects/' + this.proyectId + "/" + this.epicId + "/" + storyId;
    this.router.navigate([this.storyroute]);
  }

}
