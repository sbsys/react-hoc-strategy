import { memo } from 'react'

const Default = ({ name_input, name, children }) => {
	return (
		<div>
			<input {...name_input} />

			<span>Welcome: {name}</span>

			{children && <div>{children}</div>}
		</div>
	)
}

export default memo(Default)
