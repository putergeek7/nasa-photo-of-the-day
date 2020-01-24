import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import SpaceCard from './SpaceCard';

function App() {
	const [nasaImg, setNasaImg] = useState([]);
	useEffect(() => {
		axios
			.get(
				'https://api.nasa.gov/planetary/apod?api_key=HeJ9yb3WaxSY1faBvrEJLfH4brmlYkRaYxo3eOPK'
			)
			.then(res => {
				console.log(res.data);
				setNasaImg(res.data);
			});
	}, []);

	return (
		<div className='App'>
			<header>
				<h1>NASA's PHOTO OF THE DAY</h1>
			</header>
			<SpaceCard
				title={nasaImg.title}
				url={nasaImg.hdurl}
				explanation={nasaImg.explanation}
				date={nasaImg.date}
				copyright={nasaImg.copyright}
			/>
		</div>
	);
}

export default App;
