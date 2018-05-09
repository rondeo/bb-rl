import React from 'react';

import Footer from './../Footer/Footer';

import MMOGA_IMG from './img/Twitch_Support_MMOGA_DE.png';
import Runtime_IMG from './img/Logo_Runtime_GG.png';
import Merch_IMG from './img/Merch-Shop-Logo.png';

import './Partner.css';

export default class Partner extends React.PureComponent {
    render() {
        return (
            <div className="section partner">
                <div className="container">
                    <div className="inner">
                        <h2 className="text-center">Unterstütze die Battleground Bulls und kaufe über diese Links</h2>

                        <div className="row">
                            <div className="col-12 col-sm-6 col-md-4">
                                <a href="https://www.mmoga.de/?ref=29428" target="_blank" rel="noopener noreferrer"><img src={MMOGA_IMG} alt="MMOGA"/></a>
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
                            <div className="col-12 col-sm-6 col-md-4 runtime">
                                <a href="https://runtime.idevaffiliate.com/780-1-3-2.html" target="_blank" rel="noopener noreferrer"><img src={Runtime_IMG} alt="Runtime.gg"/></a>
                                <p>
                                    <strong>Eat, play and win!</strong>
                                </p>
                                <p>
                                    Schnelle, gesunde und praktische Mahlzeiten.
                                </p>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 merch-shop">
                                <a href="https://shop.spreadshirt.de/Battleground-Bulls/" target="_blank" rel="noopener noreferrer"><img src={Merch_IMG} alt="Merch-Shop"/><h2>Merch-Shop</h2></a>
                                <p>
                                    <strong>Du möchtest unseren Stream und die Webseite unterstützen? Kaufe stylische Kleidung in unserem <a href="https://shop.spreadshirt.de/Battleground-Bulls/" target="_blank" rel="noopener noreferrer">Merch-Shop</a>!</strong>
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