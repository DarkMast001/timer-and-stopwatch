import './TimeControlButton.css'

export default function TimeControlButton({ children, ...props }) {
	return (
		<button 
			{...props}
			className='timer_control_button'>{children}</button>
	)
}