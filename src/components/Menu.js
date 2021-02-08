import React, { Component } from 'react';
import close from '../images/icon_close_w.svg';

class Menu extends Component {

    render() {
        var visibility = "hide";

        if(this.props.menuVisibility) {
            visibility = " show";
        }

        return (
            <div className={`slideMenu ${visibility}`}
                onMouseDown={this.props.handleMouseDown}>
                <img onMouseDown={this.props.handleMouseDown} className="closeBtn" src={close} alt="close button" />
                <ul>
                    <li><a href="/">회사 소개</a></li>
                    <li><a href="/">작품 소개</a></li>
                    <li><a href="/">투고 안내</a></li>
                </ul>
            </div>
        )
    }
}

export default Menu;