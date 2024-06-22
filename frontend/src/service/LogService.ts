// services/LoggingService.ts
type LogType = 'debug' | 'warn' | 'error' | 'info';

interface LogMessage {
    message: string;
    type: LogType;
}

class LogService {
    private subscribers: Array<(log: LogMessage) => void> = [];

    subscribe(callback: (log: LogMessage) => void) {
        this.subscribers.push(callback);
    }

    unsubscribe(callback: (log: LogMessage) => void) {
        this.subscribers = this.subscribers.filter(sub => sub !== callback);
    }

    log(message: string, type: LogType = 'info') {
        const logMessage: LogMessage = { message, type };
        this.subscribers.forEach(callback => callback(logMessage));
    }

    debug(message: string) {
        this.log(message, 'debug');
    }

    warn(message: string) {
        this.log(message, 'warn');
    }

    error(message: string) {
        this.log(message, 'error');
    }
}

const logService = new LogService();
export default logService;
