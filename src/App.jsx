import React from 'react';
import Home from "./Home";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Contact from "./Contact";
import About from "./About";
import Service from "./Service";
import Navbar from "./Navbar"
import { Route, Routes } from 'react-router';
import { Navigate } from 'react-router-dom';

function App() {
    return (
        <>
        <Navbar />
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/about" element={<About/>} />
            <Route exact path="/contact" element={<Contact/>} />
            <Route exact path="/service" element={<Service/>} />
            <Route path="*" element={<Navigate to ="/" />}/>
        </Routes>
        </>
    );
};

export default App;