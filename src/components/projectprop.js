import React, { Component } from 'react'
import './styles/projectprop.css'
import './styles/project.scss'
import Fade from 'react-reveal/Fade'


class ProjectProp extends Component {
  
  render() {
    return (
      <React.Fragment>
        <div className="full">
          <div className="sideleft col-sm-7">
            <img  className="imgscale" src={this.props.image}  style={{}}></img>
          </div>
          <div className="sideright col-sm-5">
            <h1>{this.props.title}</h1>
            <a className="viewp" href={this.props.link} target="_blank"> View Project </a>
            <a className="viewp" href={this.props.gitlink} target="_blank"> Github </a>

            <h4 className="viewdesc">Description</h4>
           
            <p> {this.props.desc}</p>
            <h4> Tech </h4>
            <p> {this.props.stack}</p>            
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default ProjectProp
