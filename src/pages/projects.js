import React from 'react'
import Layout from '../components/layout'
import '../components/styles/projectprop.css'
import '../components/styles/project.scss'

import ProjectName from '../components/projectname'
import ecohazard from '../images/project/hazardhome.png'

import StackGrid from "react-stack-grid";


const SecondPage = () => (
  <Layout>
    <div className="container">
      <ProjectName></ProjectName>
    </div>
  </Layout>
)

export default SecondPage
