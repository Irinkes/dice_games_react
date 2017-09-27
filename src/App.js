import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {NavLink} from 'react-router-dom';

class App extends Component {
  render() {
    return (
       <div className="wrapper-menu">
            <ul className="main-menu">
                <li><NavLink to={'/PigGame'} className="shake">Pig game</NavLink></li>
                <li><NavLink to={'/TwoDice'} className="shake">Two dice</NavLink></li>
                <li><NavLink to={'/Fifty'} className="shake">Fifty</NavLink></li>                
            </ul>
            
        </div>
    );
  }
}

export default App;
