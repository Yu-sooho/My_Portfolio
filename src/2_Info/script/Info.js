import React from 'react';
import '../style/info.css'

export default class Info extends React.Component {

  render() {
  return (
    <div className="InfoScreen">

      <div className="InfoPic">
        <img alt="Mypic" src={require('../../image/My_Pic.jpeg')} className="MyPic"/>
      </div>
   
      <div className="InfoTable">

        <div className="InfoCard1">
          <pre className="InfoTitleKr">유수호
          <pre className="InfoTitleEn">Sooho</pre>
          </pre>
        </div>

        <hr className="Infohr"/>

        <div className="InfoCard2">
          <p className="InfoTextB">Developer</p>
          <p className="InfoTextT">+82 10 3301 2503</p>
          <p className="InfoTextT">souho456@naver.com</p>
        </div>

      </div>

    </div>
  );   
}
}

// <table className="InfoTable">
// <tr className="InfoTr">
//   <td className="InfoTd"> <p className="InfoText">유수호</p> </td>
// </tr>
// <tr className="InfoTr">
//   <td className="InfoTd"> <p className="InfoText">Sooho</p> </td>
// </tr>
// <tr className="InfoTr">
//   <td className="InfoTd"> <p className="InfoText">(주)나이비</p> </td>
// </tr>
// <tr className="InfoTr">
//   <td className="InfoTd"> <p className="InfoText">Developer</p> </td>
// </tr>
// <tr className="InfoTr">
//   <td className="InfoTd"> <p className="InfoText">010-3301-2503</p> </td>
// </tr>
// <tr className="InfoTr">
//   <td className="InfoTd"> <p className="InfoText">souho456@naver.com</p> </td>
// </tr>
// </table>