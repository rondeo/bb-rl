import React from "react";

import "./Commands.css";

export default class Commands extends React.PureComponent {
    render() {
        return (
            <div className="view container commands">
        <h1>Befehl</h1>
        <h3>Soziale Netzwerke</h3>
            <ul>
                <li>
                    <div className="command">!FB</div><div className="description">Link zu unserer Facebook Gruppe</div>
                </li>
                <li>
                    <div className="command">!YT</div><div className="description">Link zu unserem YouTube Kanal</div>
                </li>
                <li>
                    <div className="command">!www</div><div className="description">Link zu unserer Homepage</div>
                </li>
                <li>
                    <div className="command">!Twitter</div><div className="description">Link zu Twitter</div>
                </li>
                <li>
                    <div className="command">!Instagramm</div><div className="description">Link zu unserer Instagramm Seite</div>
                </li>
            </ul>
        <h3>Musik</h3>
            <ul>
                <li>
                    <div className="command">!Sr Song-Titel</div><div className="description">Lädt dein gewünschtes Lied in unsere PlayList</div>
                </li>
            </ul>
        <h3>Custom Befehl</h3>
            <ul>
                <li>
                    <div className="command">!Commands</div><div className="description">Link zu dieser Seite :-P</div>
                </li>
                <li>
                    <div className="command">!Torte</div><div className="description">Wirf einem zufälligen Zuschauer eine Torte ins Gesicht</div>
                </li>
                <li>
                    <div className="command">!Boobs</div><div className="description">trifft einen zufälligen Zuschauer</div>
                </li>
                <li>
                    <div className="command">!Seife "Ziel"</div><div className="description">wasche zuschauer "Ziel" den Mund</div>
                </li>
                <li>
                    <div className="command">!Hulk "USER"</div><div className="description">Lässt unseren Systemhulk auf den Zuschauer "Ziel" los</div>
                </li>
                <li>
                    <div className="command">!Pan "Ziel"</div><div className="description">Achtung Bratpfanne auf Zuschauer "Ziel"</div>
                </li>
                <li>
                    <div className="command">!Kaffee</div><div className="description">Jeder braucht einmal eine Auszeit ;)</div>
                </li>
                <li>
                    <div className="command">!Kuschel "Ziel"</div><div className="description">Kuschelt das angegebene "Ziel"</div>
                </li>
                <li>
                    <div className="command">!Meow</div><div className="description">Schnurrr ich bin eine Katze!</div>
                </li>
                <li>
                    <div className="command">!blupp</div><div className="description">Heute gibt es Fisch</div>
                </li>
                <li>
                    <div className="command">!Woof</div><div className="description">Fang das Stöckchen!</div>
                </li>
                <li>
                    <div className="command">!Brunch</div><div className="description">Tischlein deck dich!</div>
                </li>
                <li>
                    <div className="command">!Zone</div><div className="description">Battle-Royale Zonen-Alarm</div>
                </li>
                <li>
                    <div className="command">!Gögö</div><div className="description">Lasse einen Ball rollen</div>
                </li>
                <li>
                    <div className="command">!Kekse</div><div className="description">Kekse verteilen</div>
                </li>
                <li>
                    <div className="command">!Keks "Ziel"</div><div className="description">Kekseeeeee</div>
                </li>
                <li>
                    <div className="command">!Ready</div><div className="description">eSports Ready</div>
                </li>
            </ul>
        <h3>Turnier</h3>
            <ul>
                <li>
                    <div className="command">!Anmeldung</div><div className="description">Leitet dich zu unserer Turnier-Anmeldung weiter</div>
                </li>
                <li>
                    <div className="command">!Regeln</div><div className="description">Das aktuelle Regelwerk</div>
                </li>
                <li>
                    <div className="command">!Teams</div><div className="description">Die aktuell angemeldeten Teams</div>
                </li>
                <li>
                    <div className="command">!Bracket</div><div className="description">Das aktuelle Bracket</div>
                </li>
            </ul>
            </div>
        )
    }
}
