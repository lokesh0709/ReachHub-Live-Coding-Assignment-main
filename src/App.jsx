import { useEffect, useState } from 'react';
import './App.css'

function App() {
	const [time, setTime] = useState(0);
	const [laps, setLaps] = useState([]);
	const [isRunning, setisRunning] = useState(false);

	useEffect(() => {
		let intervalId;

		if (isRunning){
			intervalId= setInterval(() =>{
				setTime((prevTime) => prevTime+1 );
			}, 1000);
		}

		return ()=>{
			clearInterval(intervalId);
		};
	}, [isRunning]);


	const startwatch=()=> {
		setisRunning(true);
	}

	const stopwatch=()=> {
		setisRunning(false);
	}

	const resettwatch=()=> {
		setTime(0);
		setLaps([]);
	}

	const recordLaps = () => {
		setLaps((prevlaps) => [...prevlaps, time]);
	}

	const formatTime =(time) => {
		const min= Math.floor(time/60);
		const sec= Math.floor(time%60);
		return `${min}:${sec}`;
	}

	

    return (
		<div className='page'>
			<h1>Welcome to Stopwatch</h1>
			<h1>{formatTime(time)}</h1>
			{
				isRunning ? (
					<button onClick={stopwatch}>Stop!</button>
				) : (
					<button onClick={startwatch}>Start!</button>
				)
			}
			<button onClick={resettwatch}>Reset</button>
			<button onClick={recordLaps}>Lap</button>
			<ul>
				{laps.map( (lap, index) => (
					<li key={index}>{formatTime(lap)}</li>
				))}
			</ul>
		</div>
    )
}

export default App
