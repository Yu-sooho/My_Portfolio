import React from 'react';
import '../style/detail.css'

export default class Detail extends React.Component {

  render() {
  return (
    <div className="DetailScreen">
      <div>
        <table className="DetailTable">
            <tr className="DetailTr"><td colSpan="2" className="DetailTd"> <p className="DetailTitle">Career</p> </td></tr>
            <tr className="DetailTr">
                <td className="DetailTd"> <p className="DetailText">2012년 홍익대학교 세종캠퍼스 정보통신공학과 입학</p> </td>
            </tr>
            <tr className="DetailTr">
                <td className="DetailTd"> <p className="DetailText">2017년 '넘띠띠' 구글 플레이 스토어 출시</p> </td>
            </tr>
            <tr className="DetailTr">
                <td className="DetailTd"> <p className="DetailText">2017년 '병아리 지키기' 구글 플레이 스토어 출시</p> </td>
            </tr>
            <tr className="DetailTr">
                <td className="DetailTd"> <p className="DetailText">2018년 LH 주관 기술혁신형 지원사업 선정</p> </td>
            </tr>
            <tr className="DetailTr">
                <td className="DetailTd"> <p className="DetailText">2018년 세종창조경제혁신터 주관 청년창업챌린지랩 선정</p> </td>
            </tr>
            <tr className="DetailTr">
                <td className="DetailTd"> <p className="DetailText">2018년 '킥앤고' 설립</p> </td>
            </tr>
            <tr className="DetailTr">
                <td className="DetailTd"> <p className="DetailText">2019년 전동 킥보드 공유 어플리케이션 'Donut' 개발 및 출시</p> </td>
            </tr>
            <tr className="DetailTr">
                <td className="DetailTd"> <p className="DetailText">2019년 쇼핑몰 사이트 Amika의 포인트 적립 어플리케이션 개발</p> </td>
            </tr>
            <tr className="DetailTr">
                <td className="DetailTd"> <p className="DetailText">2019년 쇼핑몰 사이트 Amika의 코디북 어플리케이션 개발</p> </td>
            </tr>
        </table>
      </div>
    </div>
  );   
}
}