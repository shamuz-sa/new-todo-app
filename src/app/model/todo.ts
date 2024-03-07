
export class Todo {
  task_id: number = 0;
  title: string = '';
  description: string = '';
  due_date: Date = new Date(); // Correction ici
  priority: number = 0;
  category: string = '';
}
