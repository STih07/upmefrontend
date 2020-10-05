export interface DashboardUser {
  id: number;
  name: string;
  image: string;
  begin: string;
  formTask: number;
  letterTask: number;
  testTasks: Task[];
  practiceTasks: Task[];
  decision: string;
  finish: string;
  selected?: boolean;
}

export interface Task {
  status: number;
  name: string;
}
