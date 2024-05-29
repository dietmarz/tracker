import React, { useState, ChangeEvent } from 'react';

export interface LoginProps {
    userName: string;
    password: string;
}

const Login: React.FC<LoginProps> = ({ userName, password }) => {
    const [login, setLogin] = useState<LoginProps>({ userName: userName, password: password });

    function handleLoginButton() {
        console.log("Logging in with", login);
    }

    function handleUsername(event: ChangeEvent<HTMLInputElement>) {
        setLogin({
            ...login,
            userName: event.target.value,
        });
    }

    function handlePassword(event: ChangeEvent<HTMLInputElement>) {
        setLogin({
            ...login,
            password: event.target.value,
        });
    }

    return (
        <div>
            <div>
                <label>Username:</label>
                <input onChange={handleUsername} type="text" name="User name" value={login.userName} />
            </div>
            <div>
                <label>Password:</label>
                <input onChange={handlePassword} type="password" name="Password" value={login.password} />
            </div>
            <div>
                <button onClick={handleLoginButton}>Login</button>
            </div>
        </div>
    );
};

export default Login;
