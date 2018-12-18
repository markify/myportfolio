import React, { Component } from 'react'
import './styles/scroll.scss'

export class Scroll extends React.Component {
  render() {

    return (
        <React.Fragment>
          <div className="outer">
            <div className="skillz">
              <div class="tech-grid">
                <span>HTML5</span>
                <span>Responsive CSS3</span>
                <span>JavaScript and ES6</span>
                <span>git</span>
                <span>React</span>
                <span>Sass</span>
                <span >Redux</span>
                <span>jQuery</span>
                <span>MySQL</span>
                <span>Responsive Design</span>
                <span>Prototype to production</span>
                <span>Problem Solver</span>
                <span>Attention to detail</span>
              </div>
            </div>  
          </div>
        </React.Fragment>
    );
  }
}
export default Scroll