import React, { useState } from 'react'
import "../Css/LoginScreen.css"
import SignupScreen from './SignupScreen';
function LoginScreen() {
    const [signIn, setSignIn] = useState(false);

    return (
        <div className='loginScreen'>
            <div className="loginScreen__background" >
            </div>
            <img className='loginScreen__logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" />
           <button onClick={() => setSignIn(true)}
            className='loginScreen__button'>Sign In</button>
           <div className="loginScreen__gradient"></div>
           <div className="loginScreen__body">
            {!signIn ? (
                <SignupScreen />
            ) : (
                   <>
              <h1>Unlimited films, TV programmes and more.</h1>
             <h2>Watch anywhere. Cancel at any time</h2>
             <h3>Ready to watch? Enter your email to create or restart your membership</h3>
             <div className="loginScreen__input">
                <form>
                <input type="email" placeholder='Email Address'/>
                <button onClick={ () => setSignIn (true)}
                 type="submit" className="loginScreen__getStarted">Get Started</button>
                </form>
             </div>
                 </>
            ) }
           

            </div>
        </div>
    )
}

export default LoginScreen
