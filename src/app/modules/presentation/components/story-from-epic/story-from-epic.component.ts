import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { HeaderdataService } from 'src/app/modules/api-rest/services/headerdata/headerdata.service';
import { StorydataService } from 'src/app/modules/api-rest/services/stories/storydata.service';
import { TaskdataService } from 'src/app/modules/api-rest/services/tasks/taskdata.service';
import { AddTaskComponent } from '../add-task/add-task.component';
import { DeleteTaskComponent } from '../delete-task/delete-task.component';
import { story } from '../stories/story';
import { task } from '../tasks/task';

@Component({
  selector: 'app-story-from-epic',
  templateUrl: './story-from-epic.component.html',
  styleUrls: ['./story-from-epic.component.css']
})
export class StoryFromEpicComponent implements OnInit {

  proyectId: string;
  epicId: string;
  tasks: task[];
  storyId: string;
  story: story;
  title = '';
  existeStoryEnEpic: boolean = true;
  noTasks: string = '';
  description: string = '';
  mensajeError: string = 'Se produjo un error, intenta nuevamente.';
  mensajeOk: string = 'Se agregó la tarea.'
  deleteOk: string = 'Se agregó la tarea.'

  tasksLoad() {
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
    private headerService: HeaderdataService,
    private storiesServices: StorydataService,
    private taskService: TaskdataService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
  ) { }

  tasks$: Observable<task[]> = new Observable<task[]>()

  getTasks() {
    this.taskService.getTasksFromStory(Number(this.storyId)).subscribe(
      tasks => {
        this.tasks = tasks.data;
        if (this.tasks.length === 0) {
          this.noTasks = 'Todavía no hay hay tareas cargadas en esta story.';
        }
      }
    );
  }

  ngOnInit(): void {
    this.tasksLoad();
    this.epicId = this.route.snapshot.paramMap.get('idEpic');
    this.storyId = this.route.snapshot.paramMap.get('idStory');
    this.storiesServices.getStoryDetail(this.storyId).subscribe(
      story => {
        this.story = story.data[0];
        if (story.data.length > 0) {
          this.description = story.data[0].description;
        }
        if (story.data[0].length === 0) {
          this.existeStoryEnEpic = false;
        } else {
          this.existeStoryEnEpic = true;
        }
      }

    );
    if (!this.existeStoryEnEpic) {
      this.headerService.setTitle('URL inexistente');
      this.noTasks = 'Esta story no existe dentro de esta épica. La URL es incorrecta.';
      this.headerService.setTitle('URL inexistente');
    } else {
      this.getTasks();
      this.title = "Story " + this.storyId;
      this.headerService.setTitle(this.title);
    }
  }

  ngAfterViewInit(): void {
    this.headerService.setTitle("Story " + this.storyId);
  }


  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action);
  }

  addTask(): void {
    const dialogRef = this.dialog.open(AddTaskComponent, {
      height: '60%',
      width: '80%',
      panelClass: 'dialog-body',
      data: {
        story: this.story,
      }
    })
    const instance = dialogRef.componentInstance;
    dialogRef.afterClosed().subscribe(newTask => {
      if (newTask !== undefined) {
        this.taskService.addTask(newTask).subscribe(
          response => {
            if (response.success) {
              this.tasks.push(newTask);
              this.openSnackBar(this.mensajeOk, "Entendido!");
            } else {
              this.openSnackBar(this.mensajeError, "Entendido!");
            }
          }
        )
      }
    });
  }

  deleteTask(taskId) {
    const dialogRef = this.dialog.open(DeleteTaskComponent, {
      height: '32%',
      width: '90%',
      panelClass: 'dialog-body'
    });
    const instance = dialogRef.componentInstance;
    instance.taskId = Number(taskId);
    dialogRef.afterClosed().subscribe(takIdToDelete => {
      if (takIdToDelete !== undefined) {
        this.taskService.deleteTask(takIdToDelete).subscribe(
          response => {
            console.log(response)
            this.getTasks();
          }
        );
      }
    });
  }

}
