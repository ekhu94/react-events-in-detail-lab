import React from 'react';

class CoordinatesButton extends React.Component {

    onButtonClick = e => {
        this.props.onReceiveCoordinates([e.clientX, e.clientY]);
    }

    render() {
        return (
            <button
                onClick={this.onButtonClick}
            >

            </button>
        );
    }
}

export default CoordinatesButton;