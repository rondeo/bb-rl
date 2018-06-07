import React from 'react';
import SquareCard from '../SquareCard/SquareCard';

import kuehe from './img/kuehe.png';
import setup from './img/setup.png';
import streamtimes from './img/streamtimes.png';

export default class About extends React.PureComponent {
    render() {
        return (
            <div className="section bulls">
                <div className="container">
                    <div className="inner">
                        <h2>Über die Bulls</h2>
                        <div className="row">
                            <div className="col-12 col-md-6">
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
                                    auf nette und korrekte Leute haben, die
                                </p>
                            </div>
                            <div className="col-12 col-md-6">
                                <p>
                                    sich über die Spiele, egal ob neu
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
                        </div>
                        <div className="row">
                            <div className="col-12 col-sm-4">
                                <SquareCard
                                    image={streamtimes}
                                    text="Du willst wissen wann wir online sind?"
                                    linkTo="/streamzeiten"
                                />
                            </div>
                            <div className="col-12 col-sm-4">
                                <SquareCard
                                    image={kuehe}
                                    text="Du willst Mitglied der Bulls-Familie werden?"
                                    linkTo="/#bulls"
                                    linkDisabled={true}
                                />
                            </div>
                            <div className="col-12 col-sm-4">
                                <SquareCard
                                    image={setup}
                                    text="Hier gehts zu unserem Streaming-Setup"
                                    linkTo="https://docs.google.com/document/d/1cQO5QDKdD0eSQG0GA1yMonL7T0TjIHBzxzlK8iShJRY/"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="scroll-down"><i className="fa fa-chevron-down"/>weiter scrollen</div>
            </div>
        );
    }
}