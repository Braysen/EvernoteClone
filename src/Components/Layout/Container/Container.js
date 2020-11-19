import React from 'react'
import './../Home.css'
import NavBar from '../../Parts/NavBar/NavBar'
import Index from '../Index'
import About from '../About'

export default function Container({propertieMode}) {
    return (
            <section>
                <div className="circle"></div>
                <NavBar/>
                {
                    !propertieMode ?(
                        <Index/>
                    ):(
                        <About/>
                    )
                }
            </section>
    )
}
