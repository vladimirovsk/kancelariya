import React, {Component} from "react"
import "./About.css"
import {translate} from "react-switch-lang";
import {Container, Row, Col, Image} from "react-bootstrap";
import {Divider} from "@material-ui/core";
import 'bootstrap/dist/css/bootstrap.min.css';

class About extends Component {
    state = {
        id:"0"
    }
    render() {
        const {t} = this.props;
        return (
            <Container fluid={true} className={"about"} id={this.props.id}>
                <div className={"pt-3"}>
                    <h1 className="text-center">{t('header.section2.title')}</h1>
                </div>
                <Divider orientation="vertical" flexItem />
                    <Row>
                        <Col sm={12} className="zagolov text-center">Powiedz nam dokąd zmierzasz, a my znajdziemy dla Ciebie bezpieczną drogę.</Col>
                    </Row>
                    <Row className="p-3">
                        <Col sm={8}>
                            <Container className="pl-sm-5">
                            <p>Kancelaria została założona przez doświadczonych, energicznych i kreatywnych prawników.</p>

                            <p>Na co dzień jesteśmy miłośnikami gór. Instynktownie poszukujemy rozwiązań prowadzących
                            na szczyt. Jak dobry przewodnik poprowadzimy Cię przez kręte ścieżki procedur prawnych.</p>

                            <p>Nie przeraża nas, gdy robi się stromo. Dobrze wiemy, że podróż na wierzchołek wiedzie pod górę. Bogate doświadczenie pomoże nam pokonać za Ciebie wszelkie trudności.</p>

                            <p>Z nami nie musisz bać się ryzyka. Zaopiekujemy się Twoimi sprawami, aby wspólna podróż
                            doprowadziła do celu i była bezpieczna.</p>

                            <p>Pamiętamy o pochodzeniu słowa adwokat. Z łacińskiego advocare oznacza ‚wzywać na pomoc’. Adwokaci tak samo jak ludzie gór nawykowo niosą wsparcie, gdy pojawia się problem.
                            Jesteśmy po to, aby Ci pomóc.</p>

                            <p>Chcąc wiedzieć dokąd podążasz, musimy dobrze Cię zrozumieć. Zawsze patrzymy na sprawę „oczami” Klienta. Pomaga nam to sprecyzować Twoje cele i dostosować do nich właściwe strategie.</p>

                            <p>W górach i w życiu ogromną wartością jest zaufanie. Stanowi ono fundament dobrych relacji zawodowych i międzyludzkich.  Świadomość, że Klient powierza nam swój los obliguje nas do wszelkich starań, aby tego zaufania nie stracić.</p>

                            <p>Czuj się zaproszony do naszej kancelarii.</p>
                            </Container>
                        </Col>
                        <Col sm={4}>
                            <picture>
                                <Image src="./ONAS_IMAGE.jpg" width="1024" height="1024" className="img-fluid"  alt="ONAS"/>
                            </picture>
                        </Col>
                    </Row>
            </Container>
        )
    }
}
export default translate(About)
