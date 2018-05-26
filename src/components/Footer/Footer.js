import React, { PureComponent } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import './Footer.css';

class Footer extends PureComponent {
    render() {
        return (
            <footer id="footer">
                <div className="container">
                    <NavLink to="/datenschutz" activeClassName="active">Datenschutz</NavLink>
                    <NavLink to="/impressum" activeClassName="active">Impressum</NavLink>
                    <NavLink to="/rl-overlay">RL Overlay</NavLink>
                    {/*<NavLink to="/kontakt" activeClassName="active">Kontakt</NavLink>*/}
                </div>
            </footer>
        );
    }
}
export default withRouter(Footer);