import React, { Component } from "react";
import "../styles/Main.scss"
import rightArrow from '../images/main/icon_right_arrow.png';

class Main extends Component {
    render() {
        return (
            <main>
                <div className="banner">
                    <div className="container">
                        <div className="bannerTxt">
                            <p>매일매일 보고 싶은</p>
                            <p>작품을 출간합니다.</p>
                        </div>
                    </div>
                </div>
                <ul className="subNav">
                    <li>
                        <a href="/">회사 소개
                            <div className="hoverSubNav">
                                <strong>회사 소개</strong>
                                <span>COMPANY INTRODUCTION</span>
                                <img className="arrow" src={rightArrow} alt="arrow" />
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="/">작품 소개
                            <div className="hoverSubNav">
                                <strong>작품 소개</strong>
                                <span>WORKS INTRODUCTION</span>
                                <img className="arrow" src={rightArrow} alt="arrow" />
                            </div>                        
                        </a>
                    </li>
                    <li>
                        <a href="/">투고 안내
                            <div className="hoverSubNav">
                                <strong>투고 안내</strong>
                                <span>SUBMISSION GUIDE</span>
                                <img className="arrow" src={rightArrow} alt="arrow" />
                            </div>                        
                        </a>
                    </li>
                </ul>
            </main>
        )
    }
}                

export default Main;