import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from 'react-router-dom';
import PigGame from './PigGame';
import TwoDice from './TwoDice';
import Fifty from './Fifty';
import GameRules from './GameRules';





ReactDOM.render(
 <Router>
    <div>     
  	  <Route exact path="/" component={App}/>       
      <Route path="/PigGame" component={PigGame}/>
      <Route path="/TwoDice" component={TwoDice}/>
      <Route path="/Fifty" component={Fifty}/>
      <Route path="/GameRules" component={GameRules}/>
          
    </div>
  </Router>


	, document.getElementById('root'));
registerServiceWorker();
