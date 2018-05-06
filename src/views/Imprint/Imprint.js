import React, {PureComponent} from 'react';
import './Imprint.css';

export default class Imprint extends PureComponent {
    render() {
        return (
            <div className="container imprint">
                <h1>Impressum</h1>

                <h5> Angaben gemäß § 5 TMG</h5>
                <p>
                    Malthe Strauch <br/>
                    Herrenkamp 21 <br/>
                    27299 Langwedel
                </p>

                <h5>Vertreten durch:</h5>
                <p>Malthe Strauch</p>

                <h5>Kontakt:</h5>
                <p>
                    Telefon: 04232/9449543 <br/>
                    E-Mail: <a href='mailto:business@battleground-bulls.de'>business@battleground-bulls.de</a><br/>
                </p>

                {
                    /*
                    <h5>Aufsichtsbehörde:</h5>
                    <p> Musteraufsicht Musterstadt</p>
                    */
                }

                <h5>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</h5>
                <p>
                    Malthe Strauch <br/>
                    Herrenkamp 21 <br/>
                    27299 Langwedel
                </p>
            </div>
        );
    }
}