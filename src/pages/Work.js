import React, { Component } from 'react';
import Contents1 from './WorkContents01';
import Contents2 from './WorkContents02';
import Contents3 from './WorkContents03';
import Contents4 from './WorkContents04';
import Contents5 from './WorkContents05';

const menuList = {
    0 : <Contents1 />,
    1 : <Contents2 />,
    2 : <Contents3 />,
    3 : <Contents4 />,
    4 : <Contents5 />
}

class Work extends Component {
    constructor (props) {
        super(props);

        this.state = {
            menu : 0,
        }

    }

    changeManu = (idx) => {
        this.setState({menu : idx});
    }
    
    render() {
        return (
            <main className="workWrap">
                <div className="subBanner sub_banner_company">
                    <h3>작품 소개</h3>
                </div>
                <div className="container">
                    <ul className="workNav">
                        <li className={`${this.state.menu === 0 ? 'active' : ''}`} onClick={() => this.changeManu(0)} >무협</li>    
                        <li className={`${this.state.menu === 1 ? 'active' : ''}`} onClick={() => this.changeManu(1)}>판타지</li>    
                        <li className={`${this.state.menu === 2 ? 'active' : ''}`} onClick={() => this.changeManu(2)}>로맨스/로판</li>    
                        <li className={`${this.state.menu === 3 ? 'active' : ''}`} onClick={() => this.changeManu(3)}>BL/GL</li>    
                        <li className={`${this.state.menu === 4 ? 'active' : ''}`} onClick={() => this.changeManu(4)}>웹툰</li>
                    </ul>
                    <div className="workContents">
                        {menuList[this.state.menu]}
                    </div>
                </div>
            </main>
        );
    }
}

export default Work;