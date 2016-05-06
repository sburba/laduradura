import React from 'react'
import { isFunction } from 'lodash'

export default class ValuesSelectorButton extends React.Component {
    constructor(props) {
        super(props);

		this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
		e.preventDefault();

		let { label, selected, onChange } = this.props;

		if( isFunction(onChange) ) {
			onChange( { label, selected: !selected })
		}
	}
    
    getButtonStyle() {
        return {
            backgroundColor: this.props.selected ? 'blue' : 'skyblue',
            color: 'white',
            border: '2px solid purple',
            display: 'inline-block',
            padding: '5px',
            margin: '2px',
            borderRadius: '35%',
        };
    }
    
	render() {
		return (
			<div style={this.getButtonStyle()} onClick={this.onClick}>
				<span>{this.props.label}</span>
			</div>
		);
	}
}
