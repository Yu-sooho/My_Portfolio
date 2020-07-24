import React from 'react';
import Home from '../../1_Home/script/Home';
import Info from '../../2_Info/script/Info';
import Detail from '../../2_Info/script/Detail';
import '../style/hold.css';
import '../style/main.css';

import { observer, inject } from "mobx-react";

import jQuery from "jquery";
window.$ = window.jQuery = jQuery;

// window.$(function(){
//   window.$('.HomeBackground').click(function(){
//     window.$('.InfoScreen').css('animation','InfoFade-out 0.4s ease');
//     window.$('.DetailScreen').css('animation','DetailFade-out 0.4s ease');
//   });
// })

// window.$(function(){
//   window.$('.HomeIcon').click(function(){
//     window.$('.InfoScreen').css('animation','Move-out 0.4s ease');
//     window.$('.DetailScreen').css('animation','DetailFade-out 0.4s ease');
//   });
// })

@inject("yourstore")
@observer
export default class Main extends React.Component {
  constructor(props) {
    super(props)
  }

  onSystem = () => {
    this.props.yourstore.boot = true;
    this.props.yourstore.info = true;
  };

  offSystem = () =>{
    this.props.yourstore.hold = true;
    this.props.yourstore.boot = false;
    this.props.yourstore.quit = false;
    this.props.yourstore.info = false;
  };


  onClickQuit=()=>{
    this.props.yourstore.quit = true;
    window.$('.InfoScreen').css('animation','InfoFade-out 0.4s ease');
    window.$('.DetailScreen').css('animation','DetailFade-out 0.4s ease');
  }

  render() {
//this.props.yourstore.
  return (
    <div className="Main">

      <header className="Main-header">

      {!this.props.yourstore.hold &&
        <div className="ShadowSet"/>
      }

      {this.props.yourstore.hold && !this.props.yourstore.boot &&
        <div className="HoldBack"/>
      }

      {!this.props.yourstore.hold && !this.props.yourstore.boot &&
        <div onAnimationEnd={this.onSystem}  className="HoldBackOpen"/>
      }

      {this.props.yourstore.quit &&
        <div onAnimationEnd={this.offSystem}  className="HoldBackClose"/>
      }

      <div id="div_test" onClick={()=>{this.onClickQuit();}} className="HomeBackground">
        <img alt="HomeBackimage" src={require('../../image/Iphone.png')} className="HomeImage"/>
      </div>

      <Home/>

      {!this.props.yourstore.hold && !this.props.yourstore.boot &&
        <div onAnimationEnd={this.onSystem}  className="HoldAnimOpen"/>
      }

      {this.props.yourstore.quit &&
        <div onAnimationEnd={this.offSystem}  className="HoldAnimClose"/>
      }

      {this.props.yourstore.hold && !this.props.yourstore.boot &&
        <div onClick={()=>{this.props.yourstore.hold = false}} className="HoldScreen"/>
      }


      <div className="Threediv">
      {this.props.yourstore.info &&
        <Info id="Info"/>
      }

      </div>

      <div className="Threediv">
      <img src={require('../../image/Background_img.png')} className="Main-logo" alt="logo" />
      </div>

      <div className="Threediv">
      </div>
      
  
      
      </header>
    </div>
  );   
}
}


// {this.props.yourstore.info &&
//   <Detail id="Detail"/>
// }