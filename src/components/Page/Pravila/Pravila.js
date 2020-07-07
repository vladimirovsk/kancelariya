import React, {Component} from "react"
import "./Pravila.css"
import {translate} from "react-switch-lang";
import {Container, Row, Card, CardGroup} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import ZS1 from "./Zasady1.jpg"
import ZS2 from "./Zasady2.jpg"



class Pravila extends Component {
    state = {
        id:"0",
        BG1:"url("+ZS1+")",
        BG2:"url("+ZS2+")"
    }

    render() {
        const {t} = this.props;


        return (
            <Container fluid={true} className={"pravila"}>
            <Container fluid={'sm'} className={"uslugi"} id={this.props.id}>
                <div className={"p-0 m-0"}>
                    <h1 className="text-center heading-title pt-3" style={{color:'black'}}>{t('header.section7.title')}</h1>
                </div>
                <Row className="row_white m-0 p-0 justify-content-center" >
                    <CardGroup>
                    <Card className={"text-justify p-0 m-0 row_white"}>
                        <div className="container-fluid row_white p-4">
                        <div className={"font-weight-bold text-center mb-2 zasada_title"} style={{textTransform:"uppercase"}}><h4>To&nbsp;nie&nbsp;góra, którą&nbsp;pokonujemy, ale&nbsp;my&nbsp;sami</h4></div>

                        <div style={{lineHeight: '1.5'}}>Założyciele kancelarii należą do&nbsp;miłośników gór i&nbsp;sportów górskich.
                            Pozornie może wydawać się, że prawo i&nbsp;góry mają niewiele wspólnego. Nic bardziej mylnego.
                            Uprawianie przedmiotowych dyscyplin istotnie przyczynia się&nbsp;do&nbsp;ukształtowania cech nieocenionych w&nbsp;zawodzie adwokata.</div>

                        <div className={"font-weight-bold mt-2 text-center"} style={{textTransform:"uppercase", lineHeight: '1.5'}}>Skrupulatność</div>
                        <div>Góry nauczyły nas, że&nbsp;skrupulatność ma&nbsp;ogromny wpływ na&nbsp;bezpieczeństwo. We wspinaczce najmniejszy błąd operacyjny może skutkować utratą życia lub zdrowia. Uprawianie górskich dyscyplin sportowych ukształtowało w&nbsp;nas mechanizm
                            dbałości o&nbsp;każdy szczegół w&nbsp;podejmowanych działaniach.
                            Cecha te&nbsp;jest bezcenna w&nbsp;zawodzie prawnika, albowiem niedostrzeżenie drobnych aspektów sprawy może poważnie zagrozić interesom Klienta.
                            My posiadamy ugruntowane doświadczeniem górskim przekonanie, że&nbsp;bezpieczeństwo tkwi w&nbsp;szczegółach, co przekłada się na&nbsp;zawodową sumienność i&nbsp;czyni z&nbsp;nas solidnych fachowców.</div>

                        <div className={"font-weight-bold mt-2 text-center"} style={{textTransform:"uppercase"}}>Wytrwałość</div>
                            <div>Wyczynowe sporty górskie są&nbsp;możliwe dla&nbsp;tych, którzy posiadają cechę niezłomności w&nbsp;dążeniu do&nbsp;celu.
                                Niepogoda, deszcz, wiatr, mróz nie mogą być powodem do&nbsp;odwrotu, gdy chce&nbsp;się&nbsp;osiągnąć zamierzone założenie.
                                Tylko wewnętrzna waleczność umożliwia przezwyciężenie niesprzyjających okoliczności i&nbsp;realizacje założeń mimo pojawiających się przeciwności.
                                Te lekcje przetrwania uczą, aby&nbsp;w&nbsp;życiu codziennym nie szukać przeszkód i&nbsp;problemów, lecz koncentrować się&nbsp;na&nbsp;tym jak je&nbsp;rozwiązać lub&nbsp;ominąć.
                                My&nbsp;dobrze wiemy, że&nbsp;nie należy odpuszczać, gdy robi&nbsp;się&nbsp;pod górę, lecz konsekwentnie zmierzać&nbsp;na szczyt. Z&nbsp;taką samą walecznością dbamy&nbsp;o interesy naszych Klientów.
                            </div>
                        </div>
                    </Card>
                    <Card className={"text-justify p-0 m-0"} style={{backgroundImage: this.state.BG1,
                            backgroundRepeat:'no-repeat', backgroundSize:"cover"}}>
                    </Card>
                    </CardGroup>
                </Row>
                <Row className="row_white justify-content-center">
                    <CardGroup>
                    <Card className={"text-justify p-0 m-0"} style={{backgroundImage: this.state.BG2,
                        backgroundRepeat:'no-repeat', backgroundSize:"cover"}}>
                    </Card>
                    <Card  className={"text-justify p-0 m-0 row_white"}>
                        <Container className={"p-4 row_white"}>
                        <div className={"font-weight-bold p-0 m-0 text-center "} style={{textTransform:"uppercase"}}>Praca zespołowa</div>
                        <div>Nie ma&nbsp;takiego człowieka, który znałby się&nbsp;na&nbsp;wszystkim i&nbsp;potrafił wszechstronnie przeanalizować problem. Tylko wymiana wiedzy i&nbsp;doświadczeń gwarantuje staranne i&nbsp;kompleksowe podejście. Góry uczą, że&nbsp;efektywne współdziałanie przekłada się&nbsp;zarówno na&nbsp;bezpieczeństwo,  jak i na&nbsp;skuteczność w&nbsp;dążeniu do&nbsp;celu. Współpraca i&nbsp;wzajemna pomoc to&nbsp;niezastąpiony drogowskaz prowadzący na&nbsp;szczyt. Pamiętamy o&nbsp;tym zarówno w&nbsp;życiu codziennym,  jak&nbsp;i&nbsp;zawodowym. Prowadzimy sprawy w&nbsp;taki sposób, aby&nbsp;sytuacja prawna każdego Klienta została poddana ocenie przez co&nbsp;najmniej dwóch współdziałających fachowców.
                        </div>
                        <div className={"font-weight-bold mt-3 text-center"} style={{textTransform:"uppercase"}}>Szacunek, zaufanie, życzliwa atmosfera</div>
                        <div>W górach nie ma&nbsp;znaczenia status społeczny lub majątkowy człowieka. Wszyscy są równi i&nbsp;przyjaźnie nastawieni. Wyzwania jakie niosą ze&nbsp;sobą góry uczą ludzi wzajemnego szacunku bez względu na&nbsp;to&nbsp;czym się zajmują na&nbsp;co&nbsp;dzień. Tak samo budujemy relacje z&nbsp;Klientami. Uprzejmość, empatia i&nbsp;kultura osobista to&nbsp;filary, na&nbsp;których opieramy zawodową współpracę. Zespół zaś dobieramy tak, aby&nbsp;budować koleżeńską atmosferę i&nbsp;grono mogących polegać na&nbsp;sobie osób. Komfort pracy w&nbsp;życzliwym otoczeniu przekłada się&nbsp;istotnie na&nbsp;jakość świadczonych usług.</div>
                        <div className={"mt-3"}>W pracy jesteśmy prawnikami i&nbsp;skupiamy się&nbsp;wyłącznie na&nbsp;tym, aby&nbsp;profesjonalnie wykonywać powierzone nam zadania, zapominając o&nbsp;tym co&nbsp;robimy w&nbsp;czasie rekreacji. Niemniej jednak obserwując proces rozwoju własnych osobowości na&nbsp;przestrzeni wielu lat i&nbsp;idący za&nbsp;tym progres umiejętności zawodowych konsekwentnie uważamy, że&nbsp;pasje górskie pomagają nam&nbsp;być świetnymi prawnikami.</div>
                        </Container>
                    </Card>
                    </CardGroup>
                </Row>

            </Container>
            </Container>
        )
    }
}
export default translate(Pravila)

/**
 *                                         </div>
 <div className="elementor-icon-box-content">
 <h3 className="elementor-icon-box-title">
 <span>Gdzie nas znajdziesz</span>
 </h3>
 <p className="elementor-icon-box-description"></p><p
 style="text-align:justify"><span style="color: white">ul. Topolowa 31/1    31-506 Kraków<br>
 <span style="font-size: 15px;">tel. 12 312 53 22<br>
 </span><span style="font-size: 15px;">sekretariat@kancelaria-b-s.pl<br>
 </span><span style="font-size: 15px;">Pon-Pt - 08:00-19:00</span><span
 style="font-size: 15px; font-weight: 100; text-align: left;"></span></span>
 </p><p></p>
 </div>
 </div>
 </div>
 </div>

 **/
