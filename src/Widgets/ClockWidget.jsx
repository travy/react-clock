import PropTypes from "prop-types";
import React from "react";
import moment from "moment-timezone";

import { AnalogClock } from "../Components/AnalogClock.jsx";
import { DigitalClock } from "../Components/DigitalClock.jsx";
import { OptionsButton } from "../Components/OptionsButton.jsx";

export class ClockWidget extends React.Component {
    static get defaultProps() {
        return {
            bodyClassName: 'card-body',
            clockNameClassName: 'clock-widget-name',
            footerClassName: 'card-footer',
            headerClassName: 'clock-widget-header card-header',
            nameLabel: 'Clock Name',
            optionsClassName: 'clock-widget-options pull-right',
            optionsLabel: 'Options',
            timeUpdateInterval: 1000,
            timeZone: 'America/New_York',
            timeZoneClassName: 'clock-widget-tz',
            timeZoneLabel: 'Timezone',
            widgetClassName: 'clock-widget card border-secondary'
        };
    }

    static get propTypes() {
        return {
            bodyClassName: PropTypes.string,
            clockNameClassName: PropTypes.string,
            footerClassName: PropTypes.string,
            headerClassName: PropTypes.string,
            nameLabel: PropTypes.string,
            optionsClassName: PropTypes.string,
            optionsLabel: PropTypes.string,
            timeUpdateInterval: PropTypes.positiveInteger,
            timeZone: PropTypes.string,
            timeZoneClassName: PropTypes.string,
            timeZoneLabel: PropTypes.string,
            widgetClassName: PropTypes.string
        };
    }

    constructor(props) {
        super(props);

        let _this = this;        
        _this.timer = null;
        _this.state = {
            time: _this.getCurrentTime()
        };

        _this.setupTimer();
    }

    getCurrentTime() {
        let time = (new Date()).getTime();

        return moment.tz(time, this.props.timeZone).format('hh:mm:ss A');
    }

    /**
     * Updates the internal time that the clock widget represents once every
     * set interval of time (defaults to 1 second).
     */
    setupTimer() {
        let _this = this;
        
        if (_this.timer !== null) {
            clearTimeout(_this.timer);
        }

        _this.timer = setInterval(function () {
            _this.setState({
                time: _this.getCurrentTime()
            });
        }, _this.props.timeUpdateInterval);

        return true;
    }

    /**
     * Displays a modal with information to change the timezone and name for
     * the clock.
     *
     * @returns {undefined}
     */
    displayOptionsDialog() {
        //  todo- implement modal logic
        console.log('Display Options');
    }

    render() {
        return (
            <div className={ this.props.widgetClassName }>
                <div className={ this.props.headerClassName }>
                    <OptionsButton clickHandler={ this.displayOptionsDialog } />
                    <h2 className={ this.props.clockNameClassName }>{ this.props.nameLabel }</h2>
                </div>
                <div className={ this.props.bodyClassName }>
                    <AnalogClock time={ this.state.time } />
                    <DigitalClock time={ this.state.time } />
                </div>
                <div className={ this.props.footerClassName }>
                    <span className={ this.props.timeZoneClassName }>
                        { this.props.timeZoneLabel }
                    </span>
                </div>
            </div>
        );
    }
};
