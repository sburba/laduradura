import React from 'react';

export default class Box extends React.Component {

    render() {
        var openStyle = '1px solid black';
        var closedStyle = '2px solid black';

        var boxStyle = {
            borderLeft: this.props.walls.left ? openStyle : closedStyle,
            borderRight: this.props.walls.right ? openStyle : closedStyle,
            borderTop: this.props.walls.top ? openStyle : closedStyle,
            borderBottom: this.props.walls.down ? openStyle : closedStyle,
            width: '100px',
            height: '100px'
        };

        var annotationStyle = {
            textAlign: 'right'
        };

        var valueStyle = {
            fontWeight: 'bold',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%'
        };

        var labelStyle = {
            textAlign: 'left'
        };

        var values = ['1', '2', '3'];

        // <div style = {valueStyle}> {this.props.value} </div>
        // <div style = {annotationStyle}> {this.props.values} </div>

        return  <td style={boxStyle}>
                    <table>
                        <tbody>
                            <tr width="100%">
                                <td width="33%" height="100%">
                                    <div style = {labelStyle}> {this.props.label}</div>
                                </td>

                                <td width="33%" height="100%">
                                    <div style = {valueStyle}> 4 </div>
                                </td>

                                <td width="33%" height="100%">
                                    <div style = {annotationStyle}> {values.join(", ")} </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
    }
}