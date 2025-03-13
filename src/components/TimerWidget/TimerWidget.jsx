import { useState } from 'react'
import './TimerWidget.css'

export default function TimerWidget({ hours, setHours, minutes, setMinutes, seconds, setSeconds, readonly }) {
	// const [hours, setHours] = useState('00');
	// const [minutes, setMinutes] = useState('00');
	// const [seconds, setSeconds] = useState('00');

	const handleInputChange = (value, setValue) => {
		const numericValue = value.replace(/\D/g, '');
		if (numericValue === '' || (Number(numericValue) >= 0 && Number(numericValue) <= 9)){
			setValue(numericValue.padStart(2, '0'));
		}
		else if (Number(numericValue) < 0 || Number(numericValue) > 59){
			setValue('00');
		}
	}

	return (
		<div className='widget_container'>
			<input 
				className="input_time" 
				type="text" 
				id="HH_input" 
				value={hours} 
				onBlur={(event) => handleInputChange(event.target.value, setHours)}
				onChange={(event) => setHours(event.target.value)}
				onFocus={(event) => event.target.select()}
				onKeyDown={(event) => {
					if (event.key == 'Enter')
						handleInputChange(event.target.value, setHours)
				}}
				maxLength={2}
				readOnly={readonly}/>
			<span className='time_separator'>:</span>
			<input 
				className="input_time" 
				type="text" 
				id="MM_input"
				value={minutes}
				onBlur={(event) => handleInputChange(event.target.value, setMinutes)}
				onChange={(event) => setMinutes(event.target.value)}
				onFocus={(event) => event.target.select()}
				onKeyDown={(event) => {
					if (event.key == 'Enter')
						handleInputChange(event.target.value, setMinutes)
				}}
				maxLength={2}
				readOnly={readonly}/>
			<span className='time_separator'>:</span>
			<input 
				className="input_time" 
				type="text" 
				id="SS_input" 
				value={seconds}
				onBlur={(event) => handleInputChange(event.target.value, setSeconds)}
				onChange={(event) => setSeconds(event.target.value)}
				onFocus={(event) => event.target.select()}
				onKeyDown={(event) => {
					if (event.key == 'Enter')
						handleInputChange(event.target.value, setSeconds)
				}}
				maxLength={2}
				readOnly={readonly}/>
		</div>
	)
}