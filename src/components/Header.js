import React, { Component } from 'react';
import Home from '../pages/Main';
import Company from '../pages/Company';
import Work from '../pages/Work';
import Submission from '../pages/Submission';
import NotFound from '../pages/NotFound';
import Menu from './Menu';

//import logo from '../images/logo.png';
import menu from '../images/icon_menu.svg';
import logoWhite from '../images/logo_w.png';
import instagram from '../images/icon_instagram.svg';
import twitter from '../images/icon_twitter.svg';

import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";

class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            num : 0,
            visible: false
        }

        this.toggleMenu = this.toggleMenu.bind(this)
        this.handleMouseDown = this.handleMouseDown.bind(this)
    }

    changeClass(idx) {
        this.setState({num : idx})
    }

    toggleMenu() {
        this.setState({
            visible : !this.state.visible
        })
    }
    handleMouseDown(e) {
        this.toggleMenu();
        console.log('clicked');
        e.stopPropagation()
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
                        <div className="mobile menu">
                            <img onMouseDown={this.handleMouseDown} src={menu} alt="메뉴" />
                            <Menu handleMouseDown={this.handleMouseDown}
                                menuVisibility={this.state.visible}/>
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