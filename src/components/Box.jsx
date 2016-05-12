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
            width: '90px',
            height: '90px',
            padding: '5px',
            backgroundColor: this.props.selected ? '#EAE8E8' : 'white',
            fontSize: 90,
        };

        var valueStyle2 = {
            textAlign: 'right',
            flexGrow: 6,
            flex: 6,
            fontSize: '55%',
        };

        var valueStyle3_4 = {
            textAlign: 'right',
            flexGrow: 6,
            flex: 6,
            fontSize: '40%',
        };

        var valueStyle5_ = {
            textAlign: 'right',
            flexGrow: 6,
            flex: 6,
            fontSize: '30%',
        };

        var valueStyle1 = {
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexGrow: 6,
            flex: 6,
            fontSize: '80%',
        };

        var labelStyle = {
            fontWeight: 'bold',
            flexGrow: 1,
            flex: 1,
            fontSize: '24%',
        };

        function showValues(values) {
            if(values.length == 1) {
                return <div style={valueStyle1}> {values}</div>;
            } else if(values.length == 2) {
                return <div style={valueStyle2}> {values.join(" ")}</div>;
            } else if(values.length < 5) {
                return <div style={valueStyle3_4}> {values.join(" ")}</div>;
            } else {
                return <div style={valueStyle5_}> {values.join(" ")}</div>;
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
