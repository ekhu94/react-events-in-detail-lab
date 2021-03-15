import React from 'react';

class DelayedButton extends React.Component {

    onButtonClick = async e => {
        const callback = () => this.props.onDelayedClick(e);
        const delay = this.props.delay;
        await setTimeout(callback, delay);
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