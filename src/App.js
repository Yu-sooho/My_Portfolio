import React from 'react';
import './App.css';
import {Main} from './0_main/index'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      check:false
    }
  }

  render(){
  return (
    <div className='App'>
    <Main></Main>
    </div>
  );
  }
}
