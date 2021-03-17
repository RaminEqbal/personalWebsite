
import '../bootstrap-4.3.1-dist/css/bootstrap.min.css'
import '../css/base.css'
import '../css/projects.css'
import React, { Component } from 'react';

import ProjectIcon from './ProjectIcon.component'
import projectList from '../save/constants'



import { unstable_renderSubtreeIntoContainer } from 'react-dom';

class ProjectView extends React.Component {
    constructor(props){
        super(props);
    }


    render(){
        var projects = [];
        for(var i in projectList){
            projects.push(<ProjectIcon 
                imgsrc={projectList[i].imgsrc} 
                title={projectList[i].title}
                description={projectList[i].descriptionHTML} 
                demo={projectList[i].demoURL} 
                source={projectList[i].srcLink}
                ></ProjectIcon>) ;
        }
        return (
        <div id="project-div">
        {projects}
        </div>

        );
    }
}

export default ProjectView; 