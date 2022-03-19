import { memo } from 'react'

import useApp from './hooks/useApp.hook'

import VariantComponentStrategy from './strategies/variant-component.strategy'

const App = () => {
	const { selectStrategyOptions, handleStrategySelection, componentStrategyProps } = useApp()

	return (
		<div>
			<h1>React HOC Strategy</h1>

			<div>
				<select onChange={handleStrategySelection}>
					{selectStrategyOptions.map((opt, index) => (
						<option key={index} value={opt.value}>
							{opt.label}
						</option>
					))}
				</select>

				<VariantComponentStrategy {...componentStrategyProps} />
			</div>
		</div>
	)
}

export default memo(App)
