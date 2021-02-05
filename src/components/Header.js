import React, { Component } from 'react';
//import logo from '../images/logo.png';
import menu from '../images/icon_menu.svg';
import close from '../images/icon_close_w.svg';
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
    constructor(props) {
        super(props)

        this.state = {
            num : 0,
        }
    }

    changeClass(idx) {
        this.setState({num : idx})
    }

    render() {
        return (
            <Router>
                <header>
                    <div className="container">
                        <div className="group">
                            <h1 className="logo"><Link exact to="/" onClick={() => this.changeClass(0)}><img src={logoWhite} alt="logo" /></Link></h1>
                            <ul className="nav pc">
                                <li><Link to="/company" className={`${this.state.num === 1 ? 'active' : ''}`} onClick={() => this.changeClass(1)}>회사 소개</Link></li>
                                <li><Link to="/work" className={`${this.state.num === 2 ? 'active' : ''}`} onClick={() => this.changeClass(2)}>작품 소개</Link></li>
                                <li><Link to="/submission" className={`${this.state.num === 3 ? 'active' : ''}`} onClick={() => this.changeClass(3)}>투고 안내</Link></li>
                            </ul>
                        </div>
                        <ul className="sns pc">
                            <li><a href="/"><img src={instagram} alt="instagram" /></a></li>
                            <li><a href="/"><img src={twitter} alt="twiiter" /></a></li>
                        </ul>
                        <div className="menu">
                            <img src={menu} alt="메뉴" />
                            <div className="slideMenu">
                                <img className="closeBtn" src={close} alt="close button" />
                                <ul>
                                    <li><a href="/">회사 소개</a></li>
                                    <li><a href="/">작품 소개</a></li>
                                    <li><a href="/">투고 안내</a></li>
                                </ul>
                            </div>
                        </div>
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