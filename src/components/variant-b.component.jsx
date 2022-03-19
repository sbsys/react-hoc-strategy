import { memo } from 'react'

import DefaultComponent from './default.component'

const VariantB = ({ name_input, name, age_input, age }) => {
	return (
		<DefaultComponent name_input={name_input} name={name}>
			<input {...age_input} />

			<span>You are "{age}" years old</span>
		</DefaultComponent>
	)
}

export default memo(VariantB)
