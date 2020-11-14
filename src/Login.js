import React, { useState } from 'react'
import './login.css'
import image1 from './Assets/Images/image1.svg'
import image2 from './Assets/Images/image2.svg'

export default function Login({updateModeDefault = false}) {
    const [updateMode, setUpdateMode] = useState(updateModeDefault);


    return (
        <div className={updateMode ? 'container sign-up-mode' : 'container'}>
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
                <div className="panel left-panel">
                    <div className="content">
                        <h3>New here ?</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus impedit quidem quibusdam?</p>
                        <button className="btn transparent" id="sign-up-btn" aria-label="updateMode on/off"
                        onClick={() => setUpdateMode(!updateMode)} onChange={() => setUpdateMode(!updateMode)}>Sign up</button>
                    </div>

                    <img src={image1} className="image" alt=""/>
                </div>

                <div className="panel right-panel">
                    <div className="content">
                        <h3>One of us ?</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus impedit quidem quibusdam?</p>
                        <button className="btn transparent" id="sign-in-btn" aria-label="updateMode off" onClick={() => setUpdateMode(!updateMode)} onChange={() => setUpdateMode(!updateMode)} >Sign in</button>
                    </div>

                    <img src={image2} className="image" alt=""/>
                </div>
            </div>
        </div>
    )
}
