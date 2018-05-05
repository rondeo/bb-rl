import React from 'react';

export default class TournamentList extends React.PureComponent {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className="container">
                <h1>Turniere</h1>
            </div>
        );
    }
}