import { memo } from 'react'

import DefaultComponent from './default.component'

const VariantA = ({ name_input, name, last_input, last }) => {
	return (
		<DefaultComponent name_input={name_input} name={name}>
			<input {...last_input} />

			<span>Fancy last name: {last}</span>
		</DefaultComponent>
	)
}

export default memo(VariantA)
