import React, { Component } from 'react';
import img1 from '../images/main/work/05/contents_01.jpg';
import img2 from '../images/main/work/05/contents_02.jpg';
import img3 from '../images/main/work/05/contents_03.jpg';

class WorkContents01 extends Component {
    render() {
        return (
            <ul>
                <li>
                    <img src={img1} alt="" />
                    <div className="contentsHover">
                        <div className="contentsTxt">
                            <p>풍혼(미스터블루 제작 동명 웹툰의 원작 제공)</p>
                            <span>서현진, 월인</span>
                        </div>
                    </div>
                </li>
                <li>
                    <img src={img2} alt="" />
                    <div className="contentsHover">
                        <div className="contentsTxt">
                            <p>천하제일살수</p>
                            <span>손영완, 위상</span>
                        </div>
                    </div>
                </li>
                <li>
                    <img src={img3} alt="" />
                    <div className="contentsHover">
                        <div className="contentsTxt">
                            <p>궁귀검신</p>
                            <span>박광진, 조돈형</span>
                        </div>
                    </div>
                </li>
            </ul>
        );
    }
}

export default WorkContents01;