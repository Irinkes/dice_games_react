import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {NavLink} from 'react-router-dom';
import classNames from 'classnames';

class Fifty extends Component {	
	constructor(props) {
		super(props);
		
		this.state={	
			
			activePlayer: 0,
			gamePlaying: true,
			score0: 0,
			score1: 0,			
			name0: 'Player 1',
			name1: 'Player 2',
			showDice0: false,
			showDice1: false,
			imgSrcWhite0: "img/dice-1.png",
			imgSrcBlack0: "img/diceblack-1.png",
			imgSrcWhite1: "img/dice-1.png",
			imgSrcBlack1: "img/diceblack-1.png",

		}


		this.rolldice = this.rolldice.bind(this);		
		this.newGame = this.newGame.bind(this);	
	}
	newGame() {
		this.setState({
			activePlayer: 0,
			gamePlaying: true,
			score0: 0,
			score1: 0,			
			name0: 'Player 1',
			name1: 'Player 2',
			showDice0: false,
			showDice1: false,
			imgSrcWhite0: "img/dice-1.png",
			imgSrcBlack0: "img/diceblack-1.png",
			imgSrcWhite1: "img/dice-1.png",
			imgSrcBlack1: "img/diceblack-1.png",
		})
	}
	rolldice() {		
		if (this.state.gamePlaying) {	
			let diceWhite0 = Math.floor(Math.random()*6) + 1;
			let diceBlack0 = Math.floor(Math.random()*6) + 1;
			let diceWhite1 = Math.floor(Math.random()*6) + 1;
			let diceBlack1 = Math.floor(Math.random()*6) + 1;			
			if(this.state.activePlayer===0) {				
				this.setState({
					showDice0: true
				})
				
				this.setState({
					imgSrcWhite0: "img/dice-" + diceWhite0 + ".png",
					imgSrcBlack0: "img/diceblack-" + diceBlack0 + ".png",
				})

				if(diceWhite0===6 && diceBlack0===6 ) {				
					let score0 = this.state.score0 + 25;					
					this.setState({
						score0:score0,
					}) 		
					this.isWinner();
					this.nextPlayer();		
				}
				else if (diceWhite0===3 && diceBlack0===3) {										
					this.setState({
						score0:0,

					}) 	
					this.isWinner();
					this.nextPlayer();
				}
				else if(diceWhite0 === 1 && diceBlack0===1 || diceWhite0 === 2 && diceBlack0===2 || diceWhite0 === 4 && diceBlack0===4 || diceWhite0 === 5 && diceBlack0===5) {
					let score0 = this.state.score0 + 5;					
					this.setState({
						score0:score0,

					}) 	
					this.isWinner();
					this.nextPlayer();
				}
				else if(diceWhite0!==diceBlack0){
					let score0 = this.state.score0 + 0;					
					this.setState({
						score0:score0,

					}) 	
					this.isWinner();
					this.nextPlayer();
				}	
			}
			else {
				
				this.setState({
					showDice1: true
				})
				
				this.setState({
					imgSrcWhite1: "img/dice-" + diceWhite1 + ".png",
					imgSrcBlack1: "img/diceblack-" + diceBlack1 + ".png",
				})
				if(diceWhite1===6 && diceBlack1===6 ) {				
					let score1 = this.state.score1 + 25;					
					this.setState({
						score1:score1,
					}) 		
					this.isWinner();
					this.nextPlayer();		
				}
				else if (diceWhite1===3 && diceBlack1===3) {										
					this.setState({
						score1:0,
					}) 	
					this.isWinner();
					this.nextPlayer();
				}
				else if(diceWhite1 === 1 && diceBlack1===1 || diceWhite1 === 2 && diceBlack1===2 || diceWhite1 === 4 && diceBlack1===4 || diceWhite1 === 5 && diceBlack1===5) {
					let score1 = this.state.score1 + 5;					
					this.setState({
						score1:score1,

					}) 	
					this.isWinner();
					this.nextPlayer();
				}
				else if(diceWhite1!==diceBlack1){
					let score1 = this.state.score1 + 0;					
					this.setState({
						score1:score1,

					}) 	
					this.isWinner();
					this.nextPlayer();
				}	
			}					
					
						
				
		}
	}

	nextPlayer() {
		this.state.activePlayer === 0 ? this.state.activePlayer = 1 : this.state.activePlayer = 0;
		

	}

	isWinner() {
		if (this.state.gamePlaying) {
			if(this.state.activePlayer===0) {										
				if(this.state.score0>=50) {			
				this.setState({					
					name0:"Winner",
					showDice0:false,
					gamePlaying:false
				})
				} 
			} else {							
				if(this.state.score1>=50) {					
					this.setState({						
						name1:"Winner",
						showDice1:false,
						gamePlaying:false
						})
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

			        <div className="twodice">
				        <img src={this.state.imgSrcWhite0} alt="Dice" className={classNames("dice dice-white", {'hide': !this.state.showDice0}, {"block":this.state.showDice0})} />
				        <img src={this.state.imgSrcBlack0} alt="Dice" className={classNames("dice dice-black", {'hide': !this.state.showDice0}, {"block":this.state.showDice0})} />
				    </div>
			    </div>
				
			    <div className={classNames('player-1-panel', {'active': this.state.activePlayer===1},{'winner':this.state.name1==="Winner"})}>
			        <div className="yourturn"></div>
			        <div className="player-name" id="name-1">{this.state.name1}</div>
			        <div className="player-score" id="score-1">{this.state.score1}</div>
			        <div className="twodice">
				        <img src={this.state.imgSrcWhite1} alt="Dice" className={classNames("dice dice-white", {'hide': !this.state.showDice1}, {"block":this.state.showDice1})} />
				        <img src={this.state.imgSrcBlack1} alt="Dice" className={classNames("dice dice-black", {'hide': !this.state.showDice1}, {"block":this.state.showDice1})} />
				    </div>
			    </div>

			    <button className="btn btn-new" onClick={this.newGame}>New game</button>
			    <button className="btn btn-roll" onClick={this.rolldice}>Roll dice</button>			    
			    <NavLink to={'/'} className="btn back-to-menu-link">Back to menu</NavLink>
			    <NavLink to={'/GameRules'} className="btn rules-link">Game rules</NavLink>

			    			    
			</div>
		)
	}
}

export default Fifty;