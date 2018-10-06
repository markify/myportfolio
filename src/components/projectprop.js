import React, { Component } from 'react'
import { FaGithub, FaNewspaper } from 'react-icons/fa'
import './projectprop.css'
class ProjectProp extends Component {
  render() {
    return (
      <div className="topsect middle-xs">
        <a href={this.props.link} target="_blank">
          <div
            className="image"
            style={{
              backgroundImage: `url(${this.props.image})`,
              width: '100%',
              backgroundSize: '100% 100%',
              backgroundRepeat: 'no-repeat',
            }}
          />
        </a>
        <div className="title">{this.props.title}</div>
        <FaGithub />
        <div className="date"> {this.props.date}</div>
        <div className="desc">{this.props.desc}</div>
      </div>
    )
  }
}

export default ProjectProp
