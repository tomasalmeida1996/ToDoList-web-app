import { Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

export default function Logout(props) {
    return (
        <form>   
            <Button
            sx={{ height: "40px", width: '200px' }}
            color="primary"
            variant="outlined"
            //type="submit"
            onClick={props.onUserLogout}
            >
                Logout
            </Button>            
        </form>
    )
}