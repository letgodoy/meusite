import React from 'react';
import { Link } from 'gatsby'
import SEO from '../components/SEO'

import Layout from '../components/Layout';

const Home = () => (
  <Layout>
    <SEO 
    description="Desenvolvedor Front-end/fullstack"
    keywords="React, Node, Frontend, dev, react native, JS, HTML, CSS, SASS"/>
    <h1>Leticia Godoy</h1>
    <h3>Front-end/Full</h3>
    <section>
      <h5>ola!</h5>
      <p>Welcome to your new Gatsby site.</p>
    <p>veja os <Link to="/projects">projetos</Link></p>
    </section>
    
  </Layout>
);

export default Home;
