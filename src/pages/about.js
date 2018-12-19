import React from 'react'
import Layout from '../components/layout'
import Fade from 'react-reveal/Fade'

const SecondPage = () => (
  <Layout>
    <div  className="container" style={{ padding: '20px', }}>
      
      <h1 className="section-title">About Mark</h1>
      <Fade up>
      <p>
        {' '}
        <span className="greenfont">
          <strong>
            {' '}
            Hello There!{' '}
            <span role="img" aria-label="smiley">
              😃
            </span>
          </strong>
        </span>
      </p>
      <div className="col-md-6 bio-ct">
      <p className="bio">
        I'm a front end and mobile developer.
        I started my journey as self-taught game developer then transitioned into web and mobile.
        Ever since then I found passion in web and mobile technologies. In my free time, I spend hours honing my skills
        to become a better software engineer. Building new projects and challenging myself to perfect my craft.
      </p>
      <p className="bio">
        I graduated with a bachelor's in computer science at SFSU in 2018, and for the past 4+ years, I've been developing my skills in this field.
        I am constantly learning and improving my skills with the modern technologies that keep evolving every year.
      </p>
      </div>
      </Fade>
      <div className="col-md-6">
        <img src="https://images.pexels.com/photos/6732/city-cars-traffic-lights.jpg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="logo"></img>
      </div>
    </div>
  </Layout>
)

export default SecondPage
