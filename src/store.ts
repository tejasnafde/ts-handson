import type { Task } from "./types.js";

// In-memory store — like a dict/list you'd use before wiring up Postgres
const tasks: Task[] = [
  { id: 1, title: "Learn TypeScript routing", done: false },
  { id: 2, title: "Add POST endpoint by hand", done: true },
  { id: 10 , title: "dip fafa", done: false }
];

let nextId = 3;

export function getAllTasks(): Task[] {
  return tasks;
}

export function getTaskById(id: number): Task | undefined {
  return tasks.find((t) => t.id === id);
}

export function createTask(title: string): Task {
  const task: Task = { id: nextId++, title, done: false };
  tasks.push(task);
  return task;
}

export function updateTask(id: number, title: string, done: boolean): Task | undefined {
  const task = getTaskById(id);
  if (!task) return undefined;
  task.title = title;
  task.done = done;
  return task;
}

export function deleteTask(id: number): boolean {
  const index = tasks.findIndex((t) => t.id === id);
  if (index === -1) return false;
  tasks.splice(index, 1);
  return true;
}
