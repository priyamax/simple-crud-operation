import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import { Box, AppBar, Toolbar, Typography, Button, IconButton, Card, CardContent, Grid } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';


function Usercomponent(props) {
    const [UserList, setUserList] = useState([]);
   
    const history = useHistory();
   
    useEffect(async () => {
        var response = await axios.get('http://localhost:3300/getUser');

        await setUserList(response.data);

    }, [])

   

    // function getuser() {

    //     fetch('http://localhost:3300/getUser').then((res) => {
    //         res.json().then((resp) => {
    //             console.log(resp);
    //             setUserList(resp);
    //         })
    //     })
    // }

    // function deleteUser(id) {
    //     fetch(`http://localhost:3300/deleteUser/${id}`, {
    //         method: `DELETE`
    //     }).then((res) => {
    //         var resp = res.json();
    //         console.log(resp);
    //         getuser();
    //     })

    // }


    const deleteUser = async (id) => {
        var response = await axios.delete(
            `http://localhost:3300/deleteUser/${id}`
        );
        var user = UserList.filter((row) => row.id !== id);
        setUserList(user);
    };


    function gotoupdatecompo(){
        history.push('/updateUser');
    }


    return (
        <>
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
                            User - Lists
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
            <div style={{ padding: '30px' }}>
                <Grid container spacing={4}>
                    {UserList.map(row => (
                        <Grid item key={row.id}>
                            <Card sx={{ width: 250 }}>
                                <CardContent>

                                    <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                                        <b>
                                            User_Id: {row.id}
                                        </b>
                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">

                                        Firstname: {row.firstname}
                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">

                                        Lastname: {row.lastname}
                                    </Typography>
                                    <Typography >
                                        Address: {row.address}
                                    </Typography> <br />
                                    <Button variant="contained" onClick={(e) =>{props.parentfun(row.id,row.firstname,row.lastname,row.address);gotoupdatecompo()}}>Update</Button>&nbsp;
                                    <Button variant="contained" onClick={(e) => deleteUser(row.id)}>Delete</Button>&nbsp;

                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid><br />
                <div className='App'>
                    <Button variant="contained" onClick={(e) => history.push('/')}>Home</Button>&nbsp;
                </div>
            </div>
        </>
    )
}


export default Usercomponent;
