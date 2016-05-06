import React from 'react';

export default class Box extends React.Component {

    render() {
        var openStyle = '1px solid black';
        var closedStyle = '2px solid black';

        var boxStyle = {
            borderLeft: this.props.state.walls.left ? openStyle : closedStyle,
            borderRight: this.props.state.walls.right ? openStyle : closedStyle,
            borderTop: this.props.state.walls.top ? openStyle : closedStyle,
            borderBottom: this.props.state.walls.down ? openStyle : closedStyle,
            width: '50px',
            height: '50px'
        };

        var annotationStyle = {
            textAlign: 'right',
            fontWeight: 'bold'
        };

        var valueStyle = {
            textAlign: 'center',
        };

        var labelStyle = {
            textAlign: 'left',
        };

        console.log(this.props.state);
        return  <div style={boxStyle}>
                    <div style = {annotationStyle}> {this.props.state.values} </div>
                    <div style = {valueStyle}> {this.props.state.value} </div>
                    <div style = {labelStyle}> {this.props.state.label} </div>
                </div>
    }
}