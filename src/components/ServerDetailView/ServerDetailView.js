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
            isSteamServer,
            password,
            port,
            serverName,
            slots
        } = this.props;
        return (
            <div className={classNames("server-detail-view", className)}>
                <div className="row">
                    <div className="col-12 col-sm-9">
                        <div className="head">{formatMessage(messages.serverName)}</div>
                        <span className="text server-name" data-toggle="tooltip" data-placement="bottom" title={serverName}>{serverName}</span>
                    </div>
                    <div className="col-12 col-sm-3">
                        <div className="head">{formatMessage(messages.player)}</div>
                        <span className="text">{slots}</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-5">
                        <div className="head">{formatMessage(messages.ipAddress)} : {formatMessage(messages.port)}</div>
                        {isSteamServer ? (
                            <a href={"steam://connect/" + ipAddress + ":" + port} className="text">{ipAddress}:{port}</a>
                        ) : (
                            <span className="text">{ipAddress}:{port}</span>
                        )}
                    </div>
                    {password ?
                    <div className="col-12 col-sm-4">
                        <div className="head">{formatMessage(messages.password)}</div>
                        <span className="text password">{password}</span>
                    </div> : null }
                    <div className="col-12 col-sm-3">
                        <div className="head">{formatMessage(messages.status)}</div>
                        <span className="text status">{formatMessage(messages.online)}</span>
                    </div>
                </div>
            </div>
        );
    }
}

ServerDetailView.propTypes = {
    className: PropTypes.string,
    ipAddress: PropTypes.string.isRequired,
    isSteamServer: PropTypes.bool,
    password: PropTypes.string,
    port: PropTypes.string.isRequired,
    serverName: PropTypes.string.isRequired,
    slots: PropTypes.oneOfType(
        PropTypes.string,
        PropTypes.number
    )
};

export default injectIntl(ServerDetailView);