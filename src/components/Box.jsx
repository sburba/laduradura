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

        var valuesStyle = {
            /*textAlign: 'right',*/
/*            flexGrow: 6,*/
            flex: '6 0 auto',
            flexFlow: 'row wrap',
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'center',
        };

        var valueStyle2 = {
            flex: '0 1 auto',
            alignSelf: 'auto',
            minWidth: 0,
            minHeight: 'auto',
            fontSize: '55%',
        };

        var valueStyle3_4 = {
            fontSize: '40%',
        };

        var valueStyle5_ = {
            fontSize: '30%',
        };

        var valueStyle1 = {
            fontWeight: 'bold',
            fontSize: '80%',
        };

        var labelStyle = {
            fontWeight: 'bold',
            flexGrow: 1,
            flex: 1,
            fontSize: '24%',
        };

        function showStyledValues(values, styleName) {
            return values.map( (item) =>
                <div style={styleName}>{item}</div>
                             );
        }

        function showValues(values) {
            if(values.length == 1) {
                return showStyledValues(values, valueStyle1);
            } else if(values.length == 2) {
                return showStyledValues(values, valueStyle2);
            } else if(values.length < 5) {
                return showStyledValues(values, valueStyle3_4);
            } else {
                return showStyledValues(values, valueStyle5_);
            }
        }

        return (
            <td style={tdStyle}>
                <div style={boxStyle} onClick={this.props.onClick}>
                    <div style={labelStyle}> {this.props.label}</div>
                    <div style={valuesStyle}> {showValues(this.props.values)}</div>
                </div>
            </td>
        )
    }
}
