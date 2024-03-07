import { Component, OnInit } from '@angular/core';
import { Todo } from '../model/todo';
import { TodoService } from '../service/todo.service';
import { MatDialog } from '@angular/material/dialog';
import { AddTaskDialogComponent } from '../add-task-dialog/add-task-dialog.component';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
  providers:[TodoService]
})
export class TodoComponent implements OnInit {
  [x: string]: any;
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.getAllTask();
    // this.openAddTaskDialog()
  }
  taskArr : Todo[] = [];
  constructor(
    private todoService: TodoService,
    private dialog: MatDialog) { }
  // taskArr: Todo[] = [
  //   {
  //     "task_id": 1,
  //     "title": "string",
  //     "description": "string",
  //     "due_date": "2024-03-06",
  //     "priority": 0,
  //     "category": "string"
  //   },
  //   {
  //     "task_id": 2,
  //     "title": "string",
  //     "description": "string",
  //     "due_date": "2024-03-06",
  //     "priority": 0,
  //     "category": "string"
  //   },
  //   {
  //     "task_id": 3,
  //     "title": "string",
  //     "description": "string",
  //     "due_date": "2024-03-06",
  //     "priority": 0,
  //     "category": "string"
  //   },
  //   {
  //     "task_id": 4,
  //     "title": "string",
  //     "description": "string",
  //     "due_date": "2024-03-06",
  //     "priority": 0,
  //     "category": "string"
  //   },
  //   {
  //     "task_id": 5,
  //     "title": "string",
  //     "description": "string",
  //     "due_date": "2024-03-06",
  //     "priority": 0,
  //     "category": "string"
  //   },
  //   {
  //     "task_id": 6,
  //     "title": "string",
  //     "description": "string",
  //     "due_date": "2024-03-06",
  //     "priority": 0,
  //     "category": "string"
  //   },
  //   {
  //     "task_id": 7,
  //     "title": "string",
  //     "description": "string",
  //     "due_date": "2024-03-06",
  //     "priority": 0,
  //     "category": "string"
  //   }
  // ];

  getAllTask() {
      // console.log("toto is call")
      this.todoService.getAllTask().subscribe({
        next: (data) => {
          console.log(data)
          this.taskArr = data;
        },
        error: (err) => {
          console.error('Unable to get the list of tasks', err);
        }
      });
    }


    openAddTaskDialog(): void {
      const dialogRef = this.dialog.open(AddTaskDialogComponent, {
        width: '800px', // Ajustez la largeur selon vos besoins
        data: {} // Vous pouvez transmettre des données à votre boîte de dialogue si nécessaire
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('La boîte de dialogue est fermée', result);
        // Ajoutez ici la logique pour traiter le résultat de la boîte de dialogue
      });
    }
}
