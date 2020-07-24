import React from 'react';
import '../style/home.css'
import Donut from '../icon/Donut'
import Test from '../icon/Test'

export default class Home extends React.Component {

  render() {
  return (
    <div className="HomeScreenBack">
    <div className="HomeScreen">      
      <Donut/>
      <Donut/>
      <Donut/>
      <Donut/>
      <Donut/>
      <Donut/>
      </div>
      <div className="HomeBottomBack"/>
      <div className="HomeBottom">
        <Test/>
        <Test/>
        <Test/>
        <Test/>
      </div>
      <div className="HomeBottomBack"/>
    </div>
  );   
}
}