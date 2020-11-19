import React from 'react'

export default function Form({propertiesMode}) {

    return (
            <form action="" className={!propertiesMode ? ('sign-up-form'):('sign-in-form')}>
                <h2 className="title">{!propertiesMode ? ('Sign up'):('Sign in')}</h2>
                <div className="input-field">
                    <i className="fas fa-user"></i>
                    <input type="text" placeholder="Username"/>
                </div>
                {
                    !propertiesMode ?(
                        <div className="input-field">
                            <i className="fas fa-envelope"></i>
                            <input type="text" placeholder="Email"/>
                        </div>
                    ):(<></>)
                }
                <div className="input-field">
                    <i className="fas fa-lock"></i>
                    <input type="password" placeholder="Password"/>
                </div>
                <input type="submit" value={!propertiesMode ? ('SIGN UP'):('SIGN IN')} className="btn solid"/>
                <p className="social-text">Or Sign {!propertiesMode ? ('up'):('in')} with social platform</p>
                <div className="social-media">
                    <a href="# " className="social-icon">
                     <i className="fab fa-google"></i>
                    </a>
                </div>
                <p className="social-text"><a href="/">Back</a></p>
            </form>
    )
}
