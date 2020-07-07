import React, {Component} from "react"
import "./About.css"
import {translate} from "react-switch-lang";
import {Container, Row, Col, Image} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import ONAS from "./ONAS_IMAGE.jpg"

class About extends Component {
    state = {
        id:"0"
    }
    render() {
        const {t} = this.props;

        return (
            <Container fluid={true} className={'row_brown'}>
            <Container fluid={false} className={"about"} id={'about'}>
                <div className={"pt-3"}>
                    <h1 className="text-center  heading-title">{t('header.section2.title')}</h1>
                </div>
                    <Row className="1">
                        <Col lg={7} sm={12}  className="text-justify tab_text mb-5 row_brown">
                            <div className="zagolov text-center ">Powiedz nam dokąd zmierzasz,<br/> a my znajdziemy dla Ciebie bezpieczną drogę.</div>

                            <div className={"mt-3"}>Kancelaria została założona przez doświadczonych, energicznych i&nbsp;kreatywnych prawników.</div>
                            <div className={"mt-2"}>Na&nbsp;co&nbsp;dzień jesteśmy miłośnikami&nbsp;gór. Instynktownie poszukujemy rozwiązań prowadzących na&nbsp;szczyt. Jak&nbsp;dobry przewodnik poprowadzimy Cię&nbsp;przez kręte ścieżki procedur prawnych.</div>
                            <div className={"mt-2"}>Nie przeraża nas, gdy robi&nbsp;się stromo. Dobrze wiemy,&nbsp;że&nbsp;podróż&nbsp;na&nbsp;wierzchołek wiedzie pod&nbsp;górę. Bogate doświadczenie pomoże nam&nbsp;pokonać&nbsp;za&nbsp;Ciebie wszelkie trudności.</div>
                            <div className={"mt-2"}>Z nami nie musisz bać&nbsp;się&nbsp;ryzyka. Zaopiekujemy&nbsp;się Twoimi sprawami, aby&nbsp;wspólna podróż doprowadziła do&nbsp;celu&nbsp;i&nbsp;była bezpieczna.</div>
                            <div className={"mt-2"}>Pamiętamy o&nbsp;pochodzeniu słowa adwokat. Z&nbsp;łacińskiego advocare oznacza "wzywać na&nbsp;pomoc". Adwokaci tak&nbsp;samo jak&nbsp;ludzie gór&nbsp;nawykowo niosą wsparcie, gdy pojawia się&nbsp;problem.  Jesteśmy po&nbsp;to,&nbsp;aby&nbsp;Ci&nbsp;pomóc.</div>
                            <div className={"mt-2"}>Chcąc wiedzieć dokąd podążasz, musimy dobrze Cię&nbsp;zrozumieć. Zawsze patrzymy na&nbsp;sprawę „oczami” Klienta. Pomaga nam to&nbsp;sprecyzować Twoje cele i&nbsp;dostosować do&nbsp;nich właściwe strategie.</div>
                            <div className={"mt-2"}>W górach i&nbsp;w&nbsp;życiu ogromną wartością jest zaufanie. Stanowi&nbsp;ono fundament dobrych relacji zawodowych i&nbsp;międzyludzkich.  Świadomość, że&nbsp;Klient powierza nam&nbsp;swój los&nbsp;obliguje nas&nbsp;do&nbsp;wszelkich starań, aby&nbsp;tego zaufania nie&nbsp;stracić.</div>
                            <div className={"mt-3"}>Czuj się zaproszony do naszej kancelarii.</div>
                        </Col>
                        <Col lg={5}  className={"p-2 mb-5"}>
                                <Image src={ONAS} width="100%" className="img-fluid"  alt="ONAS"/>
                        </Col>

                    </Row>
            </Container>
            </Container>
        )
    }
}
export default translate(About)
