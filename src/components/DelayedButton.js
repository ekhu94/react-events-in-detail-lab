import React from 'react';

class DelayedButton extends React.Component {

    onButtonClick = e => {
        e.persist();
        setTimeout(() => this.props.onDelayedClick(e), this.props.delay);
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

export default DelayedButton;