import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { task } from '../tasks/task';
import { TaskdataService } from 'src/app/modules/api-rest/services/tasks/taskdata.service';
import { story } from '../stories/story';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor(
    private taskData: TaskdataService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddTaskComponent>, //cerrar diálogo
    @Inject(MAT_DIALOG_DATA) public data: { story: story }) //datos
  { }

  addTaskForm: FormGroup;
  story: story;
  cargaTask: string = '';
  taskdId: number;

  ngOnInit(): void {
    this.addTaskForm = this.fb.group({
      name: new FormControl(null, Validators.required),
      'status': new FormControl(''),
      description: new FormControl(null, [Validators.minLength(10)]),
      assignedTo: new FormControl(''),
      created: new FormControl(''),
      dueDate: new FormControl(''),
    })
  }


  get name() { return this.addTaskForm.get('name'); }
  get description() { return this.addTaskForm.get('description'); }

  addkTask() {
    this.taskData.getTasks().subscribe(
      tasks => {
        this.taskdId = tasks.data.length + 1;
      }
    );

    let taskToAdd: task = {
      id: this.taskdId,
      name: this.addTaskForm.get('name').value,
      description: this.addTaskForm.get('description').value,
      story: this.data.story,
      icon: '',
      assignedTo: this.addTaskForm.get('assignedTo').value,
      created: this.addTaskForm.get('created').value,
      dueDate: this.addTaskForm.get('dueDate').value,
    }

    let datos = document.getElementById("carga-datos");
    datos.style.display = "none";
    let ringLoader = document.getElementById("carga-task");
    ringLoader.style.display = "flex";
    let informeStatus = document.getElementById("informe-status");
    informeStatus.style.display = "flex";
    setTimeout(() => {
      this.dialogRef.close(taskToAdd);
    }, 2500);
  }

}
