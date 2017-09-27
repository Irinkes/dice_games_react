import React, {Component} from 'react';


class GameRules extends Component {	

	render() {
		return (
			 <div className="wrapper-rules">
            <div className="b-rules">
                <h1>Pig game</h1>
                <p>
                    - The game has 2 players, playing in rounds<br />
                    - In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score<br />
                    - BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn<br />
                    - The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn<br />
                    - The first player to reach 100 points on GLOBAL score wins the game
                </p>
            </div>      
             <div className="b-rules">
                <h1>Two dices</h1>
                <p>
                    - The game has 2 players, playing in rounds<br />
                    - In each turn, a player rolls two dices as many times as he whishes.<br />
                    - White dice value is added to the round score and black dice value is substracted from the score<br />
                    - If the player rolls a 1 at least one of the dice, all his ROUND score gets lost. After that, it's the next player's turn<br />
                    - The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn<br />
                    - The first player to reach 100 points on GLOBAL score wins the game
                </p>
            </div> 
            <div className="b-rules">
                <h1>Fifty</h1>
                <p>
                    - The game has 2 players, playing in rounds<br />
                    - In each turn, a player rolls two dices<br />
                    - If the player gets different values on dices, it's the next player turn<br />
                    - If the player gets double six - he receives 25 points to his score<br />
                    - If the player gets double three - his score gets lost.<br />
                    - For other double values - player receives plus 5 points<br />
                    - The first player to reach 50 points on score wins the game
                </p>
            </div>
        </div>
		)
	}
}

export default GameRules;