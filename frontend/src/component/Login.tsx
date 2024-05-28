import {useState} from "react";

export interface LoginProps {
    userName: string;
    password: string
}

export const Login: React.FC<LoginProps> =  ({userName, password}) => {
    const [login, setLogin] = useState<LoginProps>({userName: "Username", password: "password"});

    function handleLoginButton() {
    }

    function handleUsername(event) {
        login.userName = event.target.value;
    }

    function handlePassword() {

    }


    return (<div>
        <div>
            <label>Username:</label>
            <input onChange={handleUsername} type="text" name="User name" value={userName}/>
        </div>
        <div>
            <label>Password:</label>
            <input onChange={handlePassword} type="password" name="Password" value={password}/>
        </div>
        <div>
            <button onClick={handleLoginButton}>Login</button>
        </div>
    </div>);
}