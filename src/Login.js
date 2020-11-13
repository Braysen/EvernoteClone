import React from 'react'
import './login.css'

export default function Login() {
    return (
        <div className="container">
            <div className="forms-container">
                <div className="signin-signup">
                    <form action="" className="sign-in-form">
                        <h2 className="title">Sign in</h2>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input type="text" placeholder="Username"/>
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input type="password" placeholder="Password"/>
                        </div>
                        <input type="submit" value="Login" className="btn solid"/>
                        <p className="social-text">Or Sign in with social platform</p>
                        <div className="social-media">
                            <a href="#" className="social-icon">
                                <i className="fab fa-google"></i>
                            </a>
                        </div>
                    </form>
                    
                    <form action="" className="sign-up-form">
                        <h2 className="title">Sign up</h2>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input type="text" placeholder="Username"/>
                        </div>
                        <div className="input-field">
                            <i className="fas fa-envelope"></i>
                            <input type="text" placeholder="Email"/>
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input type="password" placeholder="Password"/>
                        </div>
                        <input type="submit" value="Sign up" className="btn solid"/>
                        <p className="social-text">Or Sign up with social platform</p>
                        <div className="social-media">
                            <a href="#" className="social-icon">
                                <i className="fab fa-google"></i>
                            </a>
                        </div>
                    </form>
                </div>
            </div>
            <div className="panels-container">

            </div>
        </div>
    )
}
