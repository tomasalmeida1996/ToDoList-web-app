import { useEffect, useState} from "react";
import PropTypes from "prop-types";
import { Paper, Typography } from "@mui/material";
import { Checkbox, Button } from "@mui/material";

const Tasks = ({ initialTasks, onUpdateTask, onDeleteTask }) => {
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
            onClick={() => onUpdateTask(task._id)}
            color="primary"
          />

          <Typography sx={{ flex: 'auto', alignSelf: 'center', 
            ...(task.completed === true && { textDecoration: "line-through" }) }} //when completed puts line-through
          >
            {task.task}
          </Typography>
          <Button
            onClick={() => onDeleteTask(task._id)}
            color="secondary"
          >
            delete
          </Button>
        </Paper>
      ))}
    </>
  )
}
Tasks.propTypes = {
  initialTasks: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      task: PropTypes.string.isRequired,      
      completed: PropTypes.bool,
    })
  ),
  onUpdateTask: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
};
export default Tasks;