import { useEffect, useState, forwardRef, useImperativeHandle } from "react";
import { Paper, TextField, Typography } from "@mui/material";
import { Checkbox, Button } from "@mui/material";

const Tasks = ({ initialTasks, ...props }) => {
  const [tasks, setTasks] = useState(initialTasks);
  //update tasks on render
  useEffect(() => {
    setTasks(initialTasks);
  }, [initialTasks]);

  return (
    <>
      {tasks.length > 0 && tasks.map((task) => (
        <Paper
          key={task._id}
          sx={{ display: "flex", flexGrow: 1, marginLeft: "10px" }}
        >
          <Checkbox
            checked={task.completed}
            onClick={() => props.onUpdateTask(task._id)}
            color="primary"
          />

          <Typography sx={{ flex: 'auto', alignSelf: 'center', 
            ...(task.completed === true && { textDecoration: "line-through" }) }} //when completed puts line-through
          >
            {task.task}
          </Typography>
          <Button
            onClick={() => props.onDeleteTask(task._id)}
            color="secondary"
          >
            delete
          </Button>
        </Paper>
      ))}
    </>
  )
}
//)
export default Tasks;