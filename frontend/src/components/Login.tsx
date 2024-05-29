import * as React from 'react';
import { useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
    const [userName, setUserName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const navigate = useNavigate();

    const handleLoginButton = () => {
        if (userName === 'admin' && password === 'admin') {
            navigate('/list');
        } else {
            alert('Invalid username or password');
        }
    };

    return (
        <div>
            <div>
                <label>Username:</label>
                <input
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setUserName(e.target.value)}
                    type="text"
                    name="User name"
                    value={userName}
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                    type="password"
                    name="Password"
                    value={password}
                />
            </div>
            <div>
                <button onClick={handleLoginButton}>Login</button>
            </div>
        </div>
    );
};

export default Login;
