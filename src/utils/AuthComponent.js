import React from 'react';
import Redirect from 'react-router-dom/Redirect';
import {connect} from "react-redux";

export default function requireAuthentication(ChildComponent, role = null) {
    class AuthComponent extends React.PureComponent {
        render() {
            let { user } = this.props;
            let render = <Redirect push={true} to={"/login" + (this.props.location.pathname !== "" ? '?next=' + this.props.location.pathname : "")}/>;
            if (user !== null) {
                render = <ChildComponent {...this.props} />;
            }
            if (role && user && user.role && user.role.role !== role) {
                render = <Redirect push={true} to={"/login" + "?role=" + role + (this.props.location.pathname !== "" ? '&next=' + this.props.location.pathname : "")}/>;
            }
            return render;
        }
    }
    function mapStateToProps(state) {
        return { user: state.user };
    }
    return connect(mapStateToProps)(AuthComponent);
}