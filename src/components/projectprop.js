import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
class ProjectProp extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="full">
          <div className="sideleft col-md-7">
            <img  className="imgscale" src={this.props.image}  alt="mark's project snapshot"></img>
          </div>
          <div className="sideright col-md-5">
            <Fade duration="1900">
            <h1>{this.props.title}</h1>
            <a className="viewp" href={this.props.link} target="_blank" rel="noopener noreferrer"> View Project </a>
            <a className="viewp" href={this.props.gitlink} target="_blank" rel="noopener noreferrer"> Github </a> 
            <h4 className="viewdesc">Description</h4>
            <p> {this.props.desc}</p>    
            <h4> Tech </h4>
            </Fade>
            <Fade up duration="800">
            <p> {this.props.stack}</p> 
            </Fade>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default ProjectProp
