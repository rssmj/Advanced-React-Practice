// 1
import React from 'react';

// 2 -- { use destructer { PlayerCard } on App.js instead of export default PlayerCard in // 3 }
export const PlayerCard = props => {
	// 2.1 + // 3
	console.log(props);
	return (
		/* use divs -- <div></div> or js fragment -- <></> */
		<div className='card-wrapper'>
			{/* <h1>Player goes here</h1> */}
			<h1 className='card-name'>{props.player.name}</h1>
			<h2 className='card-team'>Team: {props.player.team}</h2>
			<h4 className='card-rank'>World Ranking: {props.player.rank}</h4>
		</div>
	);
};

// 3

/* 

export default PlayerCard;

*/