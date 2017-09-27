import React, {Component} from 'react';


class GameHTML extends Component {	

	render() {
		return (
			<div className="wrapper clearfix">
			    <div className="player-0-panel active">
			        <div className="yourturn"></div>
			        <div className="player-name" id="name-0">Player 1</div>
			        <div className="player-score" id="score-0">43</div>
			        <div className="player-current-box">
			            <div className="player-current-label">Current score</div>
			            <div className="player-current-score" id="current-0">11</div>
			        </div>
			    </div>

			    <div className="player-1-panel">
			        <div className="yourturn"></div>
			        <div className="player-name" id="name-1">Player 2</div>
			        <div className="player-score" id="score-1">72</div>
			        <div className="player-current-box">
			            <div className="player-current-label">Current score</div>
			            <div className="player-current-score" id="current-1">0</div>
			        </div>
			    </div>

			    <button className="btn btn-new">New game</button>
			    <button className="btn btn-roll">Roll dice</button>
			    <button className="btn btn-hold">Hold</button>
			    <a href="index.html" className="btn back-to-menu-link">Back to menu</a>
			    <a href="rules.html" className="btn rules-link">Game rules</a>

			    <img src="img/dice-5.png" alt="Dice" className="dice" />
			</div>
		)
	}
}

export default GameHTML;