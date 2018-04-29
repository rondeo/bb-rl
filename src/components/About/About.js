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
        );
    }
}