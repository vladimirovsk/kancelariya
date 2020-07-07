import React, {Component} from "react"
import "./Team.css"
import {translate} from "react-switch-lang";
import {Container, Row, Col, Image} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

class Team extends Component {
    state = {
        id:"0"
    }
    render() {
        const {t} = this.props;
        return (
            <Container fluid={true} className={"practica"} id={this.props.id}>
                <div className={"pt-3"}>
                    <h1 className="text-center">{t('header.section4.title')}</h1>
                </div>
                    <Row className="p-3 row_brown">
                        <Col sm={4}>
                            <picture>
                                <Image src="./PRACTICA1.png" width="1024" height="1024" className="img-fluid"  alt="ONAS"/>
                            </picture>

                        </Col>
                        <Col sm={8}>
                            <Container className="pl-sm-5">
                                <div className="zagolov text-center">Obsługa inwestycji budowlanych </div>
                                <p className={"mt-5 text-justify"}>Nic tak nie zabezpieczy interesów stron procesu inwestycyjno-budowlanego jak precyzyjnie skonstruowana umowa i rzetelny obieg dokumentów. W przeciwnym razie łatwo narazić się na zarzut niewłaściwego wykonywania umowy, co może skończyć się zerwaniem kontraktu, naliczeniem kar umownych lub odmową zapłaty wynagrodzenia. Podejmując się kompleksowej obsługi prawnej inwestycji budowlanych czuwamy, aby zawierane umowy normowały wszystkie kwestie mogące rodzić spory na przyszłość oraz należycie chroniły interesy Klienta. W toku realizacji inwestycji dbamy, aby były odpowiednio dokumentowane wszelkie podejmowane czynności oraz okoliczności wpływające na jej przebieg. Doradzamy także jak reagować w sytuacji nierzetelnego wykonywania umów przez kontrahentów i pomagamy egzekwować od nich odpowiednie roszczenia, w tym o zapłatę wynagrodzenia, kar umownych, czy usunięcie usterek.</p>

                                    <p className={"text-center"}>Dowiedz się więcej</p>
                            </Container>
                        </Col>
                    </Row>
                    <Row className="row_white">
                        <Col sm={8}>
                            <div className="zagolov text-center text-dark mt-5">Roszczenia z tytułu rękojmi i gwarancji nabywców lokali</div>
                            <p className="text-justify mt-2">
                                Nabywcy lokali, którzy w czasie odbioru lub użytkowania stwierdzili wystąpienie usterek mogą liczyć na naszą pomoc w egzekwowaniu zasadnych roszczeń. Fachowość naszych usług opiera się na ścisłej współpracy ze specjalistami z branży budowlanej, którzy opiniują stwierdzone wady pod kontem przyczyn ich wystąpienia oraz konsekwencji ich zaistnienia na przyszłość. Ocena techniczna pomaga nam odpowiednio skonstruować roszczenia i znaleźć dla nich prawne uzasadnienie. Reprezentujemy Klientów przed deweloperami oraz zbywcami z rynku wtórnego, a gdy zachodzi taka potrzeba – także w postępowaniach sądowych. Ofertę naszą adresujemy jednocześnie do inwestorów budowlanych, przeciwko którym kierowane są bezpodstawne roszczenia z tytułu odpowiedzialności za wady lokalu/budynku.
                            </p>
                            <p className="text-center">
                                Dowiedz się więcej
                            </p>
                        </Col>
                        <Col sm={4}>
                            <picture>
                                <Image src="./PRACTICA2.png" width="1024" height="1024" className="img-fluid"  alt="ONAS"/>
                            </picture>
                        </Col>
                    </Row>
                     <Row className="p-3 row_brown">
                    <Col sm={4}>
                        <picture>
                            <Image src="./PRACTICA3.png" width="1024" height="1024" className="img-fluid"  alt="ONAS"/>
                        </picture>

                    </Col>
                    <Col sm={8}>
                        <Container className="pl-sm-5">
                            <div className="zagolov text-center">Samowola budowlana i inne sprawy administracyjno-budowlane</div>
                            <p className={"mt-5 text-justify"}>Nie trzeba wyjaśniać, iż budowa większości obiektów budowlanych bez dopełnienia stosownych procedur jest samowolą budowlaną, co może zakończyć się nałożeniem wysokiej opłaty legalizacyjnej albo nakazem rozbiórki, a także wszczęciem postępowania karnego. Nie każdy jednak wie, iż budowa garażu lub pomieszczenia gospodarczego na własnej posesji także może stanowić samowolę skutkująca represjami finansowymi i karnymi. Podobnie urządzenie biura w mieszkaniu może zostać uznane za samowolną zmianę sposobu użytkowania i spowodować nałożenie kar finansowych. Dzięki posiadanemu doświadczeniu w postępowaniach administracyjno-budowlanych pomagamy zainteresowanym przebrnąć przez skomplikowane procedury jak również doradzamy jak uniknąć finansowych obciążeń. A może zostałeś obciążony wysoka opłatą audiacencką lub planistyczna i nie zgadzasz się z jej wysokością. Sprawdzamy, czy organy administracyjne nałożyły opłaty zgodnie z prawem i w słusznej wysokości.</p>

                            <p className={"text-center"}>Dowiedz się więcej</p>
                        </Container>
                    </Col>
                </Row>

            </Container>
        )
    }
}
export default translate(Team)
