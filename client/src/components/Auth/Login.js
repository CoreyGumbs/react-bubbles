import React, { useState } from 'react';

import './login.css';

const Login = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    return(
        <div className="login-container">
            <form action="" className="login-form">
                <div className="login-input-container">
                    <label htmlFor="" className="login-label">

                    </label>
                    <input type="text" className="login-input"/>
                </div>
                <div className="login-input-container">
                    <label htmlFor="" className="login-label">
                    </label>
                    <input type="password" className="login-input"/>
                </div>
            </form>
        </div>
    )
}

export default Login;