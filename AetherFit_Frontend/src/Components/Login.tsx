import mark from '../Assets/github-mark.png';
import Aether from '../Assets/Aether.png';
import './Login.css';
import { useState } from 'react';

export default function Login() {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

  
    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };

   
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

   
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Username:', username);
        console.log('Password:', password);
       
    };

    return (
        <div className="login-page">
            <div className="content-wrapper">
                <div className="wrapper-wrapper-div">
                    <div className="wrapper-div">
                        <img className="aether-logo" src={Aether} alt="Aether Logo" />
                        <h1 className='name'>AetherFit</h1>
                        <form className="login-form" onSubmit={handleSubmit}>
                            <input 
                                type="text" 
                                placeholder="Username" 
                                value={username}
                                onChange={handleUsernameChange} 
                            />
                            <input 
                                type="password" 
                                placeholder="Password" 
                                value={password}
                                onChange={handlePasswordChange} 
                            />
                            <button type="submit">Login</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className='footer-div'>
                <a href="https://github.com/Franciskratos/AetherFit" target="_blank" rel="noopener noreferrer">
                    <img className='github-logo' src={mark} />
                </a>
            </div>
        </div>
    );
}
