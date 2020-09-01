import React from 'react';
import { Switch,Route } from 'react-router-dom';

import LandingPage from './PFlandingpage';
import AboutMe from './PFaboutme';
import Contact from './PFcontact';
import Projects from './PFprojects';
import Resume from './PFresume';


const Main = () => (
    <Switch>
        <Route exact path="/myportfolio" component={LandingPage} />
        <Route exact path="/aboutme" component={AboutMe} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/resume" component={Resume} />
    </Switch>
)

export default Main;        
