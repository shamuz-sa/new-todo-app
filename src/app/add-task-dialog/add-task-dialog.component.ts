import { Component } from '@angular/core';
import { MatDialogActions, MatDialogContent } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { Todo } from '../model/todo';
import { TodoService } from '../service/todo.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-task-dialog',
  standalone: true,
  imports: [MatDialogContent, MatDialogActions],
  templateUrl: './add-task-dialog.component.html',
  styleUrl: './add-task-dialog.component.css'
})
export class AddTaskDialogComponent {
  task!: Todo;


  constructor(public dialogRef: MatDialogRef<AddTaskDialogComponent>,
    private todoService: TodoService) { }

  onNoClick(): void {
    this.dialogRef.close(); // Ferme la boîte de dialogue sans rien faire
  }

  onSaveClick(): void {
    // Ajoutez ici la logique pour traiter les données si nécessaire
    this.dialogRef.close('Données à transmettre');
  }



  ajouterTache(nouvelleTache: string) {
    const task: Todo = {
      task_id: 0, // Remplacez par la valeur appropriée
      title: nouvelleTache,
      description: '', // Ajoutez les valeurs appropriées
      due_date: new Date(), // Ajoutez la date appropriée
      priority: 1,
      category: ''
    };

    this.todoService.addTask(task).subscribe(
      (resultat) => {
        console.log('Tâche ajoutée avec succès :', resultat);
        // Ajoutez ici la logique supplémentaire si nécessaire
      },
      (erreur) => {
        console.error('Erreur lors de l\'ajout de la tâche :', erreur);
        // Ajoutez ici la gestion des erreurs si nécessaire
      }
    );
  }

}
