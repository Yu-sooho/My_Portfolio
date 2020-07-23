import React from 'react';
import '../style/home.css'

export default class Donut extends React.Component {

  Click=()=>{
    
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