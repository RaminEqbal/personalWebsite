
import '../bootstrap-4.3.1-dist/css/bootstrap.min.css'
import '../css/projects.css'
import '../css/base.css'
import React, { Component } from 'react';



import { unstable_renderSubtreeIntoContainer } from 'react-dom';

class ProjectIcon extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            detailed: false
        }
        this.toggleDetailed = this.toggleDetailed.bind(this);
        this.showDetailed = this.showDetailed.bind(this);
    }
  

    toggleDetailed() {
        this.setState((state) => ({
            detailed: !state.detailed
          }));
    }

    showDetailed() {
        this.toggleDetailed();
        if(this.state.detailed){

        }
    }


    render(){

        return (
        <div onClick={this.showDetailed} className="project-view">
        <img className="project-image" src={this.props.imgsrc}></img><br />
        <span className="project-title">{this.props.title}</span>
        {this.state.detailed && this.props.description}
        <div style={{marginBottom:"20px"}}>
        {this.state.detailed && <a target="_blank" style={{marginRight:"2vw"}} href={this.props.demo}>Demo</a>}
        {this.state.detailed && <a target="_blank" href={this.props.source}>Source</a>}
        </div>
        </div>

        );
    }
}

export default ProjectIcon; 




/**
 * 
 */