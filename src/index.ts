import express from "express";
import tasksRouter from "./routes/tasks.js";

const app = express();
const PORT = 3001;

app.use(express.json());

// Mount at /tasks — like api.add_resource(TaskList, '/tasks')
app.use("/tasks", tasksRouter);


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
