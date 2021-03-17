
import '../bootstrap-4.3.1-dist/css/bootstrap.min.css'
import '../css/projects.css'
import React, { Component } from 'react';

import ProjectView from './ProjectView.component'

import { unstable_renderSubtreeIntoContainer } from 'react-dom';

class Projects extends React.Component {
    constructor(props){
        super(props);
    }


    render(){

        return (
        <div id="work-sec">
        <h2>Project Listing</h2>
        <ProjectView />
        
        <button class="projectButton"><a target="_blank" href="https://hub.ramineqbal.xyz/portfolio/">Project Directory</a></button>
        </div>

        );
    }
}

export default Projects; 




/**
 * 
 */