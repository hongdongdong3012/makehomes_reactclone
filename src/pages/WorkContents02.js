import React, { Component } from 'react';
import img1 from '../images/main/work/02/contents_01.jpg';
import img2 from '../images/main/work/02/contents_02.jpg';
import img3 from '../images/main/work/02/contents_03.jpg';

class WorkContents01 extends Component {
    render() {
        return (
            <ul>
                <li>
                    <img src={img1} alt="" />
                    <div className="contentsHover">
                        <div className="contentsTxt">
                            <p>용사 823번, 귀환했습니다</p>
                            <span>이상혁</span>
                        </div>
                    </div>
                </li>
                <li>
                    <img src={img2} alt="" />
                    <div className="contentsHover">
                        <div className="contentsTxt">
                            <p>용사님을 보내드립니다.</p>
                            <span>박천웅</span>
                        </div>
                    </div>
                </li>
                <li>
                    <img src={img3} alt="" />
                    <div className="contentsHover">
                        <div className="contentsTxt">
                            <p>엑스트라인 내가 이 세계의 구원자</p>
                            <span>코노트</span>
                        </div>
                    </div>
                </li>
            </ul>
        );
    }
}

export default WorkContents01;