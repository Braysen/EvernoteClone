import React from 'react'
import image1 from '../../Assets/Images/Product/image1.svg';
import image2 from '../../Assets/Images/Product/image2.svg';
import image3 from '../../Assets/Images/Product/image3.svg';

export default function About() {
    return (
        <>
            <div className="content">
                <div className="textBox">
                    <h2>It´t not just About<br/>It's <span>E</span><span>v</span><span>e</span><span>r</span><span>n</span><span>o</span><span>t</span><span>e</span></h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ipsum dolor sit amet, consectetur quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comodo consequat.
                    </p>
                    <a href="# ">Learn More</a>
                </div>
                <div className="imgBox">
                    <img src={image2} className="starbucks" alt=""></img>
                </div>
            </div>
            <ul className="thumb">
                <li><img src={image1} alt=""></img></li>
                <li><img src={image2} alt=""></img></li>
                <li><img src={image3} alt=""></img></li>
            </ul>
            <ul className="sci">
                <li><a href="/"><i className="fab fa-google" alt=""></i></a></li>
            </ul>
        </>
    )
}