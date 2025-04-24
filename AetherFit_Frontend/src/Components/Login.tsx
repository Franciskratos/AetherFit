
import Aether from '../Assets/Aether.png'
import './Login.css';
 
 export default function Login() {
    return (
        <>
        
    <div className="login-page">
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
          
        </>
    );
  }
  