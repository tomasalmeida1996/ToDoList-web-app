import { Typography } from '@mui/material';
import React from 'react';

export default function Login() {
    const [user, setUser] = useState({ username: '', password: '' });

    const handleUsernameChange = (e) => {
        setTasks({ ...user, username: e.target.value });
    }
    const handlePasswordChange = (e) => {
        setTasks({ ...user, password: e.target.value });
    }


    return (
        <form>            
            <TextField
                variant="outlined"
                size="small"
                sx={{ width: "80%" }}
                value={tasks.currentTask}
                required={true}
                onChange={handleUsernameChange}
                placeholder="Username"
            />
            <TextField
                variant="outlined"
                size="small"
                sx={{ width: "80%" }}
                value={tasks.currentTask}
                required={true}
                onChange={handlePasswordChange}
                type="password"
                placeholder="Password"
            />
            <Button
            sx={{ height: "40px", width: '200px' }}
            color="primary"
            variant="outlined"
            type="submit"
          >
            Login
          </Button>
        </form>
    )
}