import React from "react";
import PropTypes from "prop-types";
import moment from "moment-timezone";

import { DigitalClock } from "../Components/DigitalClock.jsx";
import { AnalogClock } from "../Components/AnalogClock.jsx";

export class ClockWidget extends React.Component {
    static get defaultProps() {
        return {
            clockNameClassName: 'clock-widget-name',
            headerClassName: 'clock-widget-header',
            nameLabel: 'Clock Name',
            timeUpdateInterval: 1000,
            timeZone: 'America/New_York',
            timeZoneClassName: 'clock-widget-tz',
            timeZoneLabel: 'Timezone',
            widgetClassName: 'clock-widget'
        };
    }

    static get propTypes() {
        return {
            clockNameClassName: PropTypes.string,
            headerClassName: PropTypes.string,
            nameLabel: PropTypes.string,
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
        if (this.timer !== null) {
            return false;
        }

        let _this = this;
        _this.timer = setInterval(function () {
            _this.setState({
                time: _this.getCurrentTime()
            });
        }, _this.props.timeUpdateInterval);

        return true;
    }

    render() {
        return (
            <div className={ this.props.widgetClassName }>
                <div className={ this.props.headerClassName }>
                    <h2 className={ this.props.clockNameClassName }>{ this.props.nameLabel }</h2>
                    <h3 className={ this.props.timeZoneClassName }>{ this.props.timeZoneLabel }</h3>
                </div>

                <AnalogClock time={ this.state.time } />
                <DigitalClock time={ this.state.time } />
            </div>
        );
    }
};
