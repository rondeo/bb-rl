import React from 'react';
import Redirect from 'react-router-dom/Redirect';

export default function requireAuthentication(ChildComponent) {
    return class AuthComponent extends React.PureComponent {

        constructor(props) {
            super(props);
            this.state = {
                user: JSON.parse(sessionStorage.getItem("user"))
            };
            console.log("construct auth");
        }

        render() {
            return this.state.user !== null ? (<ChildComponent {...this.props} />) : <Redirect push={true} to={"/login" + (this.props.location.pathname !== "" ? '?next=' + this.props.location.pathname : "")}/>;
        }
    }
}