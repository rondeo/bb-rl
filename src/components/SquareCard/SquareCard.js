import React, {PureComponent} from "react";
import classnames from "classnames";
import {injectIntl} from "react-intl";
import PropTypes from "prop-types";
import $ from "jquery";

import messages from "../../i18n/messages";

import Link from "../../components/Link/Link";

import "./SquareCard.css";

class SquareCard extends PureComponent {

    componentDidMount() {
        let card = $(this.refs.card);
        card.height(card.width());
    }

    render() {
        const {children, image, alt, text, linkTo, linkText, linkDisabled, intl:{formatMessage}} = this.props;
        let moreText = linkText || formatMessage(messages.readMore);
        return (
            <div className="square-card" ref="card">
                {children ? children : (
                    <div className="content">
                        {image ? <img src={image} alt={alt ? alt : ""}/> : null}
                        <div className="text">
                            {text}
                        </div>
                        <Link messageId={linkTo} className={classnames({"disabled": linkDisabled})}>{moreText}</Link>
                    </div>
                )
                }
            </div>
        );
    }
}

SquareCard.propTypes = {
    image: PropTypes.string,
    alt: PropTypes.string,
    text: PropTypes.string,
    linkTo: PropTypes.any,
    linkText: PropTypes.string,
    linkDisabled: PropTypes.bool
};

export default injectIntl(SquareCard);