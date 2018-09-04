import React from "react";
import {injectIntl} from "react-intl";
import PropTypes from "prop-types";
import ReactLink from "react-router-dom/Link";

import messages from "../../i18n/messages";

class Link extends React.PureComponent {
    constructPath() {
        let path = "/";
        const {intl: {formatMessage}, hash, messageId, params, to} = this.props;
        if (messageId) {
            path = formatMessage(messages[messageId]);
            for (let key in params) {
                if (params.hasOwnProperty(key)) {
                    path = path.replace(":" + key, params[key] ? params[key] : "");
                }
            }
            path = path.replace(/\(*:.*\)/g, '').replace(/\?/g, "");
            path = path.substr(-1) === '/' ? path.substr(0, path.length - 1) : path;
            if (path.substr(0, 1) !== '/') {
                path = "/" + path;
            }
            if (hash) {
                path += "/#" + hash;
            }
        } else {
            path = to;
        }
        return path;
    }

    render() {
        const { className, children, messageId, to } = this.props;
        let linkProps = Object.assign({}, this.props);

        delete linkProps.messageId;
        delete linkProps.intl;

        if (messageId && messageId.indexOf("http") !== -1) {
            return <a className={className} href={messageId}>{children}</a>;
        }

        if (to && typeof to === "string" && to.indexOf("http") !== -1) {
            return <a className={className} href={to}>{children}</a>;
        }

        return (
            <ReactLink
                {...linkProps}
                to={this.constructPath()}
            >{children}</ReactLink>
        );
    }
}

Link.propTypes = {
    children: PropTypes.any.isRequired,
    className: PropTypes.string,
    hash: PropTypes.string,
    messageId: PropTypes.string,
    params: PropTypes.object,
    to: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ])
};
export default injectIntl(Link);