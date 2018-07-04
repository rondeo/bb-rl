import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";

export default class ReCAPTCHA extends React.PureComponent {

    constructor(props) {
        super(props);

        this.id = "recaptcha-" + Math.random().toString(36).substr(2, 9);
        this.onLoad = this.onLoad.bind(this);
    }

    componentDidMount() {
        // Create a script to make sure the ReCAPTCHA API is called.
        const script = document.createElement('script');
        script.text = `
            var onloadCallback = function() {
                console.log('grecaptcha is ready');
            };
        `;
        document.body.appendChild(script);

        // We will render ReCAPTCHA after the page is loaded,
        // because we want to bind our own submit methods.
        if (document.readyState !== "complete") {
            window.addEventListener("load", this.onLoad);
        } else {
            this.onLoad();
        }
    }

    componentWillUnmount() {
        window.removeEventListener("load", this.onLoad);
    }

    onLoad() {
        // Now we define our ReCAPTCHA
        if (window.grecaptcha) {
            const { grecaptcha } = window;
            grecaptcha.render(this.id, {
                sitekey  : '6LfTVGIUAAAAAIT0BHzvaoLEC2n05HPQq8bgz4CI',
                size     : 'invisible',
                callback : this.props.callback
            });
        }
    };

    // Runs once the form is submitted
    static execute(e) {
        e.preventDefault();
        const { grecaptcha } = window;
        grecaptcha.execute();
    };


    render () {
        return (
            <div>
                <Helmet>
                    <script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit" async defer />
                </Helmet>
                <div id={this.id} />
            </div>
        );
    }
}
ReCAPTCHA.propTypes = {
    callback: PropTypes.func.isRequired
};