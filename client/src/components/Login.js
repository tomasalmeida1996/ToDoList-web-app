import React, { useState } from 'react';
import PropTypes from "prop-types";
import { Alert, Button, TextField } from '@mui/material';
import { userLogin, userRegister } from '../services/user';

export default function Login({onUserLogin, onUserRegister}) {
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
                // const result = await userLogin(user).then(result => {                    
                //     onUserLogin(result.data);
                // })                
                const result = await userLogin(user);
                onUserLogin(result.data);                
            }
            else{
                setError('Fill the required fields!');
            }            
        } catch (error) {
          console.log("userLoginClick error",error.response.data);
          setError(error.response.data);
        }
    }

    async function userRegisterClick() {
        try {
            if(user.username !== '' && user.password !== ''){                  
                console.log(user);
                const result = await userRegister(user).then(req => {
                    console.log("userRegisterClick result",req.data);
                    onUserRegister(req.data);
                });
            }
            else{
                setError('Fill the required fields!');
            }            
        } catch (error) {
          console.log(error);
        }
    }

    return (
        <>
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
            onClick={userLoginClick}
            >
                Login
            </Button>
            <Button
            sx={{ height: "40px", width: '200px' }}
            color="primary"
            variant="outlined"
            onClick={userRegisterClick}
            >
                Sign Up
            </Button>
        </form>
        {error && <Alert severity="error">{error}</Alert>}
        </>
    )
}
Login.propTypes = {    
    onUserLogin: PropTypes.func.isRequired,
    onUserRegister: PropTypes.func.isRequired,
};