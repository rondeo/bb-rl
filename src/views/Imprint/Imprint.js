import React, {PureComponent} from 'react';
import './Imprint.css';

export default class Imprint extends PureComponent {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className="container imprint">
                <h1>Impressum</h1>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <p>
                            Angaben gemäß § 5 TMG<br/>
                            <br/>
                            Max Muster <br/>
                            Musterweg<br/>
                            12345 Musterstadt <br/>
                        </p>

                        <h5>Vertreten durch:</h5>
                        <p>Max Muster</p>

                        <h5>Kontakt:</h5>
                        <p>
                            Telefon: 01234-789456<br/>
                            Fax: 1234-56789<br/>
                            E-Mail: <a href='mailto:max@muster.de'>max@muster.de</a><br/>
                        </p>
                    </div>
                    <div className="col-12 col-md-6">
                        <h5>Aufsichtsbehörde:</h5>
                        <p>Musteraufsicht Musterstadt</p>

                        <h5>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</h5>
                        <p>
                            Max Muster<br/>
                            Musterweg<br/>
                            12345 Musterstadt
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}