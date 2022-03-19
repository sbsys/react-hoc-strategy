import { useState } from 'react'

import VariantType from '../types/variant.type'

const useApp = () => {
    /* strategy state selection */

	const [currentStrategy, setCurrentStrategy] = useState(VariantType.DEFAULT)

	const selectStrategyOptions = [
		{
			label: 'Select strategy',
			value: VariantType.DEFAULT,
		},
		{
			label: 'Variant A',
			value: VariantType.VARIANT_A,
		},
		{
			label: 'Variant B',
			value: VariantType.VARIANT_B,
		},
	]

	const handleStrategySelection = event => setCurrentStrategy(event.target?.value)

    /* input states */

	const [name, setName] = useState('')

	const [last, setLast] = useState('')

	const [age, setAge] = useState(0)

    /* input props */

	const name_input = {
		type: 'text',
		value: name,
		onChange: event => setName(event.target?.value),
		placeholder: 'Enter your name...',
	}

	const last_input = {
		type: 'text',
		value: last,
		onChange: event => setLast(event.target?.value),
		placeholder: 'Enter your last name...',
	}

	const age_input = {
		type: 'number',
		min: 0,
        max: 120,
		step: 1,
		value: age,
		onChange: event => setAge(event.target?.value),
		placeholder: 'Enter your age...',
	}

    /* component strategy props */

	const componentStrategyProps = {
		strategy: currentStrategy,
		name,
		last,
		age,
		name_input,
		last_input,
		age_input,
	}

	return {
		selectStrategyOptions,
		handleStrategySelection,
		componentStrategyProps,
	}
}

export default useApp
