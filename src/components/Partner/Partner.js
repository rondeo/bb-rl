import React from 'react';
import messages from "../../i18n/messages";
import {FormattedHTMLMessage, FormattedMessage, injectIntl} from "react-intl";

import Footer from './../Footer/Footer';

import MMOGA_IMG from './img/Twitch_Support_MMOGA_DE.png';
import Runtime_IMG from './img/Logo_Runtime_GG.png';
import Merch_IMG from './img/Merch-Shop-Logo.png';

import './Partner.css';


class Partner extends React.PureComponent {

    render() {
        const { intl:{formatMessage} } = this.props;
        return (
            <div className="section partner">
                <div className="container">
                    <div className="inner">
                        <h2 className="text-center">{formatMessage(messages.partnerHead)}</h2>

                        <div className="row">
                            <div className="col-12 col-sm-6 col-md-4">
                                <a href="https://www.mmoga.de/?ref=29428" target="_blank" rel="noopener noreferrer"><img src={MMOGA_IMG} alt="MMOGA"/></a>
                                <p>
                                    <strong>{formatMessage(messages.partnerMmogaHead)}</strong>
                                </p>
                                <p>
                                    {formatMessage(messages.partnerMmogaContent)}
                                </p>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 runtime">
                                <a href="https://runtime.idevaffiliate.com/780-1-3-2.html" target="_blank" rel="noopener noreferrer"><img src={Runtime_IMG} alt="Runtime.gg"/></a>
                                <p>
                                    <strong>{formatMessage(messages.partnerRuntimeHead)}</strong>
                                </p>
                                <p>
                                    {formatMessage(messages.partnerRuntimeContent)}
                                </p>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 merch-shop">
                                <a href="https://shop.spreadshirt.de/Battleground-Bulls/" target="_blank" rel="noopener noreferrer"><img src={Merch_IMG} alt="Merch-Shop"/><h2>{formatMessage(messages.partnerMerchHead)}</h2></a>
                                <p>
                                    <strong>{formatMessage(messages.partnerMerchContent)}<a className="link-light" href="https://shop.spreadshirt.de/Battleground-Bulls/" target="_blank" rel="noopener noreferrer">{formatMessage(messages.partnerMerchHead)}</a>!</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="scroll-up"><i className="fa fa-chevron-up"/>{formatMessage(messages.goUp)}</div>

                <Footer/>
            </div>
        );
    }
}

export default injectIntl(Partner);