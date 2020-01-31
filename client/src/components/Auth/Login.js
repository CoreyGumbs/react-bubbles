import React, { useState } from 'react';
import axios from 'axios';

import './login.css';

const Login = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [auth, setAuth] = useState({ username: '', password: ''});
  

    const handleChange = e => {
        setAuth({...auth, [e.target.name]: e.target.value});
    }

    console.log(auth);
    return(
        <div className="login-container">
            <form action="" className="login-form">
                <div className="login-input-container">
                    <label htmlFor="" className="login-label">
                        Username:
                    </label>
                    <input type="text" className="login-input" name="username" value={auth.username} onChange={handleChange} />
                </div>
                <div className="login-input-container">
                    <label htmlFor="" className="login-label">
                        Password:
                    </label>
                    <input type="password" className="login-input" name="password" value={auth.password} onChange={handleChange}/>
                </div>
                <div className="form-btn">
                    <button type="submit">
                        Login
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Login;