import React, { Component } from 'react';
import img1 from '../images/main/work/03/contents_01.jpg';
import img2 from '../images/main/work/03/contents_02.jpg';
import img3 from '../images/main/work/03/contents_03.jpg';

class WorkContents01 extends Component {
    render() {
        return (
            <ul>
                <li>
                    <img src={img1} alt="" />
                    <div className="contentsHover">
                        <div className="contentsTxt">
                            <p>망할 가문을 살려보겠습니다</p>
                            <span>무늬랑</span>
                        </div>
                    </div>
                </li>
                <li>
                    <img src={img2} alt="" />
                    <div className="contentsHover">
                        <div className="contentsTxt">
                            <p>나락의 끝에서도 꽃은 핀다</p>
                            <span>아스테리아, 안다희, 에클레어, 찬현</span>
                        </div>
                    </div>
                </li>
                <li>
                    <img src={img3} alt="" />
                    <div className="contentsHover">
                        <div className="contentsTxt">
                            <p>최강의 유모님</p>
                            <span>고양이성애자</span>
                        </div>
                    </div>
                </li>
            </ul>
        );
    }
}

export default WorkContents01;