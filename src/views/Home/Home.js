import React, {PureComponent} from 'react';
import $ from 'jquery';

import './Home.css';

import bg from './img/rl-bg.jpg';
import logo from './img/logo.png';

export default class Home extends PureComponent {

    componentDidMount() {
        window.scrollTo(0, 0);
        let $bgImage = $(".home img.background");

        $bgImage.one("load", setBannerHeight).each(function () {
            if (this.complete) $(this).load();
        });

        $(window).resize(setBannerHeight);

        function setBannerHeight() {
            $(".home .banner").height($bgImage.height() - $("nav.navbar").height());
        }

        /*
        let clock = $(".counter").FlipClock(3600 * 24 * 3, {
            clockFace: "DailyCounter",
            countdown: true,
            showSeconds: false
        });
        */


        let $counter = $(".counter");

        // Set the date we're counting down to
        // TODO: Get Date from Database
        let countDownDate = new Date("April 29, 2018 16:15:00").getTime();

        setCounter();

        // Update the count down every second
        let x = setInterval(setCounter, 1000);

        function setCounter() {

            // Get todays date and time
            let now = new Date().getTime();

            // Find the distance between now an the count down date
            let distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Display the result in the element with id="demo"
            $counter.html(days + ":" + hours + ":" + minutes + ":" + seconds);

            // If the count down is finished, write some text
            if (distance < 0) {
                clearInterval(x);
                $counter.html("Turnier läuft!");
            }
        }
    }

    render() {
        return (
            <div className="container-fluid home">
                <img className="background" src={bg} alt=""/>

                <div className="banner">
                    <div className="inner">
                        <img src={logo} alt="Battleground Bulls"/>
                        <div className="text">Nächstes<br/>Turnier in</div>
                        <div className="counter"/>
                        <button className="btn primary">Jetzt anmelden</button>
                    </div>
                </div>
            </div>
        );
    }
}