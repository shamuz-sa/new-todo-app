import { Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';

export const routes: Routes = [{
  pathMatch:'full',
  redirectTo:'test',
  path:''
},{
  path: 'test',
  component: TodoComponent
},];
