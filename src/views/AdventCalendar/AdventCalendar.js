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
                        <div className="cube" data-bg-color="#0c283e" data-title="The Escapists"></div>
                        <div className="cube" data-bg-color="#e31d3c" data-title="LEGO Fluch der Karibik"></div>
                        <div className="cube" data-bg-color="#081a29" data-title="Tembo - Badass Elefant"></div>
                        <div className="cube" data-bg-color="#9e1d38" data-title="Murderous Pursuits"></div>
                        <div className="cube" data-bg-color="#0c283e" data-title="Life is Strange EP 1-5"></div>
                        <div className="cube" data-bg-color="#e31d3c" data-title="Tomb Raider"></div>
                        <div className="cube" data-bg-color="#081a29" data-title="Just Cause 3 XXL"></div>
                        <div className="cube" data-bg-color="#9e1d38" data-title="Wizard of Legend"></div>
                        <div className="cube" data-bg-color="#0c283e" data-title="Project CARS 2"></div>
                        <div className="cube" data-active data-bg-color="#e31d3c" data-title="Metal Gear Solid V"></div>
                        <div className="cube" data-active data-bg-color="#081a29" data-title="The Dwarves"></div>
                        <div className="cube" data-active data-bg-color="#9e1d38" data-title="Cities Skylines"></div>
                        <div className="cube" data-active data-bg-color="#0c283e" data-title="Darksiders 1+2"></div>
                        <div className="cube" data-active data-bg-color="#e31d3c" data-title="The Escapists"></div>
                        <div className="cube" data-active data-bg-color="#081a29" data-title="Lego - Star Wars"></div>
                        <div className="cube" data-active data-bg-color="#9e1d38" data-title="Trackmania 2 Stadium"></div>
                        <div className="cube" data-inactive data-bg-color="#0c283e" data-title="Am 17.12. verfügbar"></div>
                        <div className="cube" data-inactive data-bg-color="#e31d3c" data-title="Am 18.12. verfügbar"></div>
                        <div className="cube" data-inactive data-bg-color="#081a29" data-title="Am 19.12. verfügbar"></div>
                        <div className="cube" data-inactive data-bg-color="#9e1d38" data-title="Am 20.12. verfügbar"></div>
                        <div className="cube" data-inactive data-bg-color="#0c283e" data-title="Am 21.12. verfügbar"></div>
                        <div className="cube" data-inactive data-bg-color="#e31d3c" data-title="Am 22.12. verfügbar"></div>
                        <div className="cube" data-inactive data-bg-color="#081a29" data-title="Am 23.12. verfügbar"></div>
                        <div className="cube" data-inactive data-bg-color="#9e1d38" data-title="Am 24.12. verfügbar"></div>
                    </div>
                    <div className="content wrapper">
                        <div className="content__block">
                            <h3 className="content__title">The Escapists</h3>
                            <p className="content__description">The Escapists“ bietet die Gelegenheit, einen heiteren Einblick in das alltägliche Gefängnisleben zu erhalten. Hauptziel aller Häftlinge ist natürlich die Flucht!</p>
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
                            <p className="content__meta">Gewinner - Mrs MadneSS</p>
                        </div>
                        <div className="content__block">
                            <h3 className="content__title">Tomb Raider</h3>
                            <p className="content__description">Tomb Raider erzählt die aufregende Geschichte von Lara Croft und ihrem Aufstieg zur knallharten Überlebenskünstlerin.</p>
                            <p className="content__meta">Gewinner - Jan</p>
                        </div>
                        <div className="content__block">
                            <h3 className="content__title">Just Cause 3 XXL</h3>
                            <p className="content__description">Die Just Cause 3: XXL Edition enthält das von Kritikern gefeierte Spiel Just Cause 3 sowie eine großartige Auswahl zusätzlicher Missionen, explosiver Waffen und Fahrzeuge, die das Spielerlebnis in Medici erweitern. Dies ist die ultimative Version – Neulinge, die sich sofort in Ricos Missionen stürzen wollen, können dies mit einem erweiterten Arsenal und exotischen neuen Fahrzeugen tun.</p>
                            <p className="content__meta">Gewinner - niggo</p>
                        </div>
                        <div className="content__block">
                            <h3 className="content__title">Wizard of Legend</h3>
                            <p className="content__description">Wizard of Legend ist ein rasanter Dungeoncrawler mit Schwerpunkt auf dynamischen Magiekämpfen. Wenn du dich schnell bewegst und noch schneller deine Zaubersprüche einsetzt, kannst du sie zu verheerenden Kombos verketten, um deine Gegner zu dezimieren.</p>
                            <p className="content__meta">Gewinner - Trippno</p>
                        </div>
                        <div className="content__block">
                            <h3 className="content__title">Project CARS 2</h3>
                            <p className="content__description">Nach dem höchst erfolgreichen Debüt 2015 führt Project CARS 2 die Reihe und ihre Fans in eine fantastische neue Ära des Motorsports und vereint dabei den absolut authentischen Realismus der modernsten Rennsimulation der Welt mit dem puren Spaß spektakulärer Rennaction. Erleben Sie das ultimative Rennfahrererlebnis.</p>
                            <p className="content__meta">Gewinner - yousafe</p>
                        </div>
                        <div className="content__block">
                            <h3 className="content__title">Metal Gear Solid V</h3>
                            <p className="content__description">World-renowned Kojima Productions brings the Metal Gear Solid franchise to Steam with METAL GEAR SOLID V: GROUND ZEROES. Play as the legendary hero Snake and infiltrate a Cuban military base to rescue the hostages. Can you make it out alive?</p>
                            <p className="content__meta">Gewiner - GoLoaT</p>
                        </div>
                        <div className="content__block">
                            <h3 className="content__title">The Dwarves</h3>
                            <p className="content__description">Wenige Helden stehen Hunderten Feinden gegenüber – kannst du das coolste Fantasy-Volk überhaupt zum Sieg gegen die dunklen Horden führen? Erkunde eine riesige Welt, schlage taktische Echtzeitschlachten und erlebe die grandiose Geschichte nach dem Bestseller von Markus Heitz.</p>
                            <p className="content__meta">Gewinner - Atliris</p>
                        </div>
                        <div className="content__block">
                            <h3 className="content__title">Cities Skylines</h3>
                            <p className="content__description">Cities: Skylines ist die moderne Version der klassischen Städtebausimulation. Mit neuen Gameplay-Elementen stellt das Spiel Sie vor den Nervenkitzel und die Herausforderung, eine echte Stadt zu errichten und am Laufen zu halten, während es zugleich die bekannte Städtebau-Erfahrung </p>
                            <p className="content__meta">Gewinner - Wird neu verlost!</p>
                        </div>
                        <div className="content__block">
                            <h3 className="content__title">Darksiders Franchise - <p>Pack</p></h3>
                            <p className="content__description">Krieg – der erste Reiter der Apokalypse – wurde von den Mächten des Bösen betrogen. Nun wird ihm vorgeworfen, das Ende der Welt vorzeitig ausgelöst zu haben, indem er das heilige Gesetz von Himmel und Hölle gebrochen hat.</p>
                            <p className="content__meta">Gewinner - Marieeeeee</p>
                        </div>
                        <div className="content__block">
                            <h3 className="content__title">The Escapists</h3>
                            <p className="content__description">The Escapists“ bietet die Gelegenheit, einen heiteren Einblick in das alltägliche Gefängnisleben zu erhalten. Hauptziel aller Häftlinge ist natürlich die Flucht!</p>
                            <p className="content__meta">Gewinner - Bl4ck3nd</p>
                        </div>
                        <div className="content__block">
                            <h3 className="content__title">Lego - Star Wars</h3>
                            <p className="content__description">Das beste LEGO®-Videospiel-Franchise kehrt triumphal zurück – mit einer witzigen Reise, die auf dem Blockbuster basiert. Das Spiel bietet zudem brandneue Story-Elemente aus dem Star-Wars-Universum aus der Zeit zwischen Star Wars: Die Rückkehr der Jedi-Ritter und Star Wars: Das Imperium schlägt zurück</p>
                            <p className="content__meta">Gewinner - Malachanis</p>
                        </div>
                        <div className="content__block">
                            <h3 className="content__title">Trackmania ² Stadium</h3>
                            <p className="content__description">TrackMania2 Stadium markiert das Comeback des von Millionen Spielern geliebten „Stadion“-Settings aus TrackMania Nations Forever. Dieses Mal als Teil der ManiaPlanet-Umgebung, die einen verbesserten Service rund ums Spiel, hochwertige Grafik und einen mächtigen Editor bietet.</p>
                            <p className="content__meta">Gewinner - Showdown</p>
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