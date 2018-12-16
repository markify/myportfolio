import React, { Component } from 'react'
import './styles/projectprop.css'
import Fade from 'react-reveal/Fade'

class ProjectProp extends Component {
  render() {
    return (
     
        <div className="topsect middle-xs">
         
          <a href={this.props.link} target="_blank" rel="noopener noreferrer">
          <Fade up>
            <div
              className="image"
              style={{
                backgroundImage: `url(${this.props.image})`,
                width: '100%',
                backgroundSize: '100% 100%',
                backgroundRepeat: 'no-repeat',
              }}
            />
             </Fade>
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
            {this.props.title}{' '}
            <a href={this.props.gitlink} style={{ color: 'black' }}>
              <span> {this.props.icons}</span>{' '}
            </a>
          </div>

          <div className="date"> {this.props.date}</div>
          <div className="desc">{this.props.desc}</div>
        </div>
     
    )
  }
}

export default ProjectProp
