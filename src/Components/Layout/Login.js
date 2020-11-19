import React, { useState,useEffect} from 'react'
import './Login.css'
import image1 from '../../Assets/Images/image1.svg'
import image2 from '../../Assets/Images/image2.svg'
import Form from '../Parts/Form/Form';

export default function Login({updateModeDefault = false}) {
    const [updateMode, setUpdateMode] = useState(updateModeDefault);
    const [propertiesMode, setPropertiesMode] = useState({
        Email: null
    });

    useEffect(() => {
        setPropertiesMode({
            Email: 'Email'
        });
    },[]);

    return (
        <div className={updateMode ? 'container sign-up-mode' : 'container'}>
            <div className="forms-container">
                <div className="signin-signup">
                
                    <Form className="sign-in-form"/>
                    
                    <Form className="sign-up-form" propertiesMode={propertiesMode}/>
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
