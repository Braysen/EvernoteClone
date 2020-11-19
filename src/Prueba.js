import React from 'react'
import {Route, Switch} from "react-router-dom";
import './Components/Layout/Home.css'
import Home from './Components/Layout/Home'
import NavBar from './Components/Parts/NavBar/NavBar';
import About from './Components/Layout/About';
import Login from './Components/Layout/Login'
/*import Index from './Components/Layout/Index'*/

export default function Prueba() {
    return (
        <>
        <section>
            <div className="circle"></div>
        <NavBar/>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/About" component={About}/>
            <Route path="/Login" component={Login}/>
        </Switch>
        </section>
        </>
    )
}
