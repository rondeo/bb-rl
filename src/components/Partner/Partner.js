import React from 'react';

import Footer from './../Footer/Footer';

import MMOGA_IMG from './img/Twitch_Support_MMOGA_DE.png';

export default class Partner extends React.PureComponent {
    render() {
        return (
            <div className="section partner">
                <div className="container">
                    <div className="inner">
                        <h2>Unsere Partner und unser Support!</h2>

                        <div className="row">
                            <div className="col-12 col-sm-6 col-md-4">
                                <a href="https://www.mmoga.de" target="_blank" rel="noopener noreferrer"><img src={MMOGA_IMG} alt="MMOGA"/></a>
                                <p>
                                    <strong>Du möchtest unseren Stream und die Webseite unterstützen? Kauf deine Spiele,
                                        Gamecards, Coins uvm. einfach bei MMOGA!</strong>
                                </p>
                                <p>
                                    Jeder Kauf über unseren MMOGA Partner-Link unterstützt uns und kostet dich keinen Cent
                                    mehr! Egal ob aktuelle Top-Games, Gamecards, Gold oder Coins - MMOGA hat immer die
                                    besten Deals! Schau doch mal vorbei!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="scroll-up"><i className="fa fa-chevron-up"/>nach oben</div>

                <Footer/>
            </div>
        );
    }
}