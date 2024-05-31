import * as React from 'react';
import {useState, ChangeEvent, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Typography, Box } from '@mui/material';

const Login: React.FC = () => {
    const [userName, setUserName] = useState<string>('admin');
    const [password, setPassword] = useState<string>('admin');
    const navigate = useNavigate();

    const handleLoginButton = () => {
        if (userName === 'admin' && password === 'admin') {
            navigate('/list');
        } else {
            alert('Invalid username or password');
        }
    };

    const handleGlobalKeyPress = (event: KeyboardEvent) => {
        if (event.key === 'Enter') {
            handleLoginButton();
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleGlobalKeyPress);
        return () => {
            window.removeEventListener('keydown', handleGlobalKeyPress);
        };
    }, [userName, password]);

    return (
        <Container maxWidth="xs">
            <Box mt={5}>
                <Typography variant="h4" gutterBottom>
                    Login
                </Typography>
                <TextField
                    label="Username"
                    fullWidth
                    margin="normal"
                    value={userName}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setUserName(e.target.value)}
                />
                <TextField
                    label="Password"
                    type="password"
                    fullWidth
                    margin="normal"
                    value={password}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                />
                <Button variant="contained" color="primary" fullWidth onClick={handleLoginButton}>
                    Login
                </Button>
            </Box>
        </Container>
    );
};

export default Login;
