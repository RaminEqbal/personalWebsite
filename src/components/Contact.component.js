
import '../bootstrap-4.3.1-dist/css/bootstrap.min.css'
import '../css/contact.css'
import '../css/base.css'
import React, { Component } from 'react';



import { unstable_renderSubtreeIntoContainer } from 'react-dom';

class Contact extends React.Component {
    constructor(props){
        super(props);
    }


    render(){

        return (
        <div id="contact-sec">
            <div id="contact-content">
                <div id="contact-desc">
                    <h1>You can reach me here.</h1>
                </div>
                <div id="social-media">
                    <span><a target="_blank" href="https://github.com/RaminEqbal">Github</a></span>
                    <span><a target="_blank" href="https://www.linkedin.com/in/ramin-eqbal-4a39a1140/">LinkedIn</a></span>
                    <span>EMail</span>
                </div>
            </div>
        </div>

        );
    }
}

export default Contact; 




/**
 * 
 */




/**
 * 
 */