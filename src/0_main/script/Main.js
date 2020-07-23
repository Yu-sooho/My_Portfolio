import React from 'react';
import Home from '../../1_Home/script/Home';
import Info from '../../2_Info/script/Info';
import Detail from '../../2_Info/script/Detail';
import '../style/hold.css';
import '../style/main.css';

import jQuery from "jquery";
window.$ = window.jQuery = jQuery;

window.$(function(){
  window.$('.HomeBackground').click(function(){
    window.$('.InfoScreen').css('animation','InfoFade-out 0.4s ease');
    window.$('.DetailScreen').css('animation','DetailFade-out 0.4s ease');
  });
})

window.$(function(){
  window.$('.HomeIcon').click(function(){
    window.$('.InfoScreen').css('animation','Move-out 0.4s ease');
    window.$('.DetailScreen').css('animation','DetailFade-out 0.4s ease');
  });
})

export default class Main extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hold:true,
      boot:false,
      quit:false,
      info:false
    }

  }

  onSystem = () => {
    this.setState({
      boot:true,
      info:true
    })
  };

  offSystem = () =>{
    this.setState({
      hold:true,
      boot:false,
      quit:false,
      info:false
    })
  }

  render() {

  return (
    <div className="Main">
      <header className="Main-header">

      {!this.state.hold &&
        <div className="ShadowSet"/>
      }

      {this.state.hold && !this.state.boot &&
        <div className="HoldBack"/>
      }

      {!this.state.hold && !this.state.boot &&
        <div onAnimationEnd={this.onSystem}  className="HoldBackOpen"/>
      }

      {this.state.quit &&
        <div onAnimationEnd={this.offSystem}  className="HoldBackClose"/>
      }

      <div id="div_test" onClick={()=>{this.setState({quit:true})}} className="HomeBackground">
        <img alt="HomeBackimage" src={require('../../image/Iphone.png')} className="HomeImage"/>
      </div>

      <Home/>

      {!this.state.hold && !this.state.boot &&
        <div onAnimationEnd={this.onSystem}  className="HoldAnimOpen"/>
      }

      {this.state.quit &&
        <div onAnimationEnd={this.offSystem}  className="HoldAnimClose"/>
      }

      {this.state.hold && !this.state.boot &&
        <div onClick={()=>{this.setState({hold:false})}} className="HoldScreen"/>
      }


      <img src={require('../../image/Background_img.png')} className="Main-logo" alt="logo" />

      {this.state.info &&
          <Info id="Info"/>
      }

      {this.state.info &&
          <Detail id="Detail"/>
      }
      
      </header>
    </div>
  );   
}
}