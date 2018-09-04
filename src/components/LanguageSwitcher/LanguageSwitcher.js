import React from "react";
import classnames from "classnames";
import {connect} from "react-redux";
import {injectIntl} from "react-intl";
import $ from "jquery";

import messages from "../../i18n/messages";
import {SUPPORTED_LANG} from "../../i18n/supportedLanguages";

import {setLanguage} from "./../../actions/ApplicationActions";

import flagDE from "./img/flags/de-DE.png";
import flagEN from "./img/flags/en-GB.png";

import "./LanguageSwitcher.css";

class LanguageSwitcher extends React.PureComponent {

    componentDidMount() {
        $("[data-toggle='tooltip']").tooltip();
    }

    setLanguage(lang) {
        this.props.dispatch(setLanguage(lang));
        $("[data-toggle='tooltip']").tooltip("dispose");
    }

    render() {
        const imgMapping = {
                "de": flagDE,
                "en": flagEN
            },
            {currentLanguage, intl: {formatMessage}} = this.props;
        return (
            <ul className="language-switcher">
                {SUPPORTED_LANG.map(lang => {
                    return <li onClick={this.setLanguage.bind(this, lang)} className={classnames({"current": currentLanguage === lang})} data-toggle="tooltip" data-placement="bottom" title={formatMessage(messages['language.'+lang])} key={lang}><img src={imgMapping[lang]} alt={lang.toUpperCase()}/></li>;
                })}
            </ul>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        currentLanguage: state.application.language
    };
}
export default connect(mapStateToProps)(injectIntl(LanguageSwitcher));