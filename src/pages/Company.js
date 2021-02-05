import React, { Component } from 'react';
import "../styles/Main.scss"
import glassBook from "../images/main/company/company_img01.png"
import seagull from "../images/main/company/company_img02.png"
import pen from "../images/main/company/company_img03.png"
import trophy from "../images/main/company/company_img04.png"

class Company extends Component {
    render() {
        return (
            <main className="companyWrap">
                <div className="subBanner sub_banner_company">
                    <h3>회사소개</h3>
                </div>
                <section>
                   <container>
                        <div className="companyIntro">
                            <div className="row row1">
                                <div className="left">
                                    <img src={glassBook} alt="book" />
                                </div>
                                <div className="right">
                                    <div>
                                        <p>일상에 스며드는</p>
                                        <p>작품을 만드는 회사,</p>
                                        <p><strong>데일리북스</strong></p>
                                    </div>
                                    <div>
                                        <span>저희 데일리북스는 스낵 컬처(Snack Culture),</span>
                                        <span>즉 짧은 시간 동안 간편하게 즐길 수 있는 </span>
                                        <span>문화 콘텐츠인 ‘웹소설 및 웹툰’을 출간하는 회사입니다.</span>
                                    </div>

                                </div>
                            </div>
                            <div className="row row2">
                                <p>83분 작가의 246작품 보유</p>
                                <img src={seagull} alt="" />
                                <h5>웹소설과 웹툰은 언제 어디서든 볼 수 있습니다.</h5>
                                <div className="txt">
                                    <p>출퇴근길, 등하교길, 휴식시간 등 스마트폰만 들면 즐길 수 있는 </p>
                                    <p>웹소설과 웹툰은 많은 사람들의 일상에 녹아들고 있습니다.</p>
                                </div>
                                <div className="txt">
                                    <p>데일리북스는 이름 그대로 독자님들의 일상에 스며들 작품을 출간하는 것을 목표로 합니다.</p>
                                    <p>누구나 쉽게 접할 수 있도록, 또 저희 작품을 접하신 독자님들이 일상처럼 다시 찾아주는 작품을 출간하는 </p>
                                </div>
                                <p>저희는 <strong>‘데일리북스’</strong> 입니다.</p>
                            </div>
                        </div>
                        <div className="companyHistory">
                            <div className="col col1">
                                <div className="left">
                                    <img src={pen} alt="pen" />
                                </div>
                                <div className="right">
                                    <h5>연혁</h5>
                                    <ul>
                                        <li>2011. 게임판타지 소설 테라(김정률) 스포츠서울 연재</li>
                                        <li>2011. 게임판타지 아틀란티카(조진행) 스포츠서울 연재</li>
                                        <li>2012. 3. 장르소설 전문 출판사 데일리북스 독립</li>
                                        <li>2013. 9. 검이여, 노래하라(홍정훈) 네이버웹소설 요일 연재</li>
                                        <li>2013. 9. 낙향문사전(최현우) 네이버웹소설 요일 연재</li>
                                        <li>2014. 4. 질풍광룡(조진행) 카카오웹소설 연재</li>
                                        <li>2014. 7. 풍혼(월인) 카카오페이지 기다리면무료 연재</li>
                                        <li>2014. 11. 북검전기(우각) 카카오페이지 기다리면무료 연재</li>
                                        <li>2016. 4. 다운로더(위상) 카카오페이지 기다리면무료 연재</li>
                                        <li>2016. 7. 잭팟을 터트리다(미세스한) 카카오페이지 기다리면무료 연재</li>
                                        <li>2016. 8. 화산권마(우각) 카카오페이지 기다리면무료 연재</li>
                                        <li>2016. 10. 뻔, 뻔한 속셈(이새인) 카카오페이지 기다리면무료 연재</li>
                                        <li>2016. 11. 체인지 허즈번드(미세스한) 카카오페이지 기다리면무료 연재</li>
                                        <li>2016. 11. 위험한 프로포즈(데스띠나) 카카오페이지 기다리면무료 연재</li>
                                        <li>2018. 7. 구천구검(조진행) 카카오페이지 기다리면무료 연재</li>
                                        <li>2018. 9. 무인이곽(우각) 카카오페이지 기다리면무료 연재</li>
                                        <li>2019. 9. 학사검전 리마스터(최현우) 카카오페이지 기다리면무료 연재</li>
                                        <li>2020. 8. 질풍광룡 웹툰(불나비, 조진행) 카카오페이지 기다리면무료 연재</li>
                                        <li>2020. 9. 궁귀검신 웹툰(박광진, 조돈형) 카카오페이지 기다리면무료 연재</li>
                                        <li>2020. 9. 사신표월(우각) 카카오페이지 기다리면무료 연재</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col col2">
                                <div className="left">
                                    <img src={trophy} alt="trophy" />
                                </div>
                                <div className="right">
                                    <h5>성과</h5>
                                    <ul>
                                        <li>국내 최초 게임판타지 소설 출간: 테라, 아르고, 발리언트, 메탈리퍼, 퀸스 블레이드, 드라고나, 레이븐 등</li>
                                        <li>대여점용 장르소설 출간: 고검환정록(직하인), 천애비검(설봉) 등</li>
                                        <li>검이여, 노래하라(홍정훈)네이버 웹소설 판타지 부문 1위</li>
                                        <li>낙향문사전(최현우) 네이버 웹소설 남성향 부문 1위</li>
                                        <li>북검전기(우각) 카카오페이지 무협 부문 1위</li>
                                        <li>잭팟을 터트리다(미세스한) 카카오페이지 로맨스 부문 1위</li>
                                        <li>화산권마(우각) 카카오페이지 무협 부문 1위</li>
                                        <li>뻔, 뻔한 속셈(이새인) 카카오페이지 로맨스 부문 1위</li>
                                        <li>체인지 허즈번드(미세스한) 카카오페이지 로맨스 부문 1위</li>
                                        <li>위험한 프로포즈(데스띠나) 카카오페이지 로맨스 부문 1위</li>
                                        <li>구천구검(조진행) 카카오페이지 무협 부문 1위 및 밀리언 달성</li>
                                        <li>무인이곽(우각) 카카오페이지 무협 부문 1위</li>
                                        <li>사신표월(우각) 카카오페이지 무협 부문 1위</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="companyResolution">
                            <div className="col">
                                <div className="left">
                                    <p>일대일 맞춤형 출간을</p>
                                    <p>지향합니다.</p>
                                </div>
                                <div className="right">
                                    <p>사람마다 지닌 지문이 다르듯이, 작가님들 또한 개개인이 지닌 고유한 작품의 특성이 있습니다.</p>
                                    <p>데일리북스는 작가님과 작품의 특성에 맞는 플랫폼을 선별, 출간을 제안합니다.</p>
                                    <p>또한 작가님이 지향하시는 바를 최우선으로 생각합니다. </p>
                                </div>
                            </div>
                            <div className="col">
                                <div className="left">
                                    <p>어디에서든 읽을 수 있습니다.</p>
                                </div>
                                <div className="right">
                                    <p>웹소설, 웹툰의 독자님들이 늘어나면서, 출간 플랫폼 또한 많아지고 있습니다. </p>
                                    <p>데일리북스는 카카오페이지, 리디북스, 네이버 외 10여 곳의 플랫폼에 작품을 유통합니다.</p>
                                    <p>어느 플랫폼에서든 데일리북스의 작품을 만나 보세요.</p>
                                </div>
                            </div>
                        </div>
                   </container>
                </section>
            </main>
        );
    }
}

export default Company;