import React from 'react';
import Redirect from 'react-router-dom/Redirect';
import {connect} from "react-redux";

export default function requireAuthentication(ChildComponent) {
    class AuthComponent extends React.PureComponent {
        render() {
            return this.props.user !== null ? (<ChildComponent {...this.props} />) : <Redirect push={true} to={"/login" + (this.props.location.pathname !== "" ? '?next=' + this.props.location.pathname : "")}/>;
        }
    }
    function mapStateToProps(state) {
        return { user: state.user };
    }
    return connect(mapStateToProps)(AuthComponent);
}