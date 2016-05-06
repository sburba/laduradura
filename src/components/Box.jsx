import React from 'react';

export default class Box extends React.Component {
    
    render() {
        var openStyle = '1px solid black';
        var closedStyle = '5px solid black';

        var tdStyle = {
            borderLeft: this.props.walls.left ? closedStyle : openStyle,
            borderRight: this.props.walls.right ? closedStyle : openStyle,
            borderTop: this.props.walls.top ? closedStyle : openStyle,
            borderBottom: this.props.walls.down ? closedStyle : openStyle
        };

        var boxStyle = {
            display: 'flex',
            width: '100px',
            height: '100px',
            padding: '5px',
            backgroundColor: this.props.selected ? 'cyan' : 'white',
        };

        var annotationStyle = {
            textAlign: 'right',
            flexGrow: 6,
            flex: 6,
            fontSize: 18
        };

        var valueStyle = {
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexGrow: 6,
            flex: 6,
            fontSize: 50
        };

        var labelStyle = {
            fontWeight: 'bold',
            flexGrow: 1,
            flex: 1,
            fontSize: 24
        };

        function showValues(values) {
            if(values.length == 1) {
                return <div style={valueStyle}> {values}</div>;
            } else {
                return <div style={annotationStyle}> {values.join(", ")}</div>;
            }
        }

        return (
            <td style={tdStyle}>
                <div style={boxStyle} onClick={this.props.onClick}>
                    <div style={labelStyle}> {this.props.label}</div>
                    {showValues(this.props.values)}
                </div>
            </td>
        )
    }
}