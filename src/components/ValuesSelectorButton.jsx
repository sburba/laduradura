import React from 'react'

export default class ValuesSelectorButton extends React.Component {
    constructor(props) {
        super(props);
    }

    onClick() {
        this.props.onChange(this.props.value);
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
				<span>{this.props.value}</span>
			</div>
		);
	}
}
