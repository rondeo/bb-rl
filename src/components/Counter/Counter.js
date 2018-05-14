import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './Counter.css';

export default class Counter extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            distance: 0
        };
    }

    componentDidMount() {
        this.setCounter = this.setCounter.bind(this);
        this.endCallback = this.endCallback.bind(this);

        this.setCounter();

        // Update the count down every second
        this.timer = setInterval(this.setCounter, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    endCallback() {
        if (this.props.endCallback)
            this.props.endCallback();
    }

    setCounter() {
        // Set the date we're counting down to
        // TODO: Get Date from Database
        let countDownDate = new Date("May 27, 2018 16:15:00").getTime();

        // Get todays date and time
        let now = new Date().getTime();

        // Find the distance between now an the count down date
        let distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        this.setState({
            days: this.setDoubleDigit(Math.floor(distance / (1000 * 60 * 60 * 24))),
            hours: this.setDoubleDigit(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))),
            minutes: this.setDoubleDigit(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))),
            seconds: this.setDoubleDigit(Math.floor((distance % (1000 * 60)) / 1000)),
            distance: distance
        });

        // If the count down is finished, write some text
        if (distance <= 0) {
            clearInterval(this.timer);
            this.endCallback();
        }
    }

    setDoubleDigit(n) {
        if (n < 10) {
            return "0" + n;
        }
        return n;
    }

    render() {
        let {days, hours, minutes, seconds, distance} = this.state;
        return (
            <div className={classnames("counter", {"ended": distance <= 0})}>
                {distance > 0 ? (
                    <table>
                        <thead>
                        <tr>
                            <th>Tage</th>
                            <th>Stunden</th>
                            <th>Minuten</th>
                            <th>Sekunden</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>{days}</td>
                            <td>{hours}</td>
                            <td>{minutes}</td>
                            <td>{seconds}</td>
                        </tr>
                        </tbody>
                    </table>
                ) : (
                    <div className="ended">Das Turnier läuft bereits!</div>
                )}
            </div>
        );
    }
}

Counter.propTypes = {
    endCallback: PropTypes.any
};