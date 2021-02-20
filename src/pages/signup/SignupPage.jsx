import React from 'react';
import './SignupPage.styles.css';

const Signup = () => (
    <form className="right">
        <div className="container">
        <h1>Sign Up</h1>
        <p>Please fill in this form to create an account.</p>

        <label ><b>Email</b></label>
        <input type="text" placeholder="Enter Email" name="email" required/>

        <label ><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required/>

        <label ><b>Repeat Password</b></label>
        <input type="password" placeholder="Repeat Password" name="psw-repeat" required/>

        <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
        
        <div className="clearfix">
            <button type="button" className="cancelbtn">Cancel</button>
            <button type="submit" className="signupbtn">Sign Up</button>
        </div>
        </div>
    </form>
)

export default Signup;
