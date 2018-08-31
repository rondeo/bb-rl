import React, { PureComponent } from "react";
import {injectIntl} from "react-intl";
import { NavLink, withRouter } from "react-router-dom";

import messages from "../../i18n/messages";

import "./Footer.css";

class Footer extends PureComponent {
    render() {
        const {intl:{formatMessage}} = this.props;
        return (
            <footer id="footer">
                <div className="container">
                    <NavLink to={formatMessage(messages["route.privacy"])} activeClassName="active">Datenschutz</NavLink>
                    <NavLink to={formatMessage(messages["route.imprint"])} activeClassName="active">Impressum</NavLink>
                    {/*<NavLink to="/kontakt" activeClassName="active">Kontakt</NavLink>*/}
                </div>
            </footer>
        );
    }
}
export default withRouter(injectIntl(Footer));