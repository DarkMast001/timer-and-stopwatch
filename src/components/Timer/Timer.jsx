import { useRef, useState } from 'react'
import TimeControlButton from '../TimeControlButton/TimeControlButton'
import TimerWidget from '../TimerWidget/TimerWidget'
import './Timer.css'

export default function() {
	const [hours, setHours] = useState('00');
	const [minutes, setMinutes] = useState('00');
	const [seconds, setSeconds] = useState('00');
	const [readonly, setReadonly] = useState(false);
	const intervalRef = useRef(null);

	const handleStartTimer = () => {
		setReadonly(true);

		if (intervalRef !== null) {
			clearInterval(intervalRef.current);
		}

		intervalRef.current = setInterval(() => {
			setSeconds((prev) => {
				const prevNumber = Number(prev);
				let newValue = prevNumber - 1;
		
				if (newValue < 0) {
					newValue = 59;
					setMinutes((prevMinutes) => {
					const prevMinutesNumber = Number(prevMinutes);
					let newMinutesValue = prevMinutesNumber - 1;
		
					if (newMinutesValue < 0) {
						newMinutesValue = 59;
						setHours((prevHours) => {
						const prevHoursNumber = Number(prevHours);
						let newHoursValue = prevHoursNumber - 1;
		
						if (newHoursValue < 0) {
							newHoursValue = 0;
							newMinutesValue = 0;
							newValue = 0;
						}
		
						return newHoursValue.toString().padStart(2, '0');
						});
					}
		
					return newMinutesValue.toString().padStart(2, '0');
					});
				}

				if (Number(hours) === 0 && Number(minutes) === 0 && newValue === 0) {
					handleResetTimer()
				}
		
				return newValue.toString().padStart(2, '0');
			});
		}, 1000);
	}

	const handleResetTimer = () => {
		setReadonly(false);

		if (intervalRef.current !== null){
			clearInterval(intervalRef.current);
			intervalRef.current = null;
		}

		setHours('00');
		setMinutes('00');
		setSeconds('00');
	}

	return (
		<div className='timer_container'>
			<TimerWidget 
				hours={hours} setHours={setHours}
				minutes={minutes} setMinutes={setMinutes}
				seconds={seconds} setSeconds={setSeconds} 
				readonly={readonly}/>
			<div className='timer_buttons_container'>
				<TimeControlButton onClick={handleStartTimer}>Старт</TimeControlButton>
				<TimeControlButton onClick={handleResetTimer}>Сброс</TimeControlButton>
			</div>
		</div>
	)
}