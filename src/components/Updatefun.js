import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import { Button } from '@mui/material';

export default function Updatecomponent(props){
    const [userlist,setuserlist]=useState([]);

    const [firstname,setfirstname]=useState(props.fname);
    const [lastname,setlastname]=useState(props.lname);
    const [address,setaddress]=useState(props.addr);

    const history = useHistory();



    const handleSubmit= async(e)=>{
        e.preventDefault();
        var response = await axios.put(
            `http://localhost:3300/updateUser/${props.user}`,
            {
              id:props.user,
              firstname: firstname,
              lastname: lastname,
              address: address,
            }
          );
          var index = userlist.findIndex((row) => row.id === props.user);
          var user1 = [...userlist];
          user1[index] = response.data;
        await  setuserlist(user1);

          console.log('updates');
          history.push('/getUser');
      
    }

    return (
        <div className="App" style={{ padding: "5%" }}>
            <div className="auth-wrapper">
                <div className="auth-inner" style={{ padding: "1%" }}>
                    <form style={{ padding: "5%" }} onSubmit={(e) => handleSubmit(e)}>
                        <h3>Update User</h3>

                        <div className="form-group">
                            <label>Userid</label><br></br>
                            <input type="number" className="form-control" placeholder="Enter the same Userid" required value={props.user}  />
                        </div><br></br>

                        <div className="form-group">
                            <label>FirstName</label><br></br>
                            <input type="text" className="form-control" placeholder="Firstname" required minLength={5} value={firstname} onChange={(e) => setfirstname(e.target.value )} />
                        </div><br></br>

                        <div className="form-group">
                            <label>Lastname</label><br></br>
                            <input type="text" className="form-control" placeholder="Lastname" required minLength={4} value={lastname} onChange={(e) => setlastname( e.target.value )} />
                        </div><br></br>

                        <div className="form-group">
                            <label>Address</label><br></br>
                            <input type="text" className="form-control" placeholder="address" required value={address} onChange={(e) => setaddress( e.target.value)} />
                        </div><br></br>

                        <Button variant="contained" type='submit'>Update</Button>&nbsp;
                        <Button variant="contained" onClick={(e) => {history.push('/getUser'); }}>Cancel</Button><br></br>
                    </form>
                </div>
            </div>
        </div>
    );

}

   