import React from 'react';
import {Link} from 'react-router-dom';

export default class NotFound extends React.PureComponent {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className="container not-found">
                <h1>Seite wurde leider nicht gefunden</h1>
                <Link to="/">Zurück zur Startseite</Link>
            </div>
        );
    }
}