import React, {Component} from "react"
import "./Uslugi.css"
import {translate} from "react-switch-lang";
//import {Container} from "react-bootstrap";

import U1 from "./USLUGA1.jpeg"
import U2 from "./USLUGA2.jpeg"
import U3 from "./USLUGA3.jpg"
import U4 from "./USLUGA4.jpeg"
import CardClip from "../../CardClip/CardClip";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

class Uslugi extends Component {
    state = {
        id:"0"
    }
    render() {
        let wz='250px';
        let hr='500px';
        const {t} = this.props;
        return (
            <Container maxWidth="xl" className={"practica  row-centered text-center"}>
                <Container  className={"uslugi row-centered text-center"} id={this.props.id}>
                    <Grid className={"pt-5 pb-3 text-center row_white"} container spacing={2}>
                        <Grid container item justify={'center'}  xs={12}>
                            <h1 className="text-center text-dark">{t('header.section3.title')}</h1>
                        </Grid>

                        <Grid container item xs={12} sm={6} md={3} lg={3} xl={3} justify={'center'} spacing={0}>
                            <CardClip img={U1}
                                      width={wz}
                                      height={hr}
                                      name={"OBSŁUGA PRAWNA PRZEDSIĘBIORCÓW"}
                                      prof1={""}
                                      prof2={""}
                                      body='Z nami łatwo poprowadzisz swój&nbsp;biznes.'
                                      backTitle={""}
                                      fontBackText={"14px"}
                                      backText='Oferujemy kompleksową obsługę prawną przedsiębiorców, w&nbsp;tym doradztwo w&nbsp;bieżących sprawach, sporządzanie projektów pism i&nbsp;umów jak również analizę dokumentów i&nbsp;kontraktów. Przygotowujemy strategie postępowania pod kątem prawnym. Sporządzamy wnioski
do Krajowego Rejestru Sądowego oraz Centralnej Ewidencji i&nbsp;Informacji o&nbsp;Działalności Gospodarczej. Specjalizujemy się w&nbsp;obsłudze przedsiębiorców z&nbsp;branży budowlanej, house flippingu oraz sprzedaży nieruchomości. W&nbsp;tym zakresie współpracujemy
z&nbsp;inżynierami budownictwa oraz specjalistami z&nbsp;zakresu obrotu i&nbsp;wyceny nieruchomości,
którzy są&nbsp;naszymi stałymi konsultantami w&nbsp;sprawach wymagających wiedzy specjalistycznej.
'
                            />
                        </Grid>
                        <Grid container item xs={12} sm={6} md={3} lg={3} xl={3} justify={'center'} spacing={0}>
                            <CardClip img={U2}
                                      width={wz}
                                      height={hr}
                                      name={"POMOC PRAWNA OSOBOM INDYWIDUALNYM"}
                                      prof1={""}
                                      prof2={""}
                                      fontBackText={"12px"}
                                      body='Rozwiązujemy Twoje problemy za Ciebie.'
                                      backTitle={""}
                                      backText='Oferta świadczonych przez nas usług prawnych kierowana jest również do&nbsp;Klienta indywidualnego.  Zapewniamy obsługę począwszy od&nbsp;zwykłej porady po&nbsp;kompleksowe prowadzenie spraw, do&nbsp;których niezbędna jest fachowa wiedza prawnicza lub zachodzi konieczność reprezentacji przed sądem albo organem administracji publicznej. Prowadzimy sprawy o:&nbsp;zapłatę,  odszkodowanie i&nbsp;zadośćuczynienie,  zniesienie współwłasności, wydanie rzeczy (w&nbsp;tym nieruchomości), zasiedzenie, spory sąsiedzkie, ustanowienie służebności, naruszenie dóbr osobistych, rozwód, alimenty, kontakty z&nbsp;dziećmi i&nbsp;władzę rodzicielską, naruszenie praw pracowniczych, stwierdzenie nabycia spadku, dział spadku i&nbsp;długi spadkowe, błędy medyczne, kwestie migracyjne, a&nbsp;także wiele innych szczegółowo opisanych w&nbsp;części dotyczącej obszaru praktyki. Współpraca ze specjalistami z&nbsp;różnych branż pozwala nam skutecznie poruszać
się w wielu obszarach prawa.
'
                            />
                        </Grid>
                        <Grid container item xs={12} sm={6} md={3} lg={3} xl={3} justify={'center'} spacing={0}>
                            <CardClip img={U3}
                                      width={wz}
                                      height={hr}
                                      name={"POSTĘPOWANIA SĄDOWE I ADMINISTRACYJNE"}
                                      prof1={""}
                                      prof2={""}
                                      fontBackText={"14px"}
                                      body='Z powodzeniem i wysoką skutecznością występujemy w procesach.'
                                      backTitle={""}
                                      backText='Ukończona aplikacja adwokacka i&nbsp;posiadane uprawnienia umożliwiają nam reprezentację Klientów przed sądami, organami ścigania oraz organami administracji publicznej. Mamy w&nbsp;tym zakresie wieloletnie doświadczenie, co&nbsp;pozwala nam nazywać siebie praktykami procesowymi. Możemy pełnić funkcje pełnomocników w&nbsp;sprawach cywilnych, gospodarczych i&nbsp;administracyjnych,
jak i obrońców w sprawach karnych, a&nbsp;także pełnomocników osób pokrzywdzonych. Zajmujemy się&nbsp;również sporządzaniem pism procesowych.'
                            />
                        </Grid>
                        <Grid container item xs={12} sm={6} md={3} lg={3} xl={3} justify={'center'} spacing={0}>
                            <CardClip img={U4}
                                      width={wz}
                                      height={hr}
                                      name={"KONSULTACJE ON-LINE"}
                                      prof1={""}
                                      prof2={""}
                                      fontBackText={"14px"}
                                      body='Załatwisz sprawę jednym kliknięciem'
                                      backTitle={""}
                                      backText='Idziemy z&nbsp;duchem postępu i&nbsp;nowoczesności. Korzystamy z&nbsp;narzędzi, które umożliwiają zdalny kontakt z&nbsp;Klientem. Udzielamy porad prawnych i&nbsp;bieżących konsultacji w&nbsp;trybie online. Dzięki temu Klient nie musi fatygować się do&nbsp;naszej kancelarii, gdyż możemy omówić każdą sprawę
na&nbsp;odległość. To bardzo dobry instrument dla osób mieszkających daleko od naszej siedziby,
dla przedsiębiorców potrzebujących pilnej porady w&nbsp;bieżących sprawach, a&nbsp;także dla osób które nie chcą tracić czasu na&nbsp;przemieszczanie się.'
                            />
                        </Grid>

                    </Grid>
                </Container>
            </Container>
        )
    }
}
export default translate(Uslugi)

/*
                    <CardDeck>


                        <Card  style={{ width: '20rem' }}>
                            <Card.Img className="rounded p-2" variant="top" src={U4} alt="U4"/>
                            <Card.Header ><h5 className="text-center">
                                </h5>
                            </Card.Header>
                            <Card.Body>
                                <Card.Text className="text-center"></Card.Text>
                            </Card.Body>
                        </Card>
                    </CardDeck>

* */
