import React, { Component } from 'react';
import img1 from '../images/main/work/04/contents_01.jpg';
import img2 from '../images/main/work/04/contents_02.jpg';
import img3 from '../images/main/work/04/contents_03.jpg';

class WorkContents01 extends Component {
    render() {
        return (
            <ul>
                <li>
                    <img src={img1} alt="" />
                    <div className="contentsHover">
                        <div className="contentsTxt">
                            <p>밥만 잘 사주는 이상한 이사님</p>
                            <span>퇴사</span>
                        </div>
                    </div>
                </li>
                <li>
                    <img src={img2} alt="" />
                    <div className="contentsHover">
                        <div className="contentsTxt">
                            <p>무명 아이돌에서 인기 아이돌이 되었다.</p>
                            <span>오리세마리</span>
                        </div>
                    </div>
                </li>
                <li>
                    <img src={img3} alt="" />
                    <div className="contentsHover">
                        <div className="contentsTxt">
                            <p>관통당하다</p>
                            <span>규람</span>
                        </div>
                    </div>
                </li>
            </ul>
        );
    }
}

export default WorkContents01;