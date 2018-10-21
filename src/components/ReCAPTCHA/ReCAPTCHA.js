import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";

import API from "../../utils/API";

export default class ReCAPTCHA extends React.PureComponent {

    static loaded = false;

    constructor(props) {
        super(props);

        this.state = { loaded: false };

        this.id = "recaptcha-" + Math.random().toString(36).substr(2, 9);
        this.onLoad = this.onLoad.bind(this);
        this.verifyUserResponse = this.verifyUserResponse.bind(this);
    }

    handleScriptInject({ scriptTags }) {
        if (scriptTags) {
            const scriptTag = scriptTags[0];
            scriptTag.onload = this.onLoad;
        }
    }

    onLoad() {
        // Now we define our ReCAPTCHA
        const { grecaptcha } = window;
        if (grecaptcha && grecaptcha.render) {
            clearTimeout(this.timeout);
            grecaptcha.render(this.id, {
                sitekey  : '6LfTVGIUAAAAAIT0BHzvaoLEC2n05HPQq8bgz4CI',
                size     : 'invisible',
                callback : this.verifyUserResponse
            });
        } else if (typeof this.timeout === "undefined") {
            this.timeout = setTimeout(this.onLoad, 500);
        }
    };

    verifyUserResponse(userResponse) {
        this.setState({ loaded: true});
        ReCAPTCHA.loaded = true;
        API.getInstance()._fetch("/user/verifyRecaptchaResponse/" + userResponse).then(json => {
            this.props.callback(json);
        });
    }

    // Runs once the form is submitted
    static execute(e) {
        e.preventDefault();
        const { grecaptcha } = window;
        if (grecaptcha.execute) {
            ReCAPTCHA.reset();
            grecaptcha.execute();
        }
    };

    static reset() {
        const { grecaptcha } = window;
        if (grecaptcha.reset) {
            grecaptcha.reset();
        }
    }

    render () {
        return (
            <div>
                <Helmet onChangeClientState={(newState, addedTags) => this.handleScriptInject(addedTags)}>
                    <script src="https://www.google.com/recaptcha/api.js" async defer />
                </Helmet>
                <div id={this.id} />
            </div>
        );
    }
}
ReCAPTCHA.propTypes = {
    callback: PropTypes.func.isRequired
};