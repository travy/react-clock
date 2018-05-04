import PropTypes from 'prop-types';
import React from 'react';

export class DigitalClock extends React.Component {
    static get defaultProps() {
        return {
            digitalClockClassName: 'digital-clock'
        };
    }
    
    static get propTypes() {
        return {
            digitalClockClassName: PropTypes.string,
            time: PropTypes.string.isRequired
        };
    }

    render() {
        return (
            <div className={ this.props.digitalClockClassName }>
                { this.props.time }
            </div>
        );
    }
};
