export interface Task {
  id: number;
  title: string;
  done: boolean;
}

export interface CreateTaskBody {
  title: string;
}
