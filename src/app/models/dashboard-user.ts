export interface DashboardUser {
  id: number;
  name: string;
  image: string;
  begin: string;
  formTask: number;
  letterTask: number;
  testTask: Task[];
  practiceTasks: Task[];
  decision: string;
  finish: string;
}

export interface Task {
  status: number;
  name: string;
}
