import React from 'react';
import $ from 'jquery';

export default class Rules extends React.PureComponent {

    componentDidMount() {
        $(this.refs.rules).on("shown.bs.collapse hidden.bs.collapse", function () {
            $.fn.fullpage.reBuild();
        });
    }

    render() {
        return (
            <div ref="rules" className="section regeln">
                <div className="container">
                    <div className="inner" id="rules-container">
                        <h2>Turnier-Regeln</h2>

                        <p className="text-uppercase text-muted">Hinweis: Mögliche Änderungen sind während des Streams durch den Streamer möglich!</p>

                        <div data-toggle="collapse" data-target="#allgemein" role="button"
                            aria-controls="allgemein">Allgemeines</div>
                        <div className="collapse show" id="allgemein" data-parent="#rules-container">
                            <p>
                                Alle Teilnehmer des Turniers haben das <strong>Recht, fair</strong> und mit dem
                                nötigen <strong>Respekt</strong> behandelt zu werden!
                                Es wird im Allgemeinen ein <strong>höflicher Umgangston</strong> im <strong>Game,
                                Stream</strong> und <strong>Chat</strong> erwartet.
                                Falls dies nicht der Fall seine sollte, behalten wir uns das Recht vor, diese
                                Person/en vom <strong>Turnier / Chat</strong> zu <strong>disqualifizieren /
                                bannen</strong>.
                            </p>
                        </div>

                        <div className="collapsed" data-toggle="collapse" data-target="#registration" role="button"
                            aria-controls="registration">Teamanmeldung</div>
                        <div className="collapse" id="registration" data-parent="#rules-container">
                            <p>
                                Ein 2v2 Team besteht aus <strong>max.</strong> 2 Spielern. Nach Start des Turniers
                                werden <strong>keine Team Änderungen</strong> mehr vorgenommen. Sollte es dennoch
                                zum <strong>Ausfall</strong> eines Spielers kommen wird das Team <strong>disqualifiziert
                                oder der Streamer entscheidet, ob ein anderer Spieler einspringen kann/darf</strong>.
                                Zudem muss jedes Team einen <strong>Teamleader</strong> ernennen, der
                                für <strong>Absprachen</strong> oder <strong>Rückfragen</strong> der Turnierleitung
                                zur Verfügung stehen muss.
                            </p>
                            <p>
                                Anmeldung bitte hier ausfüllen: <a className="link-dark" href="https://goo.gl/KEBC8z" target="_blank" rel="noopener noreferrer">Anmeldeformular</a>
                            </p>
                        </div>

                        <div className="collapsed" data-toggle="collapse" data-target="#tournament" role="button"
                            aria-controls="tournament">Turnier</div>
                        <div className="collapse" id="tournament" data-parent="#rules-container">
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
                        </div>

                        <div className="collapsed" data-toggle="collapse" data-target="#winner" role="button"
                            aria-controls="winner">Sieger</div>
                        <div className="collapse" id="winner" data-parent="#rules-container">
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
                        </div>

                        <div className="collapsed" data-toggle="collapse" data-target="#general-tournament" role="button"
                            aria-controls="general-tournament">Allgemeines zum Turniersystem</div>
                        <div className="collapse" id="general-tournament" data-parent="#rules-container">
                            <p>
                                Alle Spiele vom Turnier werden <strong>Live</strong> von den Battleground Bulls
                                gestreamt und kommentiert. Vor dem Start des Turniers wird der Turnierplan gezeigt,
                                damit
                                alle Teams ungefähr wissen wann sie spielen müssen. Pro Turnier werden <strong>ca.
                                2-4 Stunden</strong> veranschlagt. Alle <strong>Ergebnisse</strong> werden nach dem
                                Spiel <strong>Live</strong> im Turnierplan eingetragen.
                            </p>
                            <p><a className="link-dark" href="https://www.twitch.tv/battleground_bulls" target="_blank" rel="noopener noreferrer">Hier geht es zum Twitch-Kanal</a></p>
                        </div>

                        <div className="collapsed" data-toggle="collapse" data-target="#commands" role="button"
                            aria-controls="commands">Chat Kommandos</div>
                        <div className="collapse" id="commands" data-parent="#rules-container">
                            <p>
                                !Anmeldung -> Anmeldelink (siehe Oben) <br/>
                                !Teams -> Aktuelle Teamaufstellung <br/>
                                !Discord -> Link zu unserem Discord
                            </p>
                        </div>

                    </div>
                </div>

                <div className="scroll-up"><i className="fa fa-chevron-up"/>nach oben</div>
            </div>
        );
    }
}