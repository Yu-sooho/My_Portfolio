import React from 'react';
import '../style/home.css'
import { observer, inject } from "mobx-react";

@inject("yourstore")
@observer
export default class Donut extends React.Component {

  Click=()=>{
    setTimeout(() => {this.props.yourstore.info = false;}, 400)
    window.$('.InfoScreen').css('animation','Move-out 0.4s ease');
    window.$('.DetailScreen').css('animation','DetailMove-out 0.4s ease');
  }

  render() {
  return (
      <span className="HomeIcon" onClick={()=>{this.Click()}}>
        <img alt="HomeImage" src={require('../../image/Donut_icon.png')} className="IconSize"/>
        <p className="IconText"> Donut </p>
      </span>
  );   
}
}