import React from "react";
import {Helmet} from "react-helmet";
import {FormattedHTMLMessage, injectIntl} from "react-intl";

import messages from "../../i18n/messages";

import banner from "./Streamingzeiten.png";

import "./StreamTimes.css";

class StreamTimes extends React.PureComponent {
    render() {
        const {intl:{formatMessage}} = this.props;
        return (
            <div className="stream-times">
                <Helmet><title>{formatMessage(messages.streamSchedule)} - Battleground-Bulls</title></Helmet>

                <img src={banner} alt={formatMessage(messages.streamSchedule)} />

                <ul>
                    <li>
                        <div className="day">{formatMessage(messages.tuesday)}</div>
                        <div className="time">{formatMessage(messages.circa)} 19:30 {formatMessage(messages.to)} 23:00 {formatMessage(messages.clock)}</div>
                    </li>
                    <li>
                        <div className="day">{formatMessage(messages.thursday)}</div>
                        <div className="time">{formatMessage(messages.circa)} 19:30 {formatMessage(messages.to)} 23:00 {formatMessage(messages.clock)}</div>
                    </li>
                    <li>
                        <div className="day">{formatMessage(messages.sunday)}</div>
                        <div className="time">{formatMessage(messages.circa)} 16:00 {formatMessage(messages.to)} 22:00 {formatMessage(messages.clock)}</div>
                    </li>
                </ul>

                <div className="note"><FormattedHTMLMessage {...messages.streamScheduleNote} /></div>
            </div>
        );
    }
}

export default injectIntl(StreamTimes);