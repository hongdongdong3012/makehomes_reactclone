import React, { Component } from "react";
import "../styles/Main.css"

class Main extends Component {
    render() {
        return (
            <main>
                <div className="banner">
                    <div className="container">
                        <div className="bannerTxt">
                        </div>
                    </div>
                </div>
                <ul className="subNav">
                    <li>
                        <a href="/">회사 소개</a>
                    </li>
                    <li>
                        <a href="/">작품 소개</a>
                    </li>
                    <li>
                        <a href="/">투고 안내</a>
                    </li>
                </ul>
            </main>
        )
    }
}

export default Main;