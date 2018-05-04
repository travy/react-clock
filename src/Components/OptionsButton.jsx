import PropTypes from 'prop-types';
import React from 'react';

export class OptionsButton extends React.Component {
    static get defaultProps() {
        return {
            buttonClassName: 'btn btn-sm btn-danger float-right',
            buttonType: 'button',
            iconClassName: 'oi oi-wrench',
            tooltipDataToggle: 'tooltip',
            tooltipLabel: 'Options',
            tooltipPosition: 'bottom'
        };
    }

    static get propTypes() {
        return {
            buttonClassName: PropTypes.string,
            buttonType: PropTypes.string,
            clickHandler: PropTypes.func.isRequired,
            iconClassName: PropTypes.string,
            tooltipDataToggle: PropTypes.string,
            tooltipLabel: PropTypes.string,
            tooltipPosition: PropTypes.string
        };
    }

    render() {
        return (
            <button className={ this.props.buttonClassName }
                    data-placement={ this.props.tooltipPosition }
                    data-toggle={ this.props.tooltipDataToggle }
                    onClick={ this.props.clickHandler }
                    title={ this.props.tooltipLabel }
                    type={ this.props.buttonType }>
                <span className={ this.props.iconClassName }></span>
            </button>
        );
    }
};
