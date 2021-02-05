import React, { Component } from 'react';
import books from '../images/main/submission/submission_img01.png'
import icon01 from '../images/main/submission/submission_img02.png'
import icon02 from '../images/main/submission/submission_img03.png'
import icon03 from '../images/main/submission/submission_img04.png'

class Submission extends Component {
    render() {
        return (
            <main className="submissionWrap">
                <div className="subBanner sub_banner_submission">
                    <h3>투고 안내</h3>
                </div>
                <section>
                    <div className="container">
                        <div className="booksInfo">
                            <img src={books} alt="book illust" />
                            <h3>데일리북스 투고안내</h3>
                            <h5>데일리북스는 판타지, 무협, 로맨스 등의 장르소설 작품을 투고 받습니다.</h5>
                            <p>평소 장르소설에 관심은 많았으니 시도해보지 못하셨던 분들, 내 작품을 널리 알렸으면 하시는 분들은 저희 데일리 북스에 언제든 투고해주시길 바랍니다.</p>
                            <p>많은 관심 부탁드립니다.</p>
                            <ul className="boosWay">
                                <li className="leftCont">
                                    <h4>제출 서류</h4>
                                    <div className="group">
                                        <div className="col">
                                            <div className="left">
                                                <img src={icon01} alt="아이콘"/>
                                            </div>
                                            <div className="right">
                                                <h5>투고양식서</h5>
                                                <p>(홈페이지의 양식서를 다운받아 작성해주세요.)</p>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="left">
                                                <img src={icon02} alt="아이콘"/>
                                            </div>
                                            <div className="right">
                                                <h5>원고</h5>
                                                <p>(공백 포함 10만자 이상 / 별도첨부)</p>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="left">
                                                <img src={icon03} alt="아이콘"/>
                                            </div>
                                            <div className="right">
                                                <h5>시놉시스</h5>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="rightCont">
                                    <h4>접수 방법</h4>
                                    <div className="group">
                                        <div className="txt">
                                            <h5>dbooks_edit@naver.com</h5>
                                            <p>※위 이메일 주소로 발송 부탁드립니다.※</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div className="importTxt">
                                <p>※투고 양식 파일명과 메일 제목은 ‘분야_작가명_작품명’ 순으로 표기하여 주시기 바랍니다. </p>
                                <p>(분야 예시: 판타지, 무협, 로맨스, 로판, BL 등)※</p>
                                <button type="button">양식서 다운로드</button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

        );
    }
}

export default Submission;