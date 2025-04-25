import mark from '../Assets/github-mark.png';
import Aether from '../Assets/Aether.png';
import './Login.css';
 
 export default function Login() {
    return (
    <>

        <div className="login-page">
            <div className="content-wrapper">
                <div className="wrapper-wrapper-div">
                    <div className="wrapper-div">
                        <img className="aether-logo" src={Aether} alt="Aether Logo"/>
                            <h1 className='name'>AetherFit</h1>
                                 <form className="login-form">
                                 <input type="text" placeholder="Username" />
                                <input type="password" placeholder="Password" />
                                <button type="submit">Login</button>
                                </form>
                        </div>
                     </div>
                 </div>
                <div className='footer-div'>
                     <a href="https://github.com/Franciskratos/AetherFit" target="_blank" rel="noopener noreferrer">
                    <img className='github-logo' src={mark}/>
                     </a>
             </div>
        </div>
      
    </>
    );
  }
  