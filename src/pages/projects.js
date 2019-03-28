import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby'
import SEO from '../components/SEO'

const Projects = () =>  (
    <Layout>
        <SEO pageTitle="Projects" 
        description="Desenvolvedor Front-end/fullstack | portifolio"
    keywords="React, Node, Frontend, dev, react native, JS, HTML, CSS, SASS"/>
        <h1>Projects</h1>
        <hr />
        <p> alguns projetos ta ls</p>
        <p><Link to="/">voltar</Link></p>
    </Layout>
)
    
export default Projects