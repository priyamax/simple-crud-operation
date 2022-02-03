import React from 'react';
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import '../App.css';
import { Box, AppBar, Toolbar, Typography, IconButton, Card, CardContent, Grid } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Home = ()=>{
    const history = useHistory();
    return(
         <div className='App'>
              <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            CRUD - TASK
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
         <br />
         <br />
         <br />
      <h1>Welcome to Home component</h1>   
      <h2>Simple CRUD Operation</h2>
         <br />
         <br />
         <br />
         <br />
         <center><Button variant="contained" onClick={(e) => { history.push('/getUser'); }}>SHOW USERS</Button>&nbsp;
          <Button variant="contained" onClick={(e) => { history.push('/createUser'); }}>ADD USERS</Button></center>
    <br />
         </div>
    );
}

export default Home;