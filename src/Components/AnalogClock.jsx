import PropTypes from 'prop-types';
import React from 'react';

const HAND_HOURS = 0x00;
const HAND_MINUTES = 0x01;
const HAND_SECONDS = 0x02;
const HAND_INVALID_MSG = 'An invalid value was passed to identify one of the hands for the analog clock';

const ANALOG_CLOCK_TOTAL_HOURS = 12;
const ANALOG_CLOCK_TOTAL_MINUTES = 60;
const ANALOG_CLOCK_TOTAL_SECONDS = 60;

export class AnalogClock extends React.Component {
    static get defaultProps() {
        return {
            analogClockClassName: 'analog-clock',
            dialClassName: 'dial',
            hoursHandClassName: 'hand hour-hand',
            minutesHandClassName: 'hand minute-hand',
            secondsHandClassName: 'hand second-hand'
        };
    }

    static get propTypes() {
        return {
            analogClockClassName: PropTypes.string,
            dialClassName: PropTypes.string,
            hoursHandClassName: PropTypes.string,
            minutesHandClassName: PropTypes.string,
            secondsHandClassName: PropTypes.string,
            time: PropTypes.string.isRequired
        };
    }

    /**
     * Will construct the CSS logic for rotating the specified hand to its
     * correct position on the clock dial.
     *
     * @param {type} delta
     * @param {type} interval
     *
     * @returns {AnalogClock.moveHand.AnalogClockAnonym$0}
     */
    moveHand(delta, interval) {
        let degrees = ((360 / interval) * delta) - 90;

        return {
            transform: 'rotate(' + degrees + 'deg)'
        };
    }

    /**
     * Determines the angle that a specified clock hand should be rendered at
     * in order to properly represent its time value.
     *
     * @param {type} handOfClock
     *
     * @returns {AnalogClock.moveHand.AnalogClockAnonym$0}
     */
    getAngleFor(handOfClock) {
        let interval, valuePosition;

        if (handOfClock === HAND_HOURS) {
            interval = ANALOG_CLOCK_TOTAL_HOURS;
            valuePosition = 0;
        } else if (handOfClock === HAND_MINUTES) {
            interval = ANALOG_CLOCK_TOTAL_MINUTES;
            valuePosition = 3;
        } else if (handOfClock === HAND_SECONDS) {
            interval = ANALOG_CLOCK_TOTAL_SECONDS;
            valuePosition = 6;
        } else {
            throw new Error(HAND_INVALID_MSG);
        }

        let handValue = this.props.time.substring(valuePosition, valuePosition + 2);
        return this.moveHand(handValue, interval);
    }

    /**
     * Constructs an object consisting of the angles for each of the hands of
     * a clock.
     *
     * @returns {AnalogClock.getAngles.AnalogClockAnonym$1}
     */
    getAngles() {
        let _this = this;
        return {
            hours: _this.getAngleFor(HAND_HOURS),
            minutes: _this.getAngleFor(HAND_MINUTES),
            seconds: _this.getAngleFor(HAND_SECONDS)
        };
    }

    render() {
        let angles = this.getAngles();

        return (
            <div className={ this.props.analogClockClassName }>
                <div className={ this.props.dialClassName }>
                    <div className={ this.props.hoursHandClassName } style={ angles.hours }></div>
                    <div className={ this.props.minutesHandClassName } style={ angles.minutes }></div>
                    <div className={ this.props.secondsHandClassName } style={ angles.seconds }></div>
                </div>
            </div>
        );
    }
};
