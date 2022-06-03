import { Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { userLogin } from '../services/user';

export default function Login(props) {
    const [user, setUser] = useState({ username: '', password: '' });
    const [error, setError] = useState(null);

    const handleUsernameChange = (e) => {
        setUser({ ...user, username: e.target.value });
    }
    const handlePasswordChange = (e) => {
        setUser({ ...user, password: e.target.value });
    }

    async function userLoginClick() {
        try {
            if(user.username !== '' && user.password !== ''){                
                console.log(user);
                const result = await userLogin(user);
                console.log("userLoginClick result",result.data);
                props.onUserLogin(result.data);
            }
            else{
                setError('Fill the required fields!');
            }            
        } catch (error) {
          console.log(error);
        }
    }

    return (
        <form>            
            <TextField
                variant="outlined"
                size="small"
                sx={{ width: "80%" }}
                value={user.username}
                required={true}
                onChange={handleUsernameChange}
                placeholder="Username"
            />
            <TextField
                variant="outlined"
                size="small"
                sx={{ width: "80%" }}
                value={user.password}
                required={true}
                onChange={handlePasswordChange}
                type="password"
                placeholder="Password"
            />
            <Button
            sx={{ height: "40px", width: '200px' }}
            color="primary"
            variant="outlined"
            //type="submit"
            onClick={userLoginClick}
            >
                Login
            </Button>
            <Button
            sx={{ height: "40px", width: '200px' }}
            color="primary"
            variant="outlined"
//            onClick={userLogin}
            >
                Sign Up
            </Button>
        </form>
    )
}