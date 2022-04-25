import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderdataService } from 'src/app/modules/api-rest/services/headerdata/headerdata.service';
import { StorydataService } from 'src/app/modules/api-rest/services/stories/storydata.service';
import { story } from './story';


@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router,
    private storyData: StorydataService,
    private headerService: HeaderdataService) {

  }

  noStories: string = '';

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

  userStories: story[];

  ngOnInit(): void {
    this.storiesLoad();
    this.storyData.getAllStoriesAPI().subscribe(
      allUserStories => {
        this.userStories = allUserStories.data;
        if (this.userStories.length == 0) {
          this.noStories = 'Todavía no hay stories asignadas para ti.';
        }
      }
    );
    this.headerService.setTitle('Mis stories');
  }

}
