import React, {Component} from "react"
import "./Team.css"
import {translate} from "react-switch-lang";
import {Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import CardClip from "../../CardClip/CardClip";

import ZT1 from './ZT/ZT1.jpg';
import ZT2 from './ZT/ZT2.jpg';
import ZT3 from './ZT/ZT3.jpg';
import ZT4 from './ZT/ZT4.jpg';
import ZT5 from './ZT/ZT5.jpg';
import ZT6 from './ZT/ZT6.jpg';
import ZT7 from './ZT/ZT7.jpg';

import WZ1 from './WZ/WZ1.jpg';//Przemysław Pięta
import WZ2 from './WZ/WZ2.jpg';  //Monika Walancik
import WZ3 from './WZ/WZ3.jpg';  //Marta Kabat
import WZ4 from './WZ/Anita.jpg'; //Anita Gruca
import WZ5 from './WZ/Mihail.jpg';
import WZ6 from './WZ/WZ6.jpg';  //Łukasz Góralczyk
import WZ7 from './WZ/WZ7.jpg';  //Wojciech Śliwa
import WZ8 from './WZ/WZ8.jpg';  //Karolina Malicka
import WZ9 from './WZ/WZ9.jpg';
import Grid from "@material-ui/core/Grid"; //Marek Dżuła

class Team extends Component {
    constructor() {
        super();
        this.state = {
            id:"0"
        };
    }
    render() {
        /*
        xs = extra small devices (<576px)
        sm = The number of columns to span on small devices (≥576px)
        md = The number of columns to span on medium devices (≥768px)
        lg = The number of columns to span on large devices (≥992px)
        xl = The number of columns to span on extra large devices (≥1200px)

        */
        const {t} = this.props;
        return (
            <Container fluid={true} className={"row_brown"}>
                <Container fluid={false} className={"team"} id={this.props.id}>

                <div className={"pt-3"}>
                    <h1 className="text-center">{t('header.section5.title')}</h1>
                </div>

                <Grid container spacing={3}>
                    <Grid container item xs={12} sm={12} md={6} lg={6} xl={6} justify={'center'} spacing={0}>
                        <CardClip img={ZT1}
                                  name='Bernadetta Burkiewicz-Śliwa'
                                  prof1='właściciel kancelarii'
                                  prof2='adwokat'
                                  body=''

x                                 backTitle='Bernadetta Burkiewicz-Śliwa'
                                  backText='Ukończyła studia prawnicze na Wydziale Prawa Uniwersytetu Jagiellońskiego w&nbsp;Krakowie w&nbsp;trybie stacjonarnym.
                                  W&nbsp;2013 roku ukończyła aplikację adwokacką przy Okręgowej Radzie Adwokackiej w&nbsp;Krakowie a&nbsp;następnie zdała egzamin adwokacki.
                                  Doświadczenie zawodowe zdobywała od 2008 roku, początkowo pracując w&nbsp;krakowskiej kancelarii, a&nbsp;od 2013 roku prowadzi własną.
                                  Posiada rozległe doświadczenie w&nbsp;obsłudze prawnej przedsiębiorców budowlanych, co stanowi jej wiodącą specjalizację. Szczególne zamiłowanie ma do prawa karnego, którym zajmuje się do początku swojej działalności.
                                  Z&nbsp;uwagi na dobrze rozwinięte umiejętności empatii prowadzi także sprawy rodzinne. Uczestniczka konferencji krajowych i&nbsp;międzynarodowych z&nbsp;prawa medycznego.
                                  Prowadziła medialne procesy sądowe. Włada językiem angielskim.'
                        />
                    </Grid> {/*Bernadeta8*/}
                    <Grid container item xs={12} sm={12} md={6} lg={6} xl={6} justify={'center'} spacing={0}>
                        <CardClip img={ZT2}
                                  name={"Jakub Kuś"}
                                  prof1={"partner kancelarii"}
                                  prof2={"aplikant adwokacki"}
                                  body=''
                                  backTitle={"Jakub Kuś"}
                                  backText='Ukończył studia prawnicze na Wydziale Prawa Uniwersytetu Jagiellońskiego w&nbsp;Krakowie
                                    w&nbsp;trybie stacjonarnym. W&nbsp;2018 roku otrzymał wynik pozytywny z&nbsp;egzaminu wstępnego na aplikację
                                    adwokacką, którą odbywa przy Okręgowej Radzie Adwokackiej w&nbsp;Krakowie. Od 2013 roku pracował
                                    jako prawnik w&nbsp;krakowskiej kancelarii adwokackiej jak również jako asystent syndyków masy
                                    upadłości.
                                    Od 2020 roku związany z&nbsp;kancelarią Bernadetty Burkiewicz-Śliwy, którą aktualnie wspólnie prowadzą.
                                    Specjalizuje się w&nbsp;prawie gospodarczym, upadłościowym, karnym. Ponadto zajmuje się doradztwem w&nbsp;zakresie dotacji dla przedsiębiorców oraz kompleksową obsługa postępowań
                                    w&nbsp;przedmiocie uzyskania i&nbsp;rozliczania dofinansowań. Włada językiem angielskim i&nbsp;rosyjskim.'
                        />
                    </Grid> {/*Kuba*/}
                    <Grid container item xs={12} sm={12} md={6} lg={6} xl={6} justify={'center'} spacing={0}>
                        <CardClip img={ZT4}
                                  name={"Elisaveta Niehanova"}
                                  prof1={"asystentka ds. prawnych "}
                                  prof2={"oraz ds. dotacji"}
                                  body={""}
                                  backTitle='Elisaveta Niehanova'
                                  backText='Studentka Wydziału Prawa i&nbsp;Administracji Krakowskiej Akademii im.&nbsp;Andrzeja  Frycza Modrzewskiego w&nbsp;Krakowie. Uczestnik Poradni Prawnej przy Akademii Krakowskiej Akademii im.&nbsp;Andrzeja  Frycza Modrzewskiego w&nbsp;Krakowie. Języki: polski, rosyjski, ukraiński.'
                        />
                    </Grid> {/*Lisa*/}
                    <Grid container item xs={12} sm={12} md={6} lg={6} xl={6} justify={'center'} spacing={0}>
                    <CardClip img={ZT7}
                              name={"Kamil Wywiał"}
                              prof1={"aplikant radcowski"}
                              prof2={" "}
                              body={""}
                              backTitle='Kamil Wywiał'
                              backText='Ukończył studia prawnicze&nbsp;na Wydziale Prawa&nbsp;i Administracji Uniwersytetu Śląskiego&nbsp;w Katowicach&nbsp;w&nbsp;trybie stacjonarnym. W&nbsp;2020 roku uzyskał pozytywny wynik&nbsp;z egzaminu wstępnego&nbsp;na&nbsp;aplikację radcowską, którą odbywa przy Okręgowej Izbie Radców Prawnych. Z kancelarią Bernadetty Burkiewicz-Śliwy związany od października 2020 roku. Specjalizuje się&nbsp;w szczególności&nbsp;w&nbsp;prawie budowlanym oraz prawie gospodarczo-handlowym. Włada językiem angielskim.'
                    />
                  </Grid> {/*Kamil*/}
                    <Grid container item xs={12} sm={12} md={6} lg={6} xl={6} justify={'center'} spacing={0}>
                    <CardClip img={ZT6}
                              name={"Magdalena Ćwierz"}
                              prof1={"prawnik"}
                              prof2={""}
                              body={""}
                              backTitle='Magdalena Ćwierz'
                              backText='Studentka prawa Instytutu Prawa&nbsp;i Ekonomii Uniwersytetu Pedagogicznego&nbsp;im. Komisji Edukacji Narodowej&nbsp;w Krakowie. Od sierpnia 2019 roku działa&nbsp;w Stowarzyszeniu „Podhale –Nasz Dom” realizującym zadania&nbsp;z zakresu udzielania pomocy osobom pokrzywdzonym przestępstwem oraz osobom im najbliższym. Od września 2020 roku związana&nbsp;z kancelarią adwokacką Bernadetty Burkiewicz-Śliwy. Do obszaru jej zainteresowań należy prawo karne oraz prawo rodzinne. Włada językiem angielskim.'
                    />
                  </Grid> {/*Magda*/}
                    <Grid container item xs={12} sm={12} md={6} lg={6} xl={6} justify={'center'} spacing={0}>
                    <CardClip img={ZT5}
                              name={"Sebastian Białobrzeski"}
                              prof1={"stażysta"}
                              prof2={""}
                              body={""}
                              backTitle='Sebastian Białobrzeski'
                              backText='Student kierunku Prawo&nbsp;na Wydziale Prawa, Administracji&nbsp;i Stosunków Międzynarodowych Krakowskiej Akademii&nbsp;im. Andrzeja Frycza Modrzewskiego. Od września 2020 roku związany&nbsp;z kancelarią adwokacką Bernadetty Burkiewicz-Śliwy. Do jego głównych zainteresowań należą zagadnienia&nbsp;z zakresu prawa karnego, rodzinnego oraz prawa spółek. Języki: angielski, niemiecki.'
                    />
                  </Grid> {/*Sebastian*/}
                    <Grid container item xs={12} sm={12} md={12} lg={12} xl={12} justify={'center'} spacing={0}>
                    <CardClip img={ZT3}
                              name={"Alicja Burkiewicz "}
                              prof1={"kierownik sekretariatu"}
                              prof2={""}
                              body={""}
                              backTitle={"Alicja Burkiewicz "}
                              backText='Obsługa i&nbsp;zarządzanie sprawami administracyjno-finansowymi kancelarii, opiniowanie postępowań w&nbsp;sprawach o&nbsp;wykroczenia, asystent ds.&nbsp;dotacji'
                    />

                  </Grid> {/*Alicia*/}
                </Grid>


                <div className={"row mt-5 text-center row_brown"}>
                    <div className={"col-12 text-center row_brown pt-4"}>
                            <h1 className="heading-title">WSPÓŁPRACUJĄ Z NAMI</h1>
                            <h4>Współpraca z&nbsp;fachowcami z&nbsp;różnych dziedzin umożliwia nam działanie na&nbsp;różnych obszarach.</h4>
                    </div>
                </div>

                <Grid className={"pt-3 pb-3 text-center row_brown"} container spacing={5}>
                    <Grid container item xs={12} sm={6} md={6} lg={4} xl={4} justify={'center'} spacing={0}>
                        <CardClip img={WZ1}
                                  name={"Przemysław Pięta"}
                                  prof1={"radca prawny"}
                                  prof2={""}
                                  body='Współpraca w&nbsp;zakresie prawa spółek, prawa podatkowego, prawa pracy i prawa własności intelektualnej.'
                                  backTitle={"Przemysław Pięta"}
                                  backText='Praktykę zawodową rozpoczął w&nbsp;roku&nbsp;2010&nbsp;r. jako aplikant radcowski w&nbsp;jednej z&nbsp;krakowskich kancelarii.  W&nbsp;2014 roku ukończył aplikację radcowską przy Okręgowej Izbie Radców Prawnych
                                    w&nbsp;Krakowie a&nbsp;następnie złożył z&nbsp;wynikiem pozytywnym egzamin radcowski. Od 2015 roku prowadzi własną kancelarię prawną. Absolwent studiów podyplomowych na&nbsp;Wydziale Prawa Uniwersytetu Jagiellońskiego z&nbsp;dziedziny prawa własności intelektualnej. Specjalizuje się w&nbsp;obsłudze prawnej przedsiębiorców w&nbsp;szczególności z&nbsp;zakresu prawa podatkowego, prawa pracy oraz prawa spółek
                                    z&nbsp;uwzględnieniem przekształceń. Posługuje się&nbsp;językiem angielskim.
'
                        />

                    </Grid>
                    <Grid container item xs={12} sm={6} md={6} lg={4} xl={4} justify={'center'} spacing={0}>
                        <CardClip img={WZ2}
                                  name={"Monika Walancik "}
                                  prof1={"adwokat"}
                                  prof2={""}
                                  body='Współpraca w zakresie prawa migracyjnego, prawnych aspektów zatrudniania obcokrajowców, oraz w&nbsp;zakresie prawa administracyjnego.'
                                  backTitle={"Monika Walancik"}
                                  fontBackText={"13px"}
                                  backText='W&nbsp;2013&nbsp;roku ukończyła aplikację adwokacką przy Okręgowej Radzie Adwokackiej
                                    w&nbsp;Krakowie a&nbsp;następnie zdała egzamin adwokacki. Specjalizuje się&nbsp;w&nbsp;prawie administracyjnym
                                    oraz prawie migracyjnym. Jest jednym z&nbsp;nielicznych adwokatów w&nbsp;Krakowie mających tak duże doświadczenie zawodowe i&nbsp;akademickie w&nbsp;dziedzinie prawa migracyjnego.
                                    Od&nbsp;lat związana jest z&nbsp;Uniwersytetem Jagiellońskim w&nbsp;Krakowie, gdzie pełni funkcję Koordynatora Sekcji Praw Człowieka  Studenckiej Poradni Prawnej.
                                    Była konsultantem wielu aktów prawnych z&nbsp;zakresu prawa cudzoziemców, w&nbsp;tym&nbsp;m.in. nowelizacji ustawy o&nbsp;cudzoziemcach.
                                    Ukończyła Szkołę Prawa Ukraińskiego na&nbsp;Uniwersytecie Jagiellońskim w&nbsp;Krakowie oraz Narodowym Uniwersytecie „Akademia Kijowsko-Mohylańska” w&nbsp;Kijowie.
                                    Była uczestnikiem Academy of European Law w&nbsp;Trewirze. Certyfikowany trener Certified International Professional Trainer®. Włada językiem angielskim, rosyjskim oraz ukraińskim.

'
                        />
                    </Grid>
                    <Grid container item xs={12} sm={6} md={6} lg={4} xl={4} justify={'center'} spacing={0}>
                        <CardClip img={WZ3}
                                  name={"Marta Kabat"}
                                  prof1={"notariusz"}
                                  prof2={""}
                                  body='Współpraca w zakresie czynności wymagających sporządzenia aktu notarialnego.'
                                  backTitle={"Marta Kabat"}
                                  backText='Absolwentka Wydziału Prawa i&nbsp;Administracji Uniwersytetu Jagiellońskiego w&nbsp;Krakowie.
                                  Była stypendystką Wydziału Prawa Université Paris Ouest Nanterre La&nbsp;Défense w&nbsp;Paryżu.
                                  W&nbsp;latach 2010-2012 odbyła aplikację notarialną w&nbsp;Krakowskiej Izbie Notarialnej pod patronatem notariusz Joanny Greguły zakończoną pozytywnym wynikiem z&nbsp;egzaminu notarialnego.
                                  Powołana na&nbsp;notariusza decyzją Ministra Sprawiedliwości z&nbsp;2014 roku. Od&nbsp;1&nbsp;kwietnia 2015 roku prowadzi Kancelarię Notarialną w&nbsp;Krakowie.'
                                  link=' http://notariusz-kabat.pl/o-nas'
                        />
                    </Grid>
                    <Grid container item xs={12} sm={6} md={6} lg={4} xl={4} justify={'center'} spacing={0}>
                        <CardClip img={WZ4}
                                  name={"Anita Gruca"}
                                  prof1={"ekspert finansowy i kredytowy"}
                                  prof2={""}
                                  body='Współpraca w&nbsp;zakresie audytu i&nbsp;renegocjowania warunków kredytowych oraz pozyskiwania finansowania dla przedsiębiorców budowlanych.'
                                  backTitle={"Anita Gruca"}
                                  backText='W&nbsp;branży od&nbsp;2015&nbsp;roku. Zajmuje&nbsp;się pozyskiwaniem dla firm kredytów i&nbsp;innych form finansowego wsparcia.
                                  Specjalizuje się w&nbsp;obsłudze finansowej inwestycji deweloperskich, budowlanych a&nbsp;także doradztwie osobom indywidulanym w&nbsp;zakresie możliwości pozyskania finansowania dla&nbsp;planowanych inwestycji.
                                  Renegocjuje z&nbsp;bankami zawarte umowy kredytowe, zwłaszcza kredyty hipoteczne jak również przeprowadza audyty.'
                                  link='https://www.credits.com.pl'
                        />
                    </Grid>
                    <Grid container item xs={12} sm={6} md={6} lg={4} xl={4} justify={'center'} spacing={0}>
                        <CardClip img={WZ5}
                                  name={"Michał Szul"}
                                  prof1={"ekspert finansowy i kredytowy"}
                                  prof2={""}
                                  body='Współpraca w&nbsp;zakresie audytu i&nbsp;renegocjowania umów kredytowych oraz pozyskiwania finansowania dla przedsiębiorców budowlanych '
                                  backTitle={"Michał Szul"}
                                  backText='Posiada wieloletnie doświadczenie w&nbsp;pracy na&nbsp;rynku bankowości –&nbsp;jestem&nbsp;na nim aktywny nieprzerwanie od ponad 8&nbsp;lat, gromadząc w&nbsp;tym czasie wiedzę pozwalającą na&nbsp;fachową, kompleksową obsługę firm w&nbsp;zakresie pozyskania finansowania.
                                  Współpracuje również z&nbsp;deweloperami w&nbsp;kontekście kredytów deweloperskich oraz procesie rozliczeń z&nbsp;bankami.'
                                  link='https://www.credits.com.pl'

                        />
                    </Grid>
                    <Grid container item xs={12} sm={6} md={6} lg={4} xl={4} justify={'center'} spacing={0}>
                        <CardClip img={WZ6}
                                  name={"Łukasz Góralczyk"}
                                  prof1={"rzeczoznawca majątkowy"}
                                  prof2={""}
                                  body='Współpraca w zakresie sporządzania operatów szacunkowych nieruchomości.'
                                  backTitle={"Łukasz Góralczyk"}
                                  backText='Posiada uprawnienia zawodowe w&nbsp;zakresie szacowania nieruchomości o&nbsp;numerze 5093.
                                  Wyceną nieruchomości zajmuję się od wielu lat, a&nbsp;z&nbsp;rynkiem nieruchomości mam do czynienia z&nbsp;perspektywy wielu jego uczestników.
                                  Prowadzi jedno z&nbsp;największych biur rzeczoznawcy majątkowego w&nbsp;województwie małopolskim.'
                                  link=' https://wycena-goralczyk.pl'
                        />
                    </Grid>
                    <Grid container item xs={12} sm={6} md={6} lg={4} xl={4} justify={'center'} spacing={0}>
                        <CardClip img={WZ7}
                            //www.facebook.com/WszpilkachNaBudowie'
                                  name={"Karolina Malicka"}
                                  prof1={"inspektor budowalny"}
                                  prof2={""}
                                  body='Konsultant w&nbsp;zakresie technicznej oceny roszczeń budowlanych dotyczących mieszkań i domów jednorodzinnych.'
                                  backTitle={"Karolina Malicka"}
                                  backText='Działa w&nbsp;branży od ponad 10 lat. Pomaga osobom nabywającym daną nieruchomości skontrolować jej stan techniczny  przed finalnym zakupem lub
                                      odbiorem kluczy. Ma&nbsp;na koncie sprawdzone ponad 2000 domów i&nbsp;mieszkań, jest znana pod marką W&nbsp;szpilkach na&nbsp;budowie.'
                                  link='https://wszpilkachnabudowie.pl'
                        />
                    </Grid>
                    <Grid container item xs={12} sm={6} md={6} lg={4} xl={4} justify={'center'} spacing={0}>
                        <CardClip img={WZ8}
                                  name={"Wojciech Śliwa "}
                                  prof1={"inspektor budowalny"}
                                  prof2={""}
                                  body='Konsultant w zakresie technicznej oceny roszczeń budowlanych dotyczących inwestycji wielkogabarytowych.'
                                  backTitle={"Wojciech Śliwa "}
                                  backText='Absolwent Wydziału Budownictwa Politechniki Gliwickiej. W&nbsp;2012 roku uzyskał uprawnienia budowlane z&nbsp;zakresu  specjalności konstrukcyjno-budowlanej do
                                      projektowania i&nbsp;nadzorowania robót budowlanych.
                                      Działa w&nbsp;branży budowlanej nieprzerwanie od 2008 roku. Posiada doświadczenie zawodowe pełniąc funkcje techniczne na&nbsp;dużych inwestycjach budowlanych jak również
                                      na stanowiskach kierowniczych odpowiadających za&nbsp;proces finansowania całych inwestycji.'
                        />
                    </Grid>
                    <Grid container item xs={12} sm={6} md={6} lg={4} xl={4} justify={'center'} spacing={0}>
                        <CardClip img={WZ9}
                                  name={"Marek Dżuła"}
                                  prof1={"Konsultant ds z zakresu techniki samochodowej i motoryzacji."}
                                  prof2={""}
                                  body=''
                                  backTitle={"Marek Dżuła"}
                                  backText='Z kancelarią współpracuje w sprawach wymagających opinii z zakresu inżynierii mechanicznej, w szczególności w sprawach o odszkodowanie za najem pojazdu zastępczego oraz naprawę pojazdu. '

                        />
                    </Grid>
                </Grid>
                </Container>
            </Container>
        )
    }
}
export default translate(Team)

/*
1) Przemysław Pięta
2) Monika Walancik
3) Marta Kabat
4) Anita Gruca
5) Michał Szul
5) Łukasz Góralczyk
7) Wojciech Śliwa
8) Karolina Malicka
9) Marek Dżuła

}*/
