import './PageSwitchingButton.css'

export default function PageSwitchingButton({children, isActive, ...props}) {
	return (
		<button 
		{...props}
		className={isActive ? 'switch_page_btn active' : 'switch_page_btn'}
		>
			{children}
		</button>
	)
}