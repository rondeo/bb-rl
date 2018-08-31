import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import {injectIntl} from "react-intl";

import messages from "../../i18n/messages";

import "./ServerDetailView.css";

class ServerDetailView extends React.PureComponent {
    render() {
        const {
            className,
            intl:{formatMessage},
            ipAddress,
            port,
            serverName,
            slots
        } = this.props;
        return (
            <div className={classNames("server-detail-view", className)}>
                <div className="row">
                    <div className="col-12 col-sm-8">
                        <div className="head">{formatMessage(messages.serverName)}</div>
                        <div className="text server-name" data-toggle="tooltip" data-placement="bottom" title={serverName}>{serverName}</div>
                    </div>
                    <div className="col-12 col-sm-4">
                        <div className="head">{formatMessage(messages.player)}</div>
                        <div className="text">{slots}</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-4">
                        <div className="head">{formatMessage(messages.ipAddress)}</div>
                        <div className="text">{ipAddress}</div>
                    </div>
                    <div className="col-12 col-sm-4">
                        <div className="head">{formatMessage(messages.port)}</div>
                        <div className="text">{port}</div>
                    </div>
                    <div className="col-12 col-sm-4">
                        <div className="head">{formatMessage(messages.status)}</div>
                        <div className="text status">{formatMessage(messages.online)}</div>
                    </div>
                </div>
            </div>
        );
    }
}

ServerDetailView.propTypes = {
    className: PropTypes.string,
    ipAddress: PropTypes.string.isRequired,
    port: PropTypes.string.isRequired,
    serverName: PropTypes.string.isRequired,
    slots: PropTypes.oneOfType(
        PropTypes.string,
        PropTypes.number
    )
};

export default injectIntl(ServerDetailView);