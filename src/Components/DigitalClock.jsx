import React from 'react';
import PropTypes from 'prop-types';

export class DigitalClock extends React.Component {
    static get propTypes() {
        return {
            time: PropTypes.string.isRequired
        };
    }

    render() {
        return (
            <div className="digital-clock">{ this.props.time }</div>
        );
    }
};
