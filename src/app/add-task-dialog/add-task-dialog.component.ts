import { Component } from '@angular/core';
import { MatDialogActions, MatDialogContent } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { Todo } from '../model/todo';

@Component({
  selector: 'app-add-task-dialog',
  standalone: true,
  imports: [MatDialogContent, MatDialogActions],
  templateUrl: './add-task-dialog.component.html',
  styleUrl: './add-task-dialog.component.css'
})
export class AddTaskDialogComponent {
  task!: Todo;

  constructor(public dialogRef: MatDialogRef<AddTaskDialogComponent>) { }

  onNoClick(): void {
    this.dialogRef.close(); // Ferme la boîte de dialogue sans rien faire
  }

  onSaveClick(): void {
    // Ajoutez ici la logique pour traiter les données si nécessaire
    this.dialogRef.close('Données à transmettre');
  }

}
