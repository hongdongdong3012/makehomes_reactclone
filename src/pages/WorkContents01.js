import React, { Component } from 'react';
import img1 from '../images/main/work/01/contents_01.jpg';
import img2 from '../images/main/work/01/contents_02.jpg';
import img3 from '../images/main/work/01/contents_03.jpg';

class WorkContents01 extends Component {
    render() {
        return (
            <ul>
                <li>
                    <img src={img1} alt="" />
                    <div className="contentsHover">
                        <div className="contentsTxt">
                            <p>사신표월</p>
                            <span>우각</span>
                        </div>
                    </div>
                </li>
                <li>
                    <img src={img2} alt="" />
                    <div className="contentsHover">
                        <div className="contentsTxt">
                            <p>구천구검</p>
                            <span>조진행</span>
                        </div>
                    </div>
                </li>
                <li>
                    <img src={img3} alt="" />
                    <div className="contentsHover">
                        <div className="contentsTxt">
                            <p>무적파천행</p>
                            <span>소그미</span>
                        </div>
                    </div>
                </li>
            </ul>
        );
    }
}

export default WorkContents01;