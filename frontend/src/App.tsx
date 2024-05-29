import * as React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Login from './components/Login';
import List from './components/List';
import Create from './components/Create';
import './App.css';
import {Theme} from "@emotion/react";

const theme : Theme = createTheme({
    palette: {
        mode: 'light', // oder 'dark', je nach Präferenz
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/list" element={<List />} />
                    <Route path="/create" element={<Create />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;
