import React from 'react'
import image1 from '../../Assets/Images/Product/image1.svg';
import image2 from '../../Assets/Images/Product/image2.svg';
import image3 from '../../Assets/Images/Product/image3.svg';
import InformationApp from '../Parts/InformationApp/InformationApp';
import Social from '../Parts/Social/Social';

export default function Index() {
    return (
      <>
          <div className="content">
                <InformationApp/>
                <div className="imgBox">
                    <img src={image2} className="starbucks" alt=""></img>
                </div>
            </div>
            <ul className="thumb">
                <li><img src={image1} alt=""></img></li>
                <li><img src={image2} alt=""></img></li>
                <li><img src={image3} alt=""></img></li>
            </ul>
            <Social/>
        </>
    )
}