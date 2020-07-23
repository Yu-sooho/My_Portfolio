import React from 'react';
import '../style/info.css'

export default class Info extends React.Component {

  render() {
  return (
    <div className="InfoScreen">
      <div>
        <img alt="Mypic" src={require('../../image/My_Pic.jpeg')} className="MyPic"/>
      </div>
      <table className="InfoTable">
        <tr className="InfoTr">
          <td className="InfoTd"> <p className="InfoTitle">Name : </p> </td>
          <td className="InfoTd"> <p className="InfoText">유수호</p> </td>
        </tr>
        <tr className="InfoTr">
          <td className="InfoTd"> <p className="InfoTitle">Company : </p> </td>
          <td className="InfoTd"> <p className="InfoText">(주)나이비</p> </td>
        </tr>
        <tr className="InfoTr">
          <td className="InfoTd"> <p className="InfoTitle">Position : </p> </td>
          <td className="InfoTd"> <p className="InfoText">Developer</p> </td>
        </tr>
        <tr className="InfoTr">
          <td className="InfoTd"> <p className="InfoTitle">Phone : </p> </td>
          <td className="InfoTd"> <p className="InfoText">010-3301-2503</p> </td>
        </tr>
        <tr className="InfoTr">
          <td className="InfoTd"> <p className="InfoTitle">Email : </p> </td>
          <td className="InfoTd"> <p className="InfoText">souho456@naver.com</p> </td>
        </tr>
      </table>
      <div>
       
      </div>
    </div>
  );   
}
}