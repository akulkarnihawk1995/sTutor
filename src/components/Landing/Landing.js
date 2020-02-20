import React, {useState} from "react";
import "./Landing.css";
import axios from "axios";

function Landing(props){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleEmailChange(event){
        setEmail(event.target.value);
    }
    function handlePasswordChange(event){
        setPassword(event.target.value);
    }

    function handleSubmit(event){
        axios.get("http://localhost:5000/users/" + email)
        .then(res=>{
            if (password.length>0 && res.data[0].password === password){
                props.history.push("/selection/id=" + res.data[0]._id);
            }
            else{
                setPassword("");
            }
        });
        event.preventDefault();
    }

    return <div id="landing-login" className="container">
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="email" className="control-label col-sm-2">Email</label>
                <input type="email" className="form-control" id="email" placeholder="abc@def.com" value={email} onChange={handleEmailChange}></input>
            </div>
            <div className="form-group">
            <label htmlFor="pwd" className="control-label col-sm-2">Password</label>
            <input id="pwd" className="form-control" type="text" placeholder="123456789" value={password} onChange={handlePasswordChange}></input>
            
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>;
}

export default Landing;