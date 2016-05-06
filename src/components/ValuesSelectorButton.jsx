import React from 'react'

export const buttonStyle = {
	backgroundColor: 'skyblue',
	border: '1px solid purple',
	display: 'inline-block',
	padding: '5px',
	margin: '2px'
}

export default class ValuesSelectorButton extends React.Component {

	render() {
		return (
			<div style={buttonStyle} >
				<span>{this.props.value}</span>
			</div>
		);
	}
}
