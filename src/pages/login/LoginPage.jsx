import React from 'react';
import './LoginPage.styles.css';
import avtar from '../../assets/images/avtar.png';

const Login = () => (
    <div className="left">
        <form>
            <div className="imgcontainer">
                <img src={avtar} alt="Avatar" className="avatar"/>
            </div>
            <div className="container">
                <label><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="uname" required/>

                <label><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required/>
                    
                <button type="submit">Login</button>
            </div>

            <div className="container">
                <button type="button" className="cancelbtn">Cancel</button>
                <span className="psw">Forgot <a href="#">password?</a></span>
            </div>
        </form>


    </div>
)

export default Login;