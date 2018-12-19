import React from 'react'
import Layout from '../components/layout'
import ProjectName from '../components/projectname'
import { FaGithub } from 'react-icons/fa'

const FirstPage = () => (
  <Layout>
    <div className="container"> 
      <ProjectName></ProjectName>
    </div>
    <div className="other-projects">
      <h6 className="other-desc"> Other projects can be found at github <a href="https://github.com/markify" target="_blank" rel="noopener noreferrer">
      <FaGithub/></a>
      </h6>
      
    </div>
  </Layout>
)

export default FirstPage
