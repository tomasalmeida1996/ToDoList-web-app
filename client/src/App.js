import {useState, useEffect} from "react";
import Tasks from "./components/Tasks";
import { Checkbox, Button, Paper, TextField } from "@mui/material";
import {
  addTask, deleteTask, getTasks, updateTask,
} from "./services/task";

function App() {
  const [tasks, setTasks] = useState({ tasks: [], currentTask: "" });

  useEffect(() => {
    async function fetchTasks(){
        try {              
            const { data } = await getTasks();
            setTasks({ tasks: data });
        } catch (error) {
            console.log(error);
        }
    }
    fetchTasks();
  }, []);
  
  const handleChange = (e) => {
    setTasks({ ...tasks, currentTask: e.target.value });
  }
  
  const onNewTaskClick = async (e) => {
      e.preventDefault();
      const originalTasks = tasks.tasks;
      try {
          const { data } = await addTask({ task: tasks.currentTask });
          const newtasks = originalTasks;
          newtasks.push(data);
          setTasks({ tasks: newtasks, currentTask: "" });
      } catch (error) {
          console.log(error);
      }
  }
  
  const handleUpdate = async (currentTask) => {  
      const originalTasks = tasks.tasks;
      try {
          const tasks = [...originalTasks];
          const index = tasks.findIndex((task) => task._id === currentTask);
          tasks[index] = { ...tasks[index] };
          tasks[index].completed = !tasks[index].completed;
          setTasks({ tasks });
          await updateTask(currentTask, {
              completed: tasks[index].completed,
          });
      } catch (error) {
          setTasks({ tasks: originalTasks });
          console.log(error);
      }
  }

  const handleDelete = async (currentTask) => {  
      const originalTasks = tasks.tasks;
      try {
          const tasks = originalTasks.filter(
              (task) => task._id !== currentTask
          );
          setTasks({ tasks });
          await deleteTask(currentTask);
      } catch (error) {
          setTasks({ tasks: originalTasks });
          console.log(error);
      }
  }
  
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100vw", height: "100vh", background: "#f5f5f5" }}>      
      <Paper elevation={3} sx={{width: "500px", minHeight: "300px", padding: "10px"}}>
        <div>TODO LIST</div>
        <form
          //onSubmit={tasksRef.current?.handleSubmit}
          onSubmit={onNewTaskClick}                    
          style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "15px 0" }}
        >
          <TextField
            variant="outlined"
            size="small"
            sx={{ width: "80%" }}
            value={tasks.currentTask}
            required={true}
            onChange={handleChange}
            placeholder="New"
          />
          <Button
            sx={{ height: "40px", width: '200px' }}
            color="primary"
            variant="outlined"
            type="submit"
          >
            New task
          </Button>
        </form>
        <div>
           <Tasks onDeleteTask={handleDelete} onUpdateTask={handleUpdate} initialTasks={tasks.tasks} />
        </div>
      </Paper>
    </div>
  );
}
export default App;
