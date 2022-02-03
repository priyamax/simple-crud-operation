
import React, { Component } from "react";
import axios from 'axios';
import { Button } from '@mui/material';


export default class Updateuser extends Component {
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
   console.log(this.props.user)
        const handleSubmit = async (e) => {
            e.preventDefault();
            console.log('hii')
            try {
                var response = await axios.put(`http://localhost:3300/updateUser/${this.state.id}`, {
                    id: this.state.id,
                    firstname: this.state.firstname,
                    lastname: this.state.lastname,
                    address: this.state.address
                })

                if (response.data) {
                    console.log("updated");
                    this.props.history.push('/getUser');
                }
            } catch (err) {
                console.log(err)
                window.alert('Enter Correct user_id')
            }
        }

        return (
            <div className="App" style={{ padding: "5%" }}>
                <div className="auth-wrapper">
                    <div className="auth-inner" style={{ padding: "1%" }}>
                        <form style={{ padding: "5%" }} onSubmit={(e) => handleSubmit(e)}>
                            <h3>Update User</h3>

                            <div className="form-group">
                                <label>Userid</label><br></br>
                                <input type="number" className="form-control" placeholder="Enter the same Userid" required value={this.state.id} onChange={(e) => this.setState({ id: e.target.value })} />
                            </div><br></br>

                            <div className="form-group">
                                <label>FirstName</label><br></br>
                                <input type="text" className="form-control" placeholder="Firstname" required minLength={5} value={this.state.firstname} onChange={(e) => this.setState({ firstname: e.target.value })} />
                            </div><br></br>

                            <div className="form-group">
                                <label>Lastname</label><br></br>
                                <input type="text" className="form-control" placeholder="Lastname" required minLength={4} value={this.state.lastname} onChange={(e) => this.setState({ lastname: e.target.value })} />
                            </div><br></br>

                            <div className="form-group">
                                <label>Address</label><br></br>
                                <input type="text" className="form-control" placeholder="address" required value={this.state.address} onChange={(e) => this.setState({ address: e.target.value })} />
                            </div><br></br>

                            <Button variant="contained" type='submit'>Update</Button>&nbsp;
                            <Button variant="contained" onClick={(e) => { this.props.history.push('/getUser'); }}>Cancel</Button><br></br>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
