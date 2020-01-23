import React from 'react';

const SpaceCard = props => {
	return (
		<div>
			<img src={props.url} alt='Nasa Image' />
			<div>
				<h1>{props.title}</h1>
				<h2>{props.date}</h2>
				<h3>Details</h3>
				<p>{props.explanation}</p>
				<p>{props.copyright}</p>
			</div>
		</div>
	);
};

export default SpaceCard;
