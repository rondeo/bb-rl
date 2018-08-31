import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import $ from "jquery";

import Link from "../../components/Link/Link";

import "./SquareCard.css";

export default class SquareCard extends PureComponent {

    componentDidMount() {
        let card = $(this.refs.card);
        card.height(card.width());
    }

    render() {
        let {children, image, alt, text, linkTo, linkText, linkDisabled} = this.props;
        let moreText = linkText || "mehr erfahren";
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