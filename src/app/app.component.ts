import { Component } from '@angular/core';
import { RouterOutlet, provideRouter } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MatDialogModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'new-todo-app';
}
