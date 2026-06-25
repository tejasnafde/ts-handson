import { Router } from "express";
import { getAllTasks, createTask, getTaskById } from "../store.js";
import { CreateTaskBody } from "../types.js";

const router = Router();

// Flask-RESTful equivalent: class TaskList(Resource): def get(self):
router.get( "/", (req,res) => {
  console.log("inside router")
  let tasks = getAllTasks();
  const done = req.query.done;
  if (done === "true") tasks = tasks.filter((t) => t.done);
  if (done === "false") tasks = tasks.filter((t) => !t.done);
  console.log("done tasks are",tasks.filter((t) => t.done) )
  return res.json(tasks)
}
)

router.get("/:id",(req, res) => {
  const id = parseInt(req.params.id, 10);
  const task = getTaskById(id);
  if (!task){
    return res.status(404).json({ error: "Task not found" });
  }
  res.json(task)
}
)

router.post("/",(req,res) => {
  console.log("inside post")
  const { title } = req.body as CreateTaskBody;
  console.log("raw title is", title)
  console.log("title?.trim() is", (title?.trim()))
  if (!title?.trim()){
    console.log("returning 400 because title.trim returned null")
    return res.status(400).json({ error: "Title is required" });
  }
  
  const task = createTask(title.trim());
  console.log("task created", task)
  return res.status(201).json(task);
}
)





export default router;
