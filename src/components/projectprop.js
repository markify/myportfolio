import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
class ProjectProp extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="full">

          <div className="sideleft col-md-7">
            <Fade>
            <img  className="imgscale" src={this.props.image}  alt="mark's project snapshot"></img>
            </Fade>
          </div>

          <div className="sideright col-md-5">

            <h1>{this.props.title}</h1>

            <a className="viewp" href={this.props.link} target="_blank" rel="noopener noreferrer"> View Project </a>
            <a className="viewp" href={this.props.gitlink} target="_blank" rel="noopener noreferrer"> Github </a>
          
            <h4 className="viewdesc">Description</h4>
            <Fade duration="2900">
            <p> {this.props.desc}</p>
            </Fade>
            <h4> Tech </h4>
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
