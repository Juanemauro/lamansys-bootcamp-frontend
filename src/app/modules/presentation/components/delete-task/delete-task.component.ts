import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TaskdataService } from 'src/app/modules/api-rest/services/tasks/taskdata.service';


@Component({
  selector: 'app-delete-task',
  templateUrl: './delete-task.component.html',
  styleUrls: ['./delete-task.component.css']
})
export class DeleteTaskComponent implements OnInit {

  taskId: number;

  cargaTask: string = '';

  constructor
    (private taskData: TaskdataService,
      private fb: FormBuilder,
      public dialogRef: MatDialogRef<DeleteTaskComponent>, //cerrar diálogo
      @Inject(MAT_DIALOG_DATA) public data: string) { } //datos

  ngOnInit(): void {
  }

  deleteTask(){
    let takIdToDelete = this.taskId;
    let datos = document.getElementById("datos");
    datos.style.display = "none";
    let ringLoader = document.getElementById("delete-task");
    ringLoader.style.display = "flex";
    let informeStatus = document.getElementById("informe-status");
    informeStatus.style.display = "flex";
    setTimeout(() => {
      this.dialogRef.close(takIdToDelete);
    }, 2500);
  }

}
