import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Home from './components/Homecomponent';
import User from './components/Usercomponent';
import Createuser from './components/Createusercomponent';
import Updateuser from './components/Updatefun';

function App() {
var [userid,setuserid]=useState('');
var [firstname,setfirstname]=useState('');
var [lastname,setlastname]=useState('');
var [addres,setaddress]=useState('');

const childfun =async (id,frstname,lstname,address)=>{
console.log(`id from app ${id,frstname,lstname,address}`);
setuserid(userid=id);
setfirstname(firstname=frstname);
setlastname(lastname=lstname);
setaddress(addres=address)
}

  return (
    <div className="App">
       <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/getUser" component={(props)=>(<User parentfun={childfun}/>)}/>
            <Route exact path="/createUser" component={Createuser}/>
            <Route exact path="/updateUser" component={(props)=>(<Updateuser user={userid} fname={firstname} lname={lastname} addr={addres} />)}/>
          </Switch>
       </BrowserRouter>
    </div>
  );
}

export default App;
