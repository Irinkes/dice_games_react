import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import {NavLink} from 'react-router-dom';

class TwoDice extends Component {	
	constructor(props) {
		super(props);
		
		this.state={			
			roundScore0: 0,
			roundScore1: 0,
			activePlayer: 0,
			gamePlaying: true,
			score0: 0,
			score1: 0,			
			name0: 'Player 1',
			name1: 'Player 2',
			showDice: false,
			imgSrcWhite: "img/dice-1.png",
			imgSrcBlack: "img/diceblack-1.png",

		}


		this.rolldice = this.rolldice.bind(this);
		this.btnHold = this.btnHold.bind(this);
	}
	rolldice() {		
		if (this.state.gamePlaying) {			
			this.setState({
				showDice: true
			})
			let diceWhite = Math.floor(Math.random()*6) + 1;
			let diceBlack = Math.floor(Math.random()*6) + 1;
			this.setState({
				imgSrcWhite: "img/dice-" + diceWhite + ".png",
				imgSrcBlack: "img/diceblack-" + diceBlack + ".png",
			})
			if(this.state.activePlayer===0) {
				if(diceWhite!==1 && diceBlack!==1 ) {				
					let roundScore = this.state.roundScore0 + diceWhite + diceBlack;
					this.setState({
						roundScore0:roundScore
					}) 				
				}
				else {
					this.nextPlayer();
				}	
			}
			else {
				if(diceWhite!==1 && diceBlack!==1) {				
					let roundScore = this.state.roundScore1 +  diceWhite + diceBlack;
					this.setState({
						roundScore1:roundScore
					}) 				
				}
				else {
					this.nextPlayer();
				}	
			}					
					
						
				
		}
	}

	nextPlayer() {
		this.state.activePlayer === 0 ? this.state.activePlayer = 1 : this.state.activePlayer = 0;
		this.setState({
			roundScore0:0,
			roundScore1:0
		})

	}

	btnHold() {
		if (this.state.gamePlaying) {
			if(this.state.activePlayer===0) {
				let score0 = this.state.roundScore0 + this.state.score0;						
				if(score0>=100) {			
				this.setState({
					score0:score0,
					name0:"Winner",
					showDice:false,
					gamePlaying:false
				})
				} else {
					this.setState({
						score0:score0
					})
					this.nextPlayer();
				}				

			} else {
				let score1 = this.state.roundScore1 + this.state.score1;				
				if(score1>=100) {					
					this.setState({
						score1:score1,
						name1:"Winner",
						showDice:false,
						gamePlaying:false
					})
					} else {
						this.setState({
							score1:score1
						})
						this.nextPlayer();
					}
				
				}
			}	
		}


	render() {		
		return (			
			<div className="wrapper clearfix">
			    <div className={classNames('player-0-panel', {'active': this.state.activePlayer===0}, {'winner':this.state.name0==="Winner"})}>
			        <div className="yourturn"></div>
			        <div className="player-name" id="name-0">{this.state.name0}</div>
			        <div className="player-score" id="score-0">{this.state.score0}</div>

			        <div className="player-current-box">
			            <div className="player-current-label">Current score</div>
			            <div className="player-current-score" id="current-0">{this.state.roundScore0}</div>
			        </div>
			    </div>
				
			    <div className={classNames('player-1-panel', {'active': this.state.activePlayer===1},{'winner':this.state.name1==="Winner"})}>
			        <div className="yourturn"></div>
			        <div className="player-name" id="name-1">{this.state.name1}</div>
			        <div className="player-score" id="score-1">{this.state.score1}</div>
			        <div className="player-current-box">
			            <div className="player-current-label">Current score</div>
			            <div className="player-current-score" id="current-1">{this.state.roundScore1}</div>
			        </div>
			    </div>

			    <button className="btn btn-new">New game</button>
			    <button className="btn btn-roll" onClick={this.rolldice}>Roll dice</button>
			    <button className="btn btn-hold" onClick={this.btnHold}>Hold</button>
			    <NavLink to={'/'} className="btn back-to-menu-link">Back to menu</NavLink>
			    <NavLink to={'/GameRules'} className="btn rules-link">Game rules</NavLink>

			    <div className="twodice">
			        <img src={this.state.imgSrcWhite} alt="Dice" className={classNames("dice dice-white", {'hide': !this.state.showDice}, {"block":this.state.showDice})} />
			        <img src={this.state.imgSrcBlack} alt="Dice" className={classNames("dice dice-black", {'hide': !this.state.showDice}, {"block":this.state.showDice})} />
			    </div>			    
			</div>
		)
	}
}

export default TwoDice;