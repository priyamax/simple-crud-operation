
import React, { Component } from "react";
import axios from 'axios';
import { Button } from '@mui/material';



export default class AddUser extends Component {
    constructor(props) {
        super()
        this.state = {
            id: '',
            firstname: '',
            lastname: '',
            address: '',
            
        }
    }
    render() {
        const handleSubmit = async (e) => {
            e.preventDefault();
            
               try{
                    var response = await axios.post('http://localhost:3300/createUser', {
                        id: this.state.id,
                        firstname: this.state.firstname,
                        lastname: this.state.lastname,
                        address: this.state.address
                })

                if (response.data) 
                {
                    console.log("success");
                    this.props.history.push('/getUser');
                }
            }catch(err){
                window.alert('Sorry! this userid is  already exists Please give some other Userid');
            }
        }

            return (
                <div className="App" style={{ padding: "5%" }}>
                    <div className="auth-wrapper">
                        <div className="auth-inner" style={{ padding: "1%" }}>
                            <form style={{padding:"2%"}} onSubmit={(e) => handleSubmit(e)}>
                                <h3>Add User</h3>

                                <div className="form-group">
                                    <label>Userid</label><br></br>
                                    <input type="number" className="form-control" placeholder="Userid"  required value={this.state.id} onChange={(e) => this.setState({ id: e.target.value })} />
                                </div><br></br>

                                <div className="form-group">
                                    <label>FirstName</label><br></br>
                                    <input type="text" className="form-control" placeholder="Firstname" required minLength={5} value={this.state.firstname} onChange={(e) => this.setState({ firstname: e.target.value })} />
                                </div><br></br>

                                <div className="form-group">
                                    <label>Lastname</label><br></br>
                                    <input type="text" className="form-control" placeholder="Lastname" required minLength={4}  value={this.state.lastname} onChange={(e) => this.setState({ lastname: e.target.value })} />
                                </div><br></br>

                                <div className="form-group">
                                    <label>Address</label><br></br>
                                    <input type="text" className="form-control" placeholder="address"   required value={this.state.address} onChange={(e) => this.setState({ address: e.target.value })} />
                                </div><br></br>

                                <Button variant="contained" type="submit" >Upload</Button>&nbsp;
                                <Button variant="contained"  onClick={(e) => { this.props.history.push('/'); }}>Cancel</Button><br></br>  
                            </form>
                        </div>
                    </div>
                </div>
            );
        }
    }
    