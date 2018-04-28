import React, {PureComponent} from "react";
import $ from "jquery";

import './Counter.css';

export default class Counter extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        };
    }

    componentDidMount() {
        this.setCounter = this.setCounter.bind(this);
        this.setCounter();

        // Update the count down every second
        this.timer = setInterval(this.setCounter, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    setCounter() {
        // Set the date we're counting down to
        // TODO: Get Date from Database
        let countDownDate = new Date("April 28, 2018 16:15:00").getTime();

        // Get todays date and time
        let now = new Date().getTime();

        // Find the distance between now an the count down date
        let distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        this.setState({
            days: this.setDoubleDigit(Math.floor(distance / (1000 * 60 * 60 * 24))),
            hours: this.setDoubleDigit(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))),
            minutes: this.setDoubleDigit(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))),
            seconds: this.setDoubleDigit(Math.floor((distance % (1000 * 60)) / 1000))
        });

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(this.timer);
            $(".counter").html("Turnier läuft!");
        }
    }

    setDoubleDigit(n) {
        if (n < 10) {
            return "0" + n;
        }
        return n;
    }

    render() {
        let { days, hours, minutes, seconds } = this.state;
        return (
            <div className="counter">
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
            </div>
        );
    }
}