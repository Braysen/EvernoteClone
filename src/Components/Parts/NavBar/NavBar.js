import React from 'react'
import logo from '../../../Assets/Images/evernote.png'
import './../../Layout/Home.css'

export default function NavBar() {

    return (
            <header>
                <a href="/">
                    <img src={logo} alt="" className="logo"/>
                </a>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/About">About</a></li>
                    <li><a href="# ">Contact</a></li>
                    <li><a href="/Login">Login</a></li>
                </ul>
            </header>
    )
}
