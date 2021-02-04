import React, { Component } from 'react';
import logo from '../images/logo.png';
import logoWhite from '../images/logo_w.png';
import instagram from '../images/icon_instagram.svg';
import twitter from '../images/icon_twitter.svg';

class Header extends Component {
    render() {
        return (
            <header>
                <div className="container">
                    <div className="group">
                        <h1 className="logo"><a href="./index.html"><img src={logoWhite} alt="logo" /></a></h1>
                        <ul className="nav">
                            <li><a href="">회사 소개</a></li>
                            <li><a href="">작품 소개</a></li>
                            <li><a href="">투고 안내</a></li>
                        </ul>
                    </div>
                    <ul className="sns">
                        <li><a href=""><img src={instagram} alt="instagram" /></a></li>
                        <li><a href=""><img src={twitter} alt="twiiter" /></a></li>
                    </ul>
                </div>
            </header>                
        );
    }
}

export default Header;