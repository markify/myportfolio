import React, { Component } from 'react'
import './projectprop.css'
import Zoom from 'react-reveal/Zoom'

class ProjectProp extends Component {
  render() {
    return (
      <Zoom>
        <div className="topsect middle-xs">
          <a href={this.props.link} target="_blank" rel="noopener noreferrer">
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
          <div>
            <span>
              <img
                src={this.props.tech}
                style={{
                  padding: '0px',
                  margin: '4px',
                  width: '264px',
                  height: '40px',
                }}
                alt="tech stack icons"
              />
            </span>
          </div>

          <div className="title">
            {this.props.title} <span> {this.props.icons} </span>
          </div>

          <div className="date"> {this.props.date}</div>
          <div className="desc">{this.props.desc}</div>
        </div>
      </Zoom>
    )
  }
}

export default ProjectProp
