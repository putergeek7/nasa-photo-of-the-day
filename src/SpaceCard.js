import React from 'react';
import {
	Card,
	CardImg,
	CardText,
	CardBody,
	CardLink,
	CardTitle,
	CardSubtitle
} from 'reactstrap';

const Example = props => {
	return (
		<div>
			<Card>
				<CardBody>
					<CardTitle className='titleBold'>{props.title}</CardTitle>
					<CardSubtitle className='dateBold'>{props.date}</CardSubtitle>
				</CardBody>
				<img height='600px' width='70%' src={props.url} alt='Card image cap' />
				<CardBody>
					<CardText className='textCenter'>{props.explanation}</CardText>
					<CardLink href='#'>Card Link</CardLink>
					<CardLink href='#'>Another Link</CardLink>
				</CardBody>
			</Card>
		</div>
	);
};

export default Example;
