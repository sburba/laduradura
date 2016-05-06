import React from 'react'
import ValuesSelectorButton from './ValuesSelectorButton'

export default class ValuesSelector extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		let buttons = [];

		return (
			<div>
				<ValuesSelectorButton value={1} selected={true} />
			</div>
		);
	}

}
