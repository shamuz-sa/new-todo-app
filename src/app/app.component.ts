import { Component } from '@angular/core';
import { RouterOutlet, provideRouter } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MatDialogModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'new-todo-app';

  constructor(private router: Router) {}

  isTasksActive(): boolean {
    return this.router.isActive('tasks', true);
  }

  isCategoriesActive(): boolean {
    return this.router.isActive('categories', true);
  }
}
