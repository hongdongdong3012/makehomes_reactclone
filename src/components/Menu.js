import React, { Component } from 'react';
import close from '../images/icon_close_w.svg';
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";

class Menu extends Component {
    render() {
        var visibility = "hide";

        if(this.props.menuVisibility) {
            visibility = " show";
        }

        return (
            <>
                <div className={`slideMenu ${visibility}`}
                    onMouseDown={this.props.handleMouseDown}>
                    <img onMouseDown={this.props.handleMouseDown} className="closeBtn" src={close} alt="close button" />
                    <ul>
                        <li><Link to="/company">회사 소개</Link></li>
                        <li><Link to="/work">작품 소개</Link></li>
                        <li><Link to="/submission">투고 안내</Link></li>
                    </ul>
                </div>
                
            </>
        )
    }
}

export default Menu;