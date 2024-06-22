// components/LogBox.tsx
import * as React from 'react';
import logService from '../service/LogService.ts'
import { Alert, AlertTitle } from '@mui/material';
import {useEffect, useState} from "react";

interface LogMessage {
    message: string;
    type: 'debug' | 'warn' | 'error' | 'info';
}

const LogBox: React.FC = () => {
    const [logs, setLogs] = useState<LogMessage[]>([]);

    useEffect(() => {
        const handleLog = (log: LogMessage) => {
            setLogs((prevLogs) => [...prevLogs, log]);
        };

        logService.subscribe(handleLog);
        return () => {
            logService.unsubscribe(handleLog);
        };
    }, []);

    const getAlertSeverity = (type: LogMessage['type']) => {
        switch (type) {
            case 'debug':
                return 'info';
            case 'warn':
                return 'warning';
            case 'error':
                return 'error';
            default:
                return 'info';
        }
    };

    return (
        <div style={{ position: 'fixed', bottom: 0, width: '100%', zIndex: 1000 }}>
            {logs.map((log, index) => (
                <Alert key={index} severity={getAlertSeverity(log.type)}>
                    <AlertTitle>{log.message}</AlertTitle>
                    {log.type.toUpperCase()}
                </Alert>
            ))}
        </div>
    );
};

export default LogBox;
