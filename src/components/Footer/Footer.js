import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';

export default class Footer extends PureComponent {
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="float-left">
                        <span className="text-muted">© Battleground Bulls 2018</span>
                    </div>
                    <div className="float-right">
                        <Link to="/impressum">Impressum</Link>
                    </div>
                </div>
            </footer>
        );
    }
}