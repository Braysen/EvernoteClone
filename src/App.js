import React, { useState,useEffect } from 'react'
import {Route, Switch} from "react-router-dom"
import './Components/Layout/Index.css'
import Container from './Components/Layout/Container/Container'
import Login from './Components/Layout/Login'

export default function Prueba() {
    const [propertieMode, setPropertieMode] = useState({
        propie: null
    });

    useEffect(() => {
        setPropertieMode({
            propie: 'propies'
        });
    },[]);

    return (
        <Switch>
            <Route exact path="/" component={Container}/>
            <Route exact path="/About">
                <Container propertieMode={propertieMode}/>
            </Route>
            <Route path="/Login" component={Login}/>
        </Switch>
    )
}
