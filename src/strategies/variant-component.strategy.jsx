import { memo } from 'react'

import VariantType from '../types/variant.type'

import DefaultComponent from '../components/default.component'
import VariantAComponent from '../components/variant-a.component'
import VariantBComponent from '../components/variant-b.component'

const componentStrategy = {}

/* component by strategy */

componentStrategy[VariantType.DEFAULT] = DefaultComponent
componentStrategy[VariantType.VARIANT_A] = VariantAComponent
componentStrategy[VariantType.VARIANT_B] = VariantBComponent

const VariantComponentStrategy = ({ strategy, ...rest }) => {
	/* get component by strategy or default component if strategy does not exist */

	const Component = componentStrategy[strategy] || componentStrategy[VariantType.DEFAULT]

	/* dynamic props injection */

	return <Component {...rest} />
}

export default memo(VariantComponentStrategy)
