import React from 'react';
import web from "../src/images/aboutfirest.jpg";
import Common from "./Common";
const About = () => {
    return (
        <>
           <Common 
           name="Welcome To About Page"
           imgsrc={web}
           visit="/contact"
           btname="Contact now"
           />
        </>
    );
};

export default About;
