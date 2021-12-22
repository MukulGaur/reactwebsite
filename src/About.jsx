import React from 'react';
import Common from './Common';
import img2 from './images/hero-img.png';

const About = () => {
    return (
        <div>
            <Common name="Welcome To About Page" imgsrc={img2} visit="/contact" btnName="Contact Now" />
        </div>
    )
}

export default About
