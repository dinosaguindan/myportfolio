import React, { Component } from 'react'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {Layout,Header,Navigation,Drawer,Content} from 'react-mdl'
import Main from './components/PFmain'
import { Link} from 'react-router-dom';
import Landing  from './components/PFlandingpage';
// import Header from "./components/layouts/Header"
// import Navbar from "./components/layouts/Navbar"
// import Footer from "./components/layouts/Footer"
// import Landing from "./components/landingpage"

function App() {
    return (
      <div className="demo-big-content">
          <Layout>
              <Header className="header-color" title={<Link style={{color: 'white',textDecoration: 'none'}} to="/">My Portfolio</Link>} scroll>
                  <Navigation>
                      <Link to="/resume">Resume</Link>
                      <Link to="/aboutme">About Me</Link>
                      <Link to="/projects">Projects</Link>
                      <Link to="/contact">Contact</Link>
                  </Navigation>
              </Header>
              {/* <Drawer title="Title">
                  <Navigation>
                      <Link to="/resume">Resume</Link>
                      <Link to="/aboutme">About Me</Link>
                      <Link to="/projects">Projects</Link>
                      <Link to="/contact">Contact</Link>
                  </Navigation>
              </Drawer> */}
              <Content>
                  <div className="page-content" />
                  <Main />
              </Content>
          </Layout>
      </div>  
      
    );
}


export default App;
