import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery';

import Counter from '../../components/Counter/Counter';

import './Home.css';

import logoSchriftzug from './../../images/logo-schriftzug_600px.png';

export default class Home extends PureComponent {

    componentDidMount() {
        window.scrollTo(0, 0);

        $("#fullpage").fullpage({
            anchors: ["start", /*"teams", "spielplan",*/ "bulls", "regeln"]
        });

        $(".scroll-down").on("click", function () {
            $.fn.fullpage.moveSectionDown();
        });
        $(".scroll-up").on("click", function () {
            $.fn.fullpage.moveTo(1);
        });
    }

    render() {
        return (
            <div id="fullpage" className="container-fluid home">

                <div className="section start">
                    <div className="container">
                        <div className="inner">
                            <img src={logoSchriftzug} alt="Battleground Bulls"/>
                            <div className="text">Nächstes<br/>Turnier in</div>
                            <Counter />
                            <button className="btn primary"><Link to="https://goo.gl/KEBC8z" target="_blank" rel="noopener noreferrer">Jetzt anmelden</Link></button>
                        </div>
                    </div>

                    <div className="scroll-down"><i className="fa fa-chevron-down" />weiter scrollen</div>
                </div>

                <div className="section bulls">
                    <div className="container">
                        <h2>Über die Bulls</h2>
                        <p>
                            Eos aut eaqui doluptur aut illam natenest dolupta doluptatem fugia vel moluptatque ipiet autem
                            asrqgge inctemquam quae am, temolor emporia nullo cones estisimet.
                        </p>

                    </div>

                    <div className="scroll-down"><i className="fa fa-chevron-down" />weiter scrollen</div>
                </div>

                <div className="section regeln">
                    <div className="container">
                        <h2>Turnier-Regeln</h2>
                        <p>
                            Eos aut eaqui doluptur aut illam natenest dolupta doluptatem fugia vel moluptatque ipiet autem
                            asrqgge inctemquam quae am, temolor emporia nullo cones estisimet.
                        </p>
                    </div>

                    <div className="scroll-up"><i className="fa fa-chevron-up" />nach oben</div>
                </div>
            </div>
        );
    }
}