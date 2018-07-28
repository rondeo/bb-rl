import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

import "./ReadMore.css";

export default class ReadMore extends React.PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            expanded: props.expanded || false
        };
    }
    toggle() {
        let expanded = this.state.expanded;

        if (this.props.onExpand && !expanded) {
            this.props.onExpand();
        }

        this.setState({ expanded: !expanded });
    }

    render() {
        let { expanded } = this.state;
        return (
            <div ref="wrapper" className={classnames("read-more-wrapper", this.props.className, {"expanded": expanded})}>
                <p>{this.props.children}</p>
                <button ref="button" onClick={this.toggle.bind(this)}>{expanded ? "Weniger lesen" : "Mehr lesen"}</button>
            </div>
        );
    }
}
ReadMore.propTypes = {
    children: PropTypes.string.isRequired,
    className: PropTypes.string,
    expanded: PropTypes.bool,
    onExpand: PropTypes.func
};