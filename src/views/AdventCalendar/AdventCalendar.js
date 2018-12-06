import React from "react";
import {Helmet} from "react-helmet";
import {injectIntl} from "react-intl";
import $ from "jquery";

import "./AdventCalendar.css";
import messages from "../../i18n/messages";

class AdventCalendar extends React.PureComponent {

    componentDidMount() {
        $("main").css("overflow-x", "hidden");
    }

    componentWillUnmount() {
        $("main").css("overflow-x", "unset");
    }

    render() {
        const {intl:{formatMessage}} = this.props;
        return (
            <div id="advent-calendar" className="view full-container">
                <Helmet>
                    <title>{formatMessage(messages.adventCalendar)} - Battleground-Bulls</title>
                    <script src="/js/advent-calendar.js" async defer />
                </Helmet>

                <div className="calendar-wrap">
                    <div className="calendar">
                        <div className="cube" data-active data-bg-color="#0c283e" data-title="The Escapists"></div>
                        <div className="cube" data-active data-bg-color="#e31d3c" data-title="LEGO Fluch der Karibik"></div>
                        <div className="cube" data-active data-bg-color="#081a29" data-title="Tembo - Badass Elefant"></div>
                        <div className="cube" data-active data-bg-color="#9e1d38" data-title="Murderous Pursuits"></div>
                        <div className="cube" data-active data-bg-color="#0c283e" data-title="Life is Strange EP 1-5"></div>
                        <div className="cube" data-active data-bg-color="#e31d3c" data-title="Tomb Raider"></div>
                        <div className="cube" data-inactive data-bg-color="#081a29" data-title="ist bald verfügbar"></div>
                        <div className="cube" data-inactive data-bg-color="#9e1d38" data-title="ist bald verfügbar"></div>
                        <div className="cube" data-inactive data-bg-color="#0c283e" data-title="ist bald verfügbar"></div>
                        <div className="cube" data-inactive data-bg-color="#e31d3c" data-title="ist bald verfügbar"></div>
                        <div className="cube" data-inactive data-bg-color="#081a29" data-title="ist bald verfügbar"></div>
                        <div className="cube" data-inactive data-bg-color="#9e1d38" data-title="ist bald verfügbar"></div>
                        <div className="cube" data-inactive data-bg-color="#0c283e" data-title="ist bald verfügbar"></div>
                        <div className="cube" data-inactive data-bg-color="#e31d3c" data-title="ist bald verfügbar"></div>
                        <div className="cube" data-inactive data-bg-color="#081a29" data-title="ist bald verfügbar"></div>
                        <div className="cube" data-inactive data-bg-color="#9e1d38" data-title="ist bald verfügbar"></div>
                        <div className="cube" data-inactive data-bg-color="#0c283e" data-title="ist bald verfügbar"></div>
                        <div className="cube" data-inactive data-bg-color="#e31d3c" data-title="ist bald verfügbar"></div>
                        <div className="cube" data-inactive data-bg-color="#081a29" data-title="ist bald verfügbar"></div>
                        <div className="cube" data-inactive data-bg-color="#9e1d38" data-title="ist bald verfügbar"></div>
                        <div className="cube" data-inactive data-bg-color="#0c283e" data-title="ist bald verfügbar"></div>
                        <div className="cube" data-inactive data-bg-color="#e31d3c" data-title="ist bald verfügbar"></div>
                        <div className="cube" data-inactive data-bg-color="#081a29" data-title="ist bald verfügbar"></div>
                        <div className="cube" data-inactive data-bg-color="#9e1d38" data-title="ist bald verfügbar"></div>
                    </div>
                    <div className="content">
                        <div className="content__block">
                            <h3 className="content__title">The Escapists</h3>
                            <p className="content__description">„The Escapists“ bietet die Gelegenheit, einen heiteren Einblick in das alltägliche Gefängnisleben zu erhalten. Hauptziel aller Häftlinge ist natürlich die Flucht!</p>
                            <p className="content__meta">Gewinner - Justendo</p>
                        </div>
                        <div className="content__block">
                            <h3 className="content__title">LEGO® Pirates of the Caribbean: The Video Game</h3>
                            <p className="content__description">LEGO® Pirates of the Caribbean: The Video Game is an action adventure game that brings the Pirates of the Caribbean world and all its colorful characters to life in LEGO Brick form. Players experience all the memorable scenes from all four films in the humorous and quirky LEGO Video Games style.</p>
                            <p className="content__meta">Gewinner - SDMadNess</p>
                        </div>
                        <div className="content__block">
                            <h3 className="content__title">Tembo - Badass Elefant</h3>
                            <p className="content__description">In Shell City wurde nach einem verheerenden Angriff der PHANTOM-Streitkräfte der Notstand ausgerufen. Schreckliche Kriegsmaschinen, mit Totenköpfen dekoriert, terrorisieren die Stadt und hinterlassen nichts als Zerstörung! Die Nationalgarde steht den Eindringlingen hilflos gegenüber und deshalb zieht General Krenman im Kampf gegen das Böse seinen letzten Trumpf.</p>
                            <p className="content__meta">Gewinner - v!ruZ</p>
                        </div>
                        <div className="content__block">
                            <h3 className="content__title">Murderous Pursuits</h3>
                            <p className="content__description">Murderous Pursuits ist ein Stealth-Spiel für 1 bis 8 Spieler in dem es heißt: töten oder getötet werden! Verfolge clever dein Ziel, in der viktorianischen Zeit Gejagter genannt, um dann zum perfekten Zeitpunkt zuzuschlagen. Doch sei auf der Hut und gib dich den anderen Spielern, die dich jagen, nicht zu erkennen!</p>
                            <p className="content__meta">Gewinner - ExTorIalS</p>
                        </div>
                        <div className="content__block">
                            <h3 className="content__title">Life is Strange Episode 1-5</h3>
                            <p className="content__description">Life Is Strange ist ein preisgekröntes und von Kritikern gefeiertes Abenteuerspiel in Episoden, das dem Spieler erlaubt, die Zeit zurückzudrehen und so Vergangenheit, Gegenwart und Zukunft zu beeinflussen.</p>
                            <p className="content__meta">Gewinner - MrsMadneSS</p>
                        </div>
                        <div className="content__block">
                            <h3 className="content__title">Tomb Raider</h3>
                            <p className="content__description">Tomb Raider erzählt die aufregende Geschichte von Lara Croft und ihrem Aufstieg zur knallharten Überlebenskünstlerin.</p>
                            <p className="content__meta">Gewinner - Jan</p>
                        </div>
                        <div className="content__block">
                            <h3 className="content__title">Tag 7</h3>
                            <p className="content__description">Normal is getting dressed in clothes that you buy for
                                work and driving through traffic in a car that you are still paying for - in order to
                                get to the job you need to pay for the clothes and the car, and the house you leave
                                vacant all day so you can afford to live in it.</p>
                            <p className="content__meta">Ellen Goodman</p>
                        </div>
                        <div className="content__block">
                            <h3 className="content__title">Tag 8</h3>
                            <p className="content__description">The reality of loving God is loving him like he's a
                                Superhero who actually saved you from stuff rather than a Santa Claus who merely gave
                                you some stuff.</p>
                            <p className="content__meta">Criss Jami</p>
                        </div>
                        <div className="content__block">
                            <h3 className="content__title">Tag 9</h3>
                            <p className="content__description">Every increased possession loads us with new
                                weariness.</p>
                            <p className="content__meta">John Ruskin</p>
                        </div>
                        <div className="content__block">
                            <h3 className="content__title">Tag 10</h3>
                            <p className="content__description">The Christmas tree, twinkling with lights, had a
                                mountain of gifts piled up beneath it, like offerings to the great god of excess.</p>
                            <p className="content__meta">Tess Gerritsen</p>
                        </div>
                        <div className="content__block">
                            <h3 className="content__title">Tag 11</h3>
                            <p className="content__description">Whoever prefers the material comforts of life over
                                intellectual wealth is like the owner of a palace who moves into the servants' quarters
                                and leaves the sumptuous rooms empty.</p>
                            <p className="content__meta">Marie von Ebner-Eschenbach</p>
                        </div>
                        <div className="content__block">
                            <h3 className="content__title">Tag 12</h3>
                            <p className="content__description">An attitude to life which seeks fulfilment in the
                                single-minded pursuit of wealth - in short, materialism - does not fit into this world,
                                because it contains within itself no limiting principle, while the environment in which
                                it is placed is strictly limited.</p>
                            <p className="content__meta">Ernst F. Schumacher</p>
                        </div>
                        <div className="content__block">
                            <h3 className="content__title">Tag 13</h3>
                            <p className="content__description">To have so little, and it of so little value, was to be
                                quaintly free.</p>
                            <p className="content__meta">Wallace Stegner</p>
                        </div>
                        <div className="content__block">
                            <h3 className="content__title">Tag 14</h3>
                            <p className="content__description">I've always felt that your belongings have never been on
                                a level with you.</p>
                            <p className="content__meta">George Eliot</p>
                        </div>
                        <div className="content__block">
                            <h3 className="content__title">Tag 15</h3>
                            <p className="content__description">We all need new ideas, images, and experiences far more
                                than we need new stoves or cars or computers.</p>
                            <p className="content__meta">Bill Holm</p>
                        </div>
                        <div className="content__block">
                            <h3 className="content__title">Tag 16</h3>
                            <p className="content__description">We are being called upon to act against a prevailing
                                culture, to undermine our own entrenched tendency to accumulate and to consume, and to
                                refuse to define our individuality by our presumed ability to do whatever we want.</p>
                            <p className="content__meta">Lyanda Lynn Haupt</p>
                        </div>
                        <div className="content__block">
                            <h3 className="content__title">Tag 17</h3>
                            <p className="content__description">The way of the consumerist culture is to spend so much
                                energy chasing happiness that it has none left to be happy.</p>
                            <p className="content__meta">Criss Jami</p>
                        </div>
                        <div className="content__block">
                            <h3 className="content__title">Tag 18</h3>
                            <p className="content__description">Advertising has us chasing cars and clothes, working
                                jobs we hate so we can buy shit we don't need.</p>
                            <p className="content__meta">Chuck Palahniuk</p>
                        </div>
                        <div className="content__block">
                            <h3 className="content__title">Tag 19</h3>
                            <p className="content__description">Our economy is based on spending billions to persuade
                                people that happiness is buying things, and then insisting that the only way to have a
                                viable economy is to make things for people to buy so they’ll have jobs and get enough
                                money to buy things.</p>
                            <p className="content__meta">Philip Slater</p>
                        </div>
                        <div className="content__block">
                            <h3 className="content__title">Tag 20</h3>
                            <p className="content__description">The real opposition is that between the ego-bound man,
                                whose existence is structured by the principle of having, and the free man, who has
                                overcome his egocentricity.</p>
                            <p className="content__meta">Erich Fromm</p>
                        </div>
                        <div className="content__block">
                            <h3 className="content__title">Tag 21</h3>
                            <p className="content__description">Happy slaves are the bitterest enemies of freedom.</p>
                            <p className="content__meta">Marie von Ebner-Eschenbach</p>
                        </div>
                        <div className="content__block">
                            <h3 className="content__title">Tag 22</h3>
                            <p className="content__description">Happy slaves are the bitterest enemies of freedom.</p>
                            <p className="content__meta">Marie von Ebner-Eschenbach</p>
                        </div>
                        <div className="content__block">
                            <h3 className="content__title">Tag 23</h3>
                            <p className="content__description">Happy slaves are the bitterest enemies of freedom.</p>
                            <p className="content__meta">Marie von Ebner-Eschenbach</p>
                        </div>
                        <div className="content__block">
                            <h3 className="content__title">Tag 24</h3>
                            <p className="content__description">Happy slaves are the bitterest enemies of freedom.</p>
                            <p className="content__meta">Marie von Ebner-Eschenbach</p>
                        </div>
                        <div className="content__number">0</div>
                        <button className="btn white btn-back">&crarr;</button>
                    </div>
                </div>
            </div>
        );
    }
}
export default (injectIntl(AdventCalendar));