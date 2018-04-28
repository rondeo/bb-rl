import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery';

import Counter from '../../components/Counter/Counter';
import Footer from '../../components/Footer/Footer';
import SquareCard from '../../components/SquareCard/SquareCard';

import './Home.css';

import logoSchriftzug from './../../images/logo-schriftzug_600px.png';
import kuehe from './img/kuehe.png';
import setup from './img/setup.png';
import streamtimes from './img/streamtimes.png';

let Twitch = window.Twitch;

export default class Home extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            tournamentRunning: false
        };
    }

    componentDidMount() {
        this.resizeTwitchPlayer = this.resizeTwitchPlayer.bind(this);

        window.scrollTo(0, 0);

        $(this.refs.fullpage).fullpage({
            anchors: ["start", /*"teams", "spielplan",*/ "bulls", "regeln"],
            navigation: true,
            navigationTooltips: ["Start", /*"Teams", "Spielplan",*/ "Über die Bulls", "Turnier-Regeln"],
            scrollOverflow: true
        });

        $(".scroll-down").on("click", function () {
            $.fn.fullpage.moveSectionDown();
        });
        $(".scroll-up").on("click", function () {
            $.fn.fullpage.moveTo(1);
        });

        $(window).resize(() => {
            clearTimeout(this.resizeTimer);
            this.resizeTimer = setTimeout(() => {
                this.resizeTwitchPlayer();
            }, 250);
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.tournamentRunning !== prevState.tournamentRunning && this.state.tournamentRunning) {
            new Twitch.Embed("twitch-embed", {
                autoplay: false,
                layout: "video",
                width: 3000,
                channel: "battleground_bulls"
            });
            this.resizeTwitchPlayer();
        }
    }

    componentWillUnmount() {
        $.fn.fullpage.destroy("all");
    }

    resizeTwitchPlayer() {
        let player = $("#twitch-embed iframe");
        if (player.length > 0) {
            player.height(player.width() / 16 * 9);
        }
    }

    render() {
        return (
            <div ref="fullpage" className="container-fluid home">

                <div className="section start">
                    <div className="container">
                        {this.state.tournamentRunning ? (
                            <div className="inner">
                                <div id="twitch-embed"/>
                            </div>
                        ) : (
                            <div className="inner">
                                <img src={logoSchriftzug} alt="Battleground Bulls"/>
                                <div className="text">Nächstes<br/>Turnier in</div>
                                <Counter endCallback={() => {
                                    this.setState({tournamentRunning: true});
                                }}/>
                                <button className="btn primary"><Link to="https://goo.gl/KEBC8z" target="_blank"
                                                                      rel="noopener noreferrer">Jetzt anmelden</Link>
                                </button>
                            </div>
                        )}
                    </div>

                    <div className="scroll-down"><i className="fa fa-chevron-down"/>weiter scrollen</div>
                </div>

                <div className="section bulls">
                    <div className="container">
                        <div className="inner">
                            <h2>Über die Bulls</h2>
                            <div className="row">
                                <div className="col-12 col-md-5">
                                    <p>
                                        Die Battleground Bulls bestehen aus einem kleinen familiären Haufen Zweibeiner,
                                        die durch eine Idee von Patrick aka m4kar0ny und Malthe aka xPainHunt3r
                                        zusammengefunden haben. Die Idee bestand darin, einen eigenen Stream Kanal zu
                                        gründen, um auf neue Interessante und vor allem gleichgesinnte Leute aus
                                        dem Bereich Gaming zu treffen. Mittlerweile wurde die Idee zu einer kleinen
                                        Lebensaufgabe.
                                    </p>
                                    <p>
                                        Wir haben uns als Aufgabe gesetzt eine Community für alle zu Gründen, die Lust
                                        auf nette und korrekte Leute haben, die sich über die Spiele, egal ob neu
                                        oder alt, austauschen und diese ebenfalls zusammen spielen können. Unser Motto
                                        ist es somit, dass niemand alleine spielen muss. Unser Ziel ist es die
                                        Familie mit eurer Hilfe wachsen zu lassen und den Stream so unterhaltsam wie
                                        möglich zu gestalten.
                                    </p>
                                    <p>
                                        Eine Übersicht unseres Stream-Inhaltes werdet Ihr in Kürze ebenfalls auf dieser
                                        Seite zu sehen bekommen. Also schaut zwischendurch immer mal wieder rein,
                                        um zu sehen ob es etwas Neues gibt.
                                    </p>
                                </div>
                                <div className="col-12 col-md-7">
                                    <div className="row">
                                        <div className="col-12 col-md-6">
                                            <SquareCard
                                                image={streamtimes}
                                                text="Wann seid ihr online?"
                                                linkTo="https://goo.gl/SnMqEj"
                                                linkText="Wir sind bald wieder da"
                                            />
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <SquareCard
                                                image={kuehe}
                                                text="Schau bei unserer Bullen-Familie herein."
                                                linkTo="/#bulls"
                                                linkText="Mehr über uns"
                                                linkDisabled={true}
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-md-6">
                                            <SquareCard
                                                image={setup}
                                                text="Unser Setup"
                                                linkTo="https://docs.google.com/document/d/1cQO5QDKdD0eSQG0GA1yMonL7T0TjIHBzxzlK8iShJRY/"
                                                linkText="Schau dir hier unser Setup an"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="scroll-down"><i className="fa fa-chevron-down"/>weiter scrollen</div>
                </div>

                <div className="section regeln">
                    <div className="container">
                        <div className="inner">
                            <h2>Regelwerk Rocket League Turnier</h2>
                            <h3>§ 1 Allgemeines</h3>
                            <p>
                                Alle Teilnehmer des Turniers haben das <strong>Recht, fair</strong> und mit dem
                                nötigen <strong>Respekt</strong> behandelt zu werden!
                                Es wird im Allgemeinen ein <strong>höflicher Umgangston</strong> im <strong>Game,
                                Stream</strong> und <strong>Chat</strong> erwartet.
                                Falls dies nicht der Fall seine sollte, behalten wir uns das Recht vor, diese
                                Person/en vom <strong>Turnier / Chat</strong> zu <strong>disqualifizieren /
                                bannen</strong>.
                            </p>
                            <h3>§ 1.1 Teamanmeldung</h3>
                            <p>
                                Ein 2v2 Team besteht aus <strong>max.</strong> 2 Spielern. Nach Start des Turniers
                                werden <strong>keine Team Änderungen</strong> mehr vorgenommen. Sollte es dennoch
                                zum
                                <strong>Ausfall</strong> eines Spielers kommen wird das Team <strong>disqualifiziert
                                oder der Streamer entscheidet, ob ein anderer Spieler einspringen kann/darf</strong>.
                                Zudem muss jedes Team einen <strong>Teamleader</strong> ernennen, der
                                für <strong>Absprachen</strong> oder <strong>Rückfragen</strong> der Turnierleitung
                                zur Verfügung stehen muss.
                            </p>
                            <p>
                                Anmeldung bitte hier ausfüllen: <Link to="https://goo.gl/KEBC8z" target="_blank"
                                                                      rel="noopener noreferrer">Anmeldeformular</Link>
                            </p>
                            <h3>§ 1.2 Turnier</h3>
                            <p>
                                Die Anmeldung eines Teams für das Turnier, zählt nur für das <strong>aktuelle
                                Turnier</strong>.
                                Die Turnier-Infos werden immer zwischen Dienstag und Donnerstag im Discord / Twitter
                                / Facebook und in der Steam Gruppe angekündigt. Anmeldungen gelten erst sobald
                                diese Info Online ist! Alle vorherigen Anmeldungen werden gelöscht! Sobald ein Team
                                sich über das von uns genutzte Formular anmeldet, wird ein Zeitstempel erstellt,
                                sodass keiner benachteiligt wird wenn es heißt die Teams sind voll. Wir Nehmen nur
                                die ersten vollständig ausgefüllten Anmeldungen an! Alle weiteren Anmeldungen landen
                                auf der Reserve, falls ein Team nicht rechtzeitig erscheint. Erscheint ein Team
                                nicht bis spätestens 15 Minuten nach Stream-Beginn, so wird dieses vom Turnier
                                ausgeschlossen und es wird auf die Reserve zurückgegriffen.
                            </p>
                            <h3>§ 1.3 Sieger</h3>
                            <p>
                                Den Turniersiegern wird im Discord der Rang “<strong>Turniersieger</strong>”
                                verliehen. Dieser gilt in der Zeit, bis das nächste Turnier stattfindet und ein
                                neuer Sieger
                                gekrönt wird. In diesem Fall gibt es dann für die ehemaligen Turniersieger den Rang
                                “<strong>Ehemalige Turniersieger</strong>”. Das Siegreiche Team, bekommt eine Sperre
                                von
                                einem Turnier, sodass dieses nicht direkt erneut gewonnen werden kann. 2 Wochen nach
                                dem Sieg darf das Team wie gewohnt teilnehmen.
                            </p>
                            <h3>§ 2 Allgemeines zum Turniersystem</h3>
                            <p>
                                Alle Spiele vom Turnier werden <strong>Live</strong> von den Battleground Bulls
                                gestreamt und kommentiert. Vor dem Start des Turniers wird der Turnierplan gezeigt,
                                damit
                                alle Teams ungefähr wissen wann sie spielen müssen. Pro Turnier werden <strong>ca.
                                2-4 Stunden</strong> veranschlagt. Alle <strong>Ergebnisse</strong> werden nach dem
                                Spiel <strong>Live</strong> im Turnierplan eingetragen.
                            </p>
                            <p><Link to="https://www.twitch.tv/battleground_bulls" target="_blank"
                                     rel="noopener noreferrer">https://www.twitch.tv/battleground_bulls</Link></p>
                            <h3>§ 3 Chat Kommandos</h3>
                            <p>
                                !Anmeldung -> Anmeldelink (siehe Oben) <br/>
                                !Teams -> Aktuelle Teamaufstellung <br/>
                                !Discord -> Link zu unserem Discord
                            </p>
                            <div className="alert alert-danger" role="alert">PS: Mögliche Änderungen sind während
                                des Streams durch den Streamer möglich!
                            </div>

                        </div>
                    </div>

                    <div className="scroll-up"><i className="fa fa-chevron-up"/>nach oben</div>

                    <Footer/>
                </div>
            </div>
        );
    }
}