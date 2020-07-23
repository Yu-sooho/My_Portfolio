import React from 'react';
import '../style/home.css'
import Donut from '../icon/Donut'

export default class Home extends React.Component {

  render() {
  return (
    <div className="HomeScreen">      
      <Donut/>
      <Donut/>
      <Donut/>
      <Donut/>
      <Donut/>
      <Donut/>
    </div>
  );   
}
}