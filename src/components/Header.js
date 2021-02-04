import React, { Component } from 'react';
import logo from '../images/logo.png';
import logoWhite from '../images/logo_w.png';
import instagram from '../images/icon_instagram.svg';
import twitter from '../images/icon_twitter.svg';
import Home from '../pages/Main';
import Company from '../pages/Company';
import Work from '../pages/Work';
import Submission from '../pages/Submission';
import NotFound from '../pages/NotFound'

import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <Router>
                <header>
                    <div className="container">
                        <div className="group">
                            <h1 className="logo"><Link exact to="/"><img src={logoWhite} alt="logo" /></Link></h1>
                            <ul className="nav">
                                <li><Link to="/company">회사 소개</Link></li>
                                <li><Link to="/work">작품 소개</Link></li>
                                <li><Link to="/submission">투고 안내</Link></li>
                            </ul>
                        </div>
                        <ul className="sns">
                            <li><a href=""><img src={instagram} alt="instagram" /></a></li>
                            <li><a href=""><img src={twitter} alt="twiiter" /></a></li>
                        </ul>
                    </div>
                </header> 
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/company" component={Company} />
                    <Route path="/work" component={Work} />
                    <Route path="/submission" component={Submission} />
                    <Route component={NotFound} />
                  </Switch>
            </Router>        
        );
    }
}

export default Header;