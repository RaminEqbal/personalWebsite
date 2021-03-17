import '../bootstrap-4.3.1-dist/css/bootstrap.min.css'
import '../css/base.css'
import '../css/footer.css'
import React, { Component } from 'react';

import { unstable_renderSubtreeIntoContainer } from 'react-dom';

class Footer extends React.Component {
    constructor(props){
        super(props);
    }


    render(){

        return (
            <footer id="footer">
            <div id="footer-wrapper">
                <div id="disclaim">
                
                </div>
                <div id="copyright">
                    © Ramin Eqbal
                </div>
            </div>
        </footer>

        );
    }
}

export default Footer; 




/**
 * 
 */