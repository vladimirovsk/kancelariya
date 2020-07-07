import React, {Component} from "react"
import "./Practica.css"
import {translate} from "react-switch-lang";
import {Container, Row, Col, Image} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import PR1  from "./img/PRACTICA1.jpg";
import PR2  from "./img/PRACTICA2.png";
import PR3  from "./img/PRACTICA3.jpg";
import PR4  from "./img/PRACTICA4.jpg";
import PR5  from "./img/PRACTICA5.jpg";
import PR6  from "./img/PRACTICA6.jpg";
import PR7  from "./img/PRACTICA7.jpg";
import PR8  from "./img/PRACTICA8.jpeg";
import PR9  from "./img/PRACTICA9.jpeg";
import PR10 from "./img/PRACTICA10.jpeg";
import PR11 from "./img/PRACTICA11.png";
import PR12 from "./img/PRACTICA12.jpg";

class Practica extends Component {
    state = {
        id:"0"
    }
    render() {
        const {t} = this.props;
        return (
            <Container fluid={true} className={"practica"}>
            <Container fluid={'sm'} className={"practica"} id={this.props.id}>
                <div className={"pt-4"}>
                    <h1 className="text-center heading-title">{t('header.section4.title')}</h1>
                </div>
                <Row className="practica_1 pt-4 row_brown">
                    <Col className="text-center" sm={3}>
                        <picture>
                            <Image src={PR1} width="300px"  className="img-fluid rounded align-content-center p-2"  alt="PRACTICA1"/>
                        </picture>

                    </Col>
                    <Col sm={9}>
                        <Container className="pl-sm-2">
                            <div className="zagolov text-center font-weight-bold">Obsługa inwestycji budowlanych </div>
                            <p className={"mt-2 text-justify"}>Nic tak nie zabezpieczy interesów stron procesu inwestycyjno-budowlanego jak precyzyjnie skonstruowana umowa i rzetelny obieg dokumentów. W przeciwnym razie łatwo narazić się na
                                zarzut niewłaściwego wykonywania umowy, co może skończyć się zerwaniem kontraktu, naliczeniem kar umownych lub odmową zapłaty wynagrodzenia. Podejmując się kompleksowej obsługi prawnej inwestycji budowlanych czuwamy,
                                aby zawierane umowy normowały wszystkie kwestie mogące rodzić spory na przyszłość oraz należycie chroniły interesy Klienta. W&nbsp;toku realizacji inwestycji dbamy, aby były odpowiednio dokumentowane wszelkie podejmowane czynności
                                oraz okoliczności wpływające na jej przebieg. Doradzamy także jak reagować w&nbsp;sytuacji nierzetelnego wykonywania umów przez kontrahentów i pomagamy egzekwować od nich odpowiednie roszczenia, w&nbsp;tym o zapłatę wynagrodzenia,
                                kar umownych, czy usunięcie usterek.</p>

                            <div className={"row_brown  text-center  mb-4"}>
                                <a className="text-white font-weight-bold text-center" data-toggle="collapse" href="#collapse1"
                                   role="button" aria-expanded="false" aria-controls="collapse1">
                                    Dowiedz się więcej
                                </a>
                            </div>
                        </Container>
                    </Col>
                    <Col className="collapse mb-4" id="collapse1">
                        <div className="mt-2 text-justify">
                            <div className="mt-1">
                                Oferta kierowana jest do&nbsp;przedsiębiorców budowlanych: inwestorów, generalnych wykonawców, podwykonawców, dostawców materiałów, maszyn i urządzeń oraz innych podmiotów dostarczających usługi na&nbsp;rynku budowlanym.
                            </div>
                            <div className="mt-1">
                                Zajmujemy się szeroko rozumianym prawem budowlanym. Skupiamy się na&nbsp;kompleksowej obsłudze prawnej firm budowlanych oraz całych procesów inwestycyjnych.
                                Wyróżnia nas to, iż współpracujemy z&nbsp;fachowcami z&nbsp;branży budowlanej posiadającymi odpowiednie uprawnienia,
                                którzy zapewniają nam wsparcie merytoryczne w&nbsp;rozumieniu specjalistycznych zagadnień.
                            </div>
                            <div className="mt-1">
                                Oferujemy usługi polegające na:
                            </div>
                            <ul className="mt-2">
                                <li>
                                    przygotowywaniu projektów umów, jak również opiniowaniu już zawartych w&nbsp;ramach procesu inwestycyjnego umów, w&nbsp;tym: o&nbsp;roboty budowlane, o&nbsp;dzieło,
                                    dostawy,  sprzedaży, świadczenia usług oraz innych kontraktów wiążących podmioty współdziałające
                                    na inwestycji; pracujemy też na umowach tworzonych w&nbsp;oparciu o&nbsp;FIDIC
                                </li>
                                <li>przygotowaniu  projektów dokumentów i&nbsp;pism przyjętych w&nbsp;obiegu inwestycyjno
                                    -budowlanym, w&nbsp;tym: wniosków o&nbsp;przedłużenie terminu realizacji, wezwań
                                    do przyspieszenia tempa wykonywania prac, wezwań do zwiększenia stanu osobowego, wezwań do usunięcia wad i&nbsp;usterek, zawiadomień o&nbsp;wystąpieniu przeszkód w&nbsp;realizacji prac, oświadczeń o&nbsp;odstąpieniu, oświadczeń o&nbsp;naliczeniu kar umownych
                                </li>
                                <li>uczestnictwie w&nbsp;negocjacjach</li>
                                <li>bieżącym doradztwie i&nbsp;tworzeniu strategii</li>
                                <li>windykacji należnego wynagrodzenia i&nbsp;innych roszczeń finansowych</li>
                                <li>dochodzeniu roszczeń wynikających z&nbsp;niewykonania lub nierzetelnego wykonania umowy</li>
                                <li>dochodzeniu roszczeń z&nbsp;tytułu rękojmi i&nbsp;gwarancji</li>
                                <li>przeprowadzeniu wszelkich procedur administracyjno-prawnych koniecznych do rozpoczęcia i&nbsp;zakończenia inwestycji budowlanej</li>
                                <li>reprezentacji w&nbsp;postępowaniach sądowych</li>
                            </ul>
                            <div className={"mt-1"}>
                                W branży budowlanej na porządku dziennym pojawiają się problemy związane z&nbsp;niemożnością dotrzymania uzgodnionego terminu realizacji, wystąpieniem usterek lub
                                naliczeniem kar umownych. Okoliczności te w&nbsp;konsekwencji częstokroć skutkują odmową zapłaty wynagrodzenia.
                            </div>
                            <div>
                                Praktyka pokazuje, iż&nbsp;komplikacje wynikają najczęściej ze&nbsp;zmian wprowadzanych w&nbsp;toku realizacji inwestycji, takich jak: poszerzanie zakresu robót, wprowadzanie robót zamiennych,
                                czy zmian projektowych, ale także z&nbsp;innych niespodziewanych okoliczności m.in.:&nbsp;nieprzewidzianych ograniczeń w&nbsp;dostawie materiałów, maszyn i&nbsp;urządzeń, braku
                                odpowiedniej koordynacji prac wykonawców, braku uwzględnienia wpływu poszczególnych prac na efektywność wykonywania robót przez innych uczestników procesu budowlanego, czynników
                                atmosferycznych lub zjawisk przyrodniczych.  Często zdarza się, iż&nbsp;zaistniałe okoliczności nie zostały przewidziane i&nbsp;uregulowane w&nbsp;umowie, co&nbsp;stanowi źródło późniejszych sporów.
                            </div>
                            <div>
                                Do tego dochodzi dynamika przebiegu inwestycji budowlanych wiążąca się z&nbsp;niedbałością
                                w sporządzaniu i&nbsp;gromadzeniu dokumentacji w&nbsp;toku realizacji prac. Braki i&nbsp;niedociągnięcia
                                w omawianym zakresie skutkują niemożnością wykazania na późniejszym etapie (zwłaszcza na etapie rozliczeń) okoliczności leżących u&nbsp;podstaw niewywiązania się z&nbsp;ustalonych warunków umownych. To zaś łatwo może zostać wykorzystane w&nbsp;celu uniknięcia płatności należnego wynagrodzenia  lub naliczenia kar finansowych.
                            </div>
                            <div>
                                Gdy umowa nie jest precyzyjnie sformułowana, to w&nbsp;razie zaistnienia kwestii spornych często obie strony uważają, że mają rację, nie mogąc osiągnąć porozumienia. W&nbsp;takich okolicznościach sprawa najczęściej trafia do Sądu, a&nbsp;stan niepewności zostaje wydłużony o&nbsp;kilka lat. Dobra umowa i&nbsp;rzetelny obieg dokumentów to klarowna sytuacja i&nbsp;lepsza współpraca.
                                To zaś może zapewnić stała obsługa prawna doświadczonych profesjonalistów.
                            </div>
                            <div>
                                Nadmienić wypada, iż egzekwowanie swoich racji często przychodzi z&nbsp;trudem uczestnikom branży budowlanej z&nbsp;sektora wykonawstwa i&nbsp;podwykonawstwa, którzy niechętnie występują na drogę sądową o&nbsp;zapłatę wynagrodzenia z&nbsp;obawy przed utratą stałych relacji gospodarczych. Preferują zachować poprawne stosunki ze swoim stałym zleceniodawcą kosztem nie raz zbyt daleko idących ustępstw.  Wielu zaś z&nbsp;zasygnalizowanych problemów można uniknąć, korzystając od początku
                                z&nbsp;fachowej pomocy prawnej.
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="practica_2 pt-4 row_white">
                    <Col sm={9}>
                        <Container className="pl-sm-2">
                            <div className="zagolov text-dark">
                                Roszczenia z tytułu rękojmi i gwarancji nabywców lokali
                            </div>
                            <div className="text-justify mt-2 tab_text">
                                Nabywcy lokali, którzy w&nbsp;czasie odbioru lub użytkowania stwierdzili wystąpienie usterek mogą liczyć na naszą pomoc w&nbsp;egzekwowaniu zasadnych roszczeń. Fachowość naszych usług opiera się na ścisłej współpracy ze&nbsp;specjalistami z&nbsp;branży budowlanej, którzy opiniują stwierdzone wady pod kątem przyczyn ich wystąpienia oraz konsekwencji ich zaistnienia na przyszłość. Ocena techniczna pomaga nam odpowiednio skonstruować roszczenia i&nbsp;znaleźć dla nich prawne uzasadnienie. Reprezentujemy Klientów przed deweloperami oraz zbywcami z&nbsp;rynku wtórnego, a&nbsp;gdy zachodzi taka potrzeba
                                – także w&nbsp;postępowaniach sądowych. Ofertę naszą adresujemy jednocześnie do inwestorów budowlanych, przeciwko którym kierowane są bezpodstawne roszczenia z&nbsp;tytułu odpowiedzialności za wady lokalu/budynku.
                            </div>

                            <div className={"row_white text-center font-weight-bold text-dark"}>
                                <a data-toggle="collapse" href="#collapse2"
                                   role="button" aria-expanded="false" aria-controls="collapse2">
                                    <div className={"text-center pt-4 mb-4 text-dark"}>Dowiedz się więcej</div>
                                </a>
                            </div>
                        </Container>
                    </Col>
                    <Col sm={3} className={"text-center align-items-center"}>
                        <picture>
                            <Image src={PR2} width="300px" className="img-fluid rounded align-content-center p-2"  alt="ONAS"/>
                        </picture>
                    </Col>
                    <Col className="collapse mb-4" id="collapse2">
                        <div className="mt-2 text-justify tab_text">
                            <div className={"font-weight-bold"}>Pomoc nabywcom</div>
                            <div>
                                W tym zakresie świadczymy usługi polegające na:
                            </div>
                            <ul>
                                <li>uczestnictwie w&nbsp;procesie odbioru lokali lub odbioru stwierdzonych wad</li>
                                <li>zapewnieniu profesjonalnego wsparcia technicznego w czynnościach odbiorowych</li>
                                <li>sporządzaniu wezwań do usunięcia wad</li>
                                <li>sporządzaniu oświadczeń o obniżeniu wynagrodzenia</li>
                                <li>opiniowaniu w przedmiocie zasadności roszczeń z tytułu stwierdzonych wad oraz zakresu odpowiedzialności właściwych podmiotów</li>
                                <li>doradzaniu jak rozwiązać sporne sytuacje dotyczące wystąpienia wad lokalu</li>
                                <li>reprezentacji interesów nabywców wadliwych lokali przed zbywcą</li>
                                <li>dochodzeniu przed sądem roszczeń z tytułu rękojmi i gwarancji</li>
                            </ul>
                            <div className={"font-weight-bold"}>Ochrona fliperów</div>
                            <div >
                                Współpraca z&nbsp;fachowcami z&nbsp;branży budowlanej umożliwia nam reprezentację interesów zbywcy lokalu w sytuacji skierowania przeciwko niemu bezpodstawnych roszczeń z&nbsp;tytułu wad zakupionego lokalu.
                                Problem ten często dotyka fliperów, wykonujących remonty zakupionych lokali w&nbsp;celu dalszej odsprzedaży. Zdarza się, że nabywcy w&nbsp;toku użytkowania stwierdzają, że lokal nie spełnia ich oczekiwań i&nbsp;domagają się od sprzedawców usuwania niedogodności, finansowych rekompensat, a&nbsp;nawet grożą odstąpieniem od umowy. Wówczas rozpoczyna się spór wokół tego, czy zgłaszane jako usterki cechy lokalu stanowią rzeczywiście wady w&nbsp;rozumieniu przepisów prawnych, czy może usterki są wynikiem wadliwej eksploatacji lub zwykłego zużycia. Nierzadko źródłem nieporozumienia bywają błędy w&nbsp;komunikacji skutkujące rozbieżną oceną stron dotyczącą tego, o&nbsp;jakich cechach lokalu nabywca był zapewniany w&nbsp;chwili dokonywania zakupu lub tego,
                                czy i&nbsp;o&nbsp;jakich swoich wymaganiach informował zbywcę. Uruchomienie pomocy prawnej
                                na odpowiednim etapie może pomóc uniknąć opisanych problemów.
                            </div>
                            <div>
                                Nie ma dla nas znaczenia po której stronie barykady występujemy. Zawsze koncentrujemy się
                                na tym, aby rzetelnie zaopiniować sytuację prawną Klienta i&nbsp;przedstawić przysługujące
                                mu w&nbsp;świetle przepisów uprawnienia oraz możliwości egzekwowania tych roszczeń.  Doradzamy także w doborze strategii.
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="practica_3 pt-4 row_brown">
                    <Col className="text-center" sm={3}>
                        <picture>
                            <Image src={PR3} width="300px"  className="img-fluid rounded align-content-center p-2"  alt="PRACTICA3"/>
                        </picture>

                    </Col>
                    <Col sm={9}>
                        <Container className="pl-sm-2">
                            <div className="zagolov text-center font-weight-bold">Samowola budowlana i inne sprawy administracyjno-budowlane</div>
                            <p className={"mt-2 text-justify tab_text"}>Nie trzeba wyjaśniać, iż budowa większości obiektów budowlanych bez dopełnienia stosownych procedur jest samowolą budowlaną,
                                co może zakończyć się nałożeniem wysokiej opłaty legalizacyjnej albo nakazem rozbiórki, a&nbsp;także wszczęciem
                                postępowania karnego. Nie każdy jednak wie, żę budowa garażu lub pomieszczenia gospodarczego na własnej posesji także
                                może stanowić samowolę skutkującą represjami finansowymi i&nbsp;karnymi. Podobnie urządzenie biura w
                                mieszkaniu może zostać uznane za samowolną zmianę sposobu użytkowania i&nbsp;spowodować nałożenie kar finansowych.
                                Dzięki posiadanemu doświadczeniu w&nbsp;postępowaniach administracyjno-budowlanych pomagamy zainteresowanym przebrnąć przez
                                skomplikowane procedury jak również doradzamy jak uniknąć finansowych obciążeń. A&nbsp;może zostałeś obciążony wysoka opłątą
                                adiacencką lub planistyczną i&nbsp;nie zgadzasz się z&nbsp;jej wysokością. Sprawdzamy, czy organy administracyjne nałożyły
                                opłaty zgodnie z&nbsp;prawem i&nbsp;w&nbsp;słusznej wysokości.</p>
                            <div className={"row_brown text-center mb-4"}>
                                <a className="text-white font-weight-bold text-center pt-4" data-toggle="collapse" href="#collapse3"
                                   role="button" aria-expanded="false" aria-controls="collapse3">
                                    Dowiedz się więcej
                                </a>
                            </div>

                        </Container>
                    </Col>
                    <Col className="collapse mb-4" id="collapse3">
                        <div className="mt-2 text-justify tab_text">
                            <div className="mt-2">
                                Naszymi Klientami są&nbsp;przedsiębiorcy, osoby indywidualne oraz architekci występujący przed organami administracyjnymi
                                w&nbsp;imieniu inwestorów budowlanych.
                                Posiadamy rozległe doświadczenie w&nbsp;postępowaniu o:&nbsp;uzyskanie pozwolenia na budowę/zgłoszenia budowy,
                                uzyskanie pozwolenia na użytkowanie/zgłoszenia zakończenia robót, zgłoszenia zmiany sposobu użytkowania, a&nbsp;także samowoli budowlanej oraz jej legalizacji.
                            </div>
                            <div className="mt-2">
                                Przed rozpoczęciem robót budowlanych trzeba w&nbsp;pierwszej kolejności przeanalizować, czy inwestycja wymaga uzyskania pozwolenia na budowę, czy wystarczy ją zgłosić. Może też tak być, że w&nbsp;ogóle nie trzeba zaprzątać sobie tym głowy, gdyż prawo budowlane dopuszcza budowy bez wspomnianych formalności. Zdarza się, że przepisy są sformułowane na tyle niejednoznacznie, że ocena inwestora budowlanego co do zakresu koniecznych czynności administracyjno-prawnych odbiega od oceny dokonanej przez organy nadzoru budowlanego.  Jeśli różnice w&nbsp;poglądach ujawnią się po ukończeniu inwestycji, może to oznaczać dla inwestora poważne problemy, łącznie z&nbsp;odpowiedzialnością karną. Praktyka pokazuje, iż&nbsp;warto skorzystać
                                z&nbsp;pomocy prawnika jeszcze przed rozpoczęciem zamierzenia budowlanego, aby ocenił
                                on to zamierzenie pod kątem niezbędnych formalności administracyjno-prawnych i&nbsp;pomógł przebrnąć, przez wymagane procedury. Jeśli zaś inwestor ma już postawiony zarzut popełnienia przestępstwa samowoli budowlanej, to pomoc doświadczonego obrońcy wydaje się nieodzowna.
                            </div>

                            <div className="mt-2">
                                Sprawy administracyjno-budowlane to także popularna opłata adiacenka i&nbsp;opłata planistyczna. Ustalamy dla Klientów, czy nałożona na nich na mocy decyzji administracyjnej opłata została słusznie naliczona oraz czy prawidłowo ustalona została jej wysokość w&nbsp;tym, czy biegły dokonujący wyceny uwzględnił wszystkie istotne parametry decydujące o&nbsp;wartości nieruchomości, czy zbadał właściwy obszar rynku oraz czy dokonał wyboru właściwej metody. Opłata planistyczna stanowi dochód własny gminy, wobec czego staje się czasem przedmiotem nadużyć finansowych wobec obywateli. Opłaty planistycznej nie pobiera się m.in. w&nbsp;sytuacji, gdy w&nbsp;uchwale Rady Gminy dotyczącej miejscowego planu zagospodarowania przestrzennego nie określono wysokości stawki procentowej opłaty planistycznej. Zdarzają się sytuację, że pomimo braku stawki procentowej opłaty planistycznej, gmina naliczy taką opłatę i&nbsp;wyda decyzję w&nbsp;tej sprawie.
                                W&nbsp;świetle obowiązującego prawa tak wydana decyzja będzie nieważna.
                            </div>

                            <div className={"mt-3"}>
                                W obszarze prawa administracyjno-budowlanego oferujemy pomoc prawną w sprawach o:
                            </div>
                            <ul>
                                <li>pozwolenie na budowę/zgłoszenie budowy</li>
                                <li>pozwolenie na użytkowanie/zakończenie budowy</li>
                                <li>zgłoszenie zmiany sposobu użytkowania</li>
                                <li>samowolę budowlaną i opłatę legalizacyjną</li>
                                <li>opłatę adiacencką</li>
                                <li>opłatę planistyczną</li>
                                <li>rozgraniczenie nieruchomości</li>
                            </ul>

                            <div className={"mt-3"}>
                                We wskazanych postępowaniach oferujemy następujące usługi:
                            </div>
                            <ul>
                                <li>sporządzanie wniosków inicjujących postępowania</li>
                                <li>sporządzanie pism w toku postępowania administracyjnego i wniosków dowodowych</li>
                                <li>uczestnictwo w oględzinach, wizjach lokalnych, rozprawach</li>
                                <li>odwołania od decyzji i sprzeciwy</li>
                                <li>skargi do wojewódzkich sądów administracyjnych oraz do Naczelnego Sądu Administracyjnego</li>
                                <li>ocena prawna sytuacji Klienta pod kątem przepisów szeroko rozumianego prawa budowlanego i bieżące doradztwo</li>
                                <li>sporządzanie opinii prawnych</li>
                            </ul>
                            <div className={"mt-2"}>
                                Ponadto pełnimy funkcję obrońców w sprawach karnych o samowolę budowlaną.
                            </div>
                            <div className={"mt-2"}>
                                W omawianych sprawach korzystamy ze wsparcia zewnętrznych rzeczoznawców budowlanych
                                i majątkowych, którzy pomagają nam ocenić zagadnienia wymagające wiedzy branżowej.
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="practica_4 pt-4 row_white">
                    <Col sm={9}>
                        <Container className="pl-sm-2">
                            <div className="zagolov text-dark">
                                Windykacja należności
                            </div>
                            <div className="text-justify mt-2">
                                Oferta skierowana jest do osób, które borykają się z&nbsp;problemem niezapłaconych należności. Podejmowanie działań windykacyjnych jest bardzo absorbujące. Biurokracja związana z odzyskiwaniem długów pochłania czas i&nbsp;energię, którą Klient może przeznaczyć na świadczenie usług w&nbsp;ramach własnej
                                działalności zarobkowej. Powierzając sprawę nam, Klient zyskuje czas na
                                swoje branżowe zadania, otrzymując profesjonalne wsparcie windykacyjne obejmujące ponaglenia, monity, wezwania, negocjacje, reprezentację przed sądem i&nbsp;komornikiem, a&nbsp;także
                                kalkulacje opłacalności sądowego odzyskiwania długów w&nbsp;sytuacji prawdopodobieństwa niewypłacalności dłużnika.
                            </div>
                            <div className={"row_white text-center font-weight-bold text-dark "}>
                                <a data-toggle="collapse" href="#collapse4"
                                   role="button" aria-expanded="false" aria-controls="collapse4">
                                    <div className={"text-center text-dark pt-4 mb-4"}>Dowiedz się więcej</div>
                                </a>
                            </div>

                        </Container>
                    </Col>
                    <Col sm={3} className={"text-center align-items-center"}>
                        <picture>
                            <Image src={PR4} width="300px" className="img-fluid rounded align-content-center p-2"  alt="ONAS"/>
                        </picture>
                    </Col>
                    <Col className="collapse mb-4" id="collapse4">
                        <div className="mt-4 text-justify tab_text">
                            <div>
                                W ramach dochodzenia należności podejmujemy następujące czynności:
                            </div>
                            <ul className="mt-4">
                                <li>sporządzamy ponaglenia, monity i przedsądowe wezwania do zapłaty</li>
                                <li>prowadzimy negocjacje z dłużnikiem  </li>
                                <li>przygotowujemy pozwy o zapłatę i inne pisma procesowe </li>
                                <li>składamy wnioski egzekucyjne</li>
                                <li>sporządzamy zgłoszenia wierzytelności w postępowaniu upadłościowym</li>
                                <li>reprezentujemy Klientów w postępowaniu sądowym, egzekucyjnym i upadłościowym</li>

                            </ul>
                            <div className="mt-4 text-justify">
                                Mając świadomość tego, iż wielu Klientom zależy na zachowaniu dobrej relacji z&nbsp;dłużnikiem, staramy się podejść do tematu tak, aby strony były w&nbsp;stanie
                                porozumieć się i&nbsp;uniknąć konieczności występowania na drogę sądową.  Spory z&nbsp;tytułu zadłużenia nie muszą oznaczać zerwania relacji gospodarczych -&nbsp;czego często
                                obawiają się przedsiębiorcy, wykazując gotowość do zbyt daleko idących ustępstw.
                                Odpowiednio przeprowadzone negocjacje pozwalają osiągnąć porozumienie nawet najbardziej zwaśnionym stronom.
                            </div>
                            <div className="mt-4 text-justify">
                                Pomagamy Klientom wypracować rozsądne warunki ugody.  W&nbsp;naszej pracy stawiamy
                                na pertraktacje i budowanie mocnej pozycji negocjacyjnej naszego Klienta, kierując się zasadą,
                                iż sąd to ostateczność.  Wyróżnia nas to, że&nbsp;szczegółowo informujemy Klienta o&nbsp;następstwach uruchomienia procedury sądowej, w&nbsp;tym
                                koniecznych opłatach i długotrwałości postępowania, dokonując wszechstronnej analizy porównawczej ryzyka i&nbsp;strat związanych z&nbsp;sądową drogą dochodzenia roszczeń
                                a&nbsp;alternatywnym rozwiązaniem polubownym.
                            </div>
                            <div className="mt-4 text-justify">
                                Reprezentujemy także interesy osób, na których ciąży zadłużenie, a&nbsp;którego nie są w stanie uregulować podejmując w&nbsp;ich imieniu:
                            </div>
                            <ul className="mt-4">
                                <li>negocjacje ugodowe</li>
                                <li>wnioski o odroczenie płatności</li>
                                <li>wnioski o rozłożenie należności na raty</li>
                                <li>pośrednictwo w sprzedaży i kupnie wierzytelności</li>
                            </ul>
                        </div>
                    </Col>

                </Row>
                <Row className="practica_5 pt-4 row_brown">
                    <Col className="text-center" sm={3}>
                        <picture>
                            <Image src={PR5} width="300px"  className="img-fluid rounded align-content-center p-2"  alt="PRACTICA5"/>
                        </picture>

                    </Col>
                    <Col sm={9}>
                        <Container className="pl-sm-2">
                            <div className="zagolov text-center font-weight-bold">Odszkodowania za uszczerbek na zdrowiu i następstwa nieszczęśliwych zdarzeń</div>
                            <p className={"mt-2 text-justify tab_text"}>Niniejszą ofertę kierujemy do osób poszkodowanych w nieszczęśliwych zdarzeniach.
                                Rodzimy porządek prawny wymaga od osób dochodzących rekompensaty za doznany w wypadku uszczerbek na zdrowiu, aby skrupulatnie wykazały zasadność swoich żądań.
                                W&nbsp;przeciwnym razie nie zostaną one uwzględnione. Wymogi dotyczące udowodnienia roszczeń przeważnie przerastają możliwości przeciętnego człowieka. Ubezpieczyciele zaś – nawet jeśli uznają swoją odpowiedzialność - rzadko proponują satysfakcjonujące kwoty pieniężne. Jesteśmy po to, aby&nbsp;wykorzystać posiadaną w tym zakresie wiedzę i doświadczenie w celu przeprowadzenia niezbędnych procedur za Klienta, oszczędzając jego czas i nerwy. Naszym zadaniem jest&nbsp;doprowadzenie do uzyskania kwoty w pełni rekompensującej poniesione straty finansowe i doznane cierpienia.</p>

                            <div className={"row_brown text-center mb-4"}>
                                <a className="text-white font-weight-bold text-center pt-4 mb-4" data-toggle="collapse" href="#collapse5"
                                   role="button" aria-expanded="false" aria-controls="collapse5">
                                    Dowiedz się więcej
                                </a>
                            </div>


                        </Container>
                    </Col>
                    <Col className="collapse mb-4" id="collapse5">
                        <div className="mt-2 text-justify">
                            <div className="mt-2">
                                Niniejsza ofertę kierujemy do:
                            </div>
                            <ul className="mt-2">
                                <li>poszkodowanych w wypadkach drogowych</li>
                                <li>poszkodowanych w wypadkach przy pracy</li>
                                <li>poszkodowanych w wyniku błędów medycznych</li>
                                <li>poszkodowanych w innych nieszczęśliwych zdarzeniach</li>
                            </ul>

                            <div className="mt-2">
                                Ponadto dochodzimy roszczeń o odszkodowanie i zadośćuczynienie w związku ze śmiercią osoby najbliższej.
                            </div>

                            <div className={"mt-3"}>
                                W ramach podejmowanych działań:
                            </div>
                            <ul className={"mt-3"}>
                                <li>podpowiadamy na co zwracać uwagę w procesie dochodzenia roszczeń odszkodowawczych</li>
                                <li>podpowiadamy, jakie należy zgromadzić dowody, aby wykazać zasadność żądanej kwoty</li>
                                <li>kierujemy wezwania do zapłaty i odwołania od decyzji ubezpieczycieli</li>
                                <li>bierzemy udział w negocjacjach i pertraktujemy warunki ewentualnej ugody</li>
                                <li>sporządzamy pozwy oraz reprezentujemy Klientów w postępowaniu sądowym</li>
                            </ul>

                            <div className={"mt-3"}>
                                Posiadamy wysoką skuteczność w dochodzeniu roszczeń przed sądem.
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="practica_6 pt-4 row_white">
                    <Col sm={9}>
                        <Container className="pl-sm-2">
                            <div className="zagolov text-dark">
                                Sprawy rodzinne
                            </div>
                            <div className="text-justify mt-2">
                                Mimo prostych rozwiązań legislacyjnych dziedzina ta dla wielu prawników stanowi wyzwanie. Żaden inny obszar praktyki nie wymaga od adwokata tak rozległych zasobów empatii jak reprezentacja w sporach rodzinnych. Miarą skutecznej pomocy jest odpowiednie podejście do Klienta i właściwa komunikacja. Spory rodzinne to silne emocje, a te często podpowiadają najgorsze rozwiązania. Zadaniem dobrego prawnika jest ogląd na sprawę nie przez pryzmat emocji Klienta, lecz najlepszej ochrony jego interesów, tak aby wskazać mu ścieżkę postępowania zgodną z literą prawa a jednocześnie pozwalającą zminimalizować koszty emocjonalne.                            </div>
                            <div className={"mb-4 row_white text-center font-weight-bold text-dark "}>
                                <a data-toggle="collapse" href="#collapse6"
                                   role="button" aria-expanded="false" aria-controls="collapse6">
                                    <div className={"text-center text-dark pt-4"}>Dowiedz się więcej</div>
                                </a>
                            </div>
                        </Container>
                    </Col>
                    <Col sm={3} className={"text-center align-items-center"}>
                        <picture>
                            <Image src={PR6} width="300px" className="img-fluid rounded align-content-center p-2"  alt="ONAS"/>
                        </picture>
                    </Col>
                    <Col className="collapse mb-4" id="collapse6">

                                <div className="mt-4 text-justify tab_text">
                                    <div>
                                        W obszarze prawa rodzinnego, oferujemy głównie pomoc prawną w sprawach o:
                                    </div>
                                    <ul className="mt-4">
                                        <li>rozwód i separację</li>
                                        <li>podział majątku pomiędzy byłymi małżonkami</li>
                                        <li>finansowe roszczenia byłych małżonków</li>
                                        <li>zasądzenie, podwyższenie, obniżenie alimentów</li>
                                        <li>powierzenie, ograniczenie, pozbawienie władzy rodzicielskiej</li>
                                        <li>kontakty z dzieckiem i ustalenie miejsca pobytu dziecka</li>
                                        <li>sądowe rozstrzygnięcia o istotnych sprawach dziecka (zmiana miejsca zamieszkania, wyjazd za granicę, zmiana nazwiska, zmiana placówki szkolnej)</li>
                                        <li>opiekę i kuratelę</li>
                                    </ul>
                                    <div className="mt-4 text-justify">
                                        Prawo rodzinne reguluje nie tylko kwestie rozwodów i alimentów. Rodzice żyjący w rozłączeniu często nie potrafią dojść do porozumienia w sprawach dotyczących ich dzieci. Spierają się głównie o widzenia, ich częstotliwość, czas trwania, a nawet sposób wspólnego spędzania czasu.
                                        Im większy stopień skonfliktowania stron, tym trudniej osiągnąć porozumienie.
                                    </div>
                                    <div className="mt-4 text-justify">
                                        W czasach otwartych granic często spotykanym problemem jest spór o wyjazd dziecka na stałe
                                        za granicę. Rodzic pozostający w kraju może obawiać się, iż zmiana ta odbije się ujemnie na więzi rodzicielskiej, co skutkuje odmową wyrażenia zgody. W takiej sytuacji rodzic, który wiąże swoje plany na przyszłość z wyjazdem za granicę może jedynie wystąpić z wnioskiem o rozstrzygnięcie spornej kwestii przez sąd. Każde z rodziców staje wówczas przed wyzwaniem przekonania składu sędziowskiego o słuszności swoich argumentów.
                                    </div>
                                    <div className="mt-4 text-justify">
                                        Zdarzają się sytuację, że zaognione konflikty w sprawach wychowawczych pojawią się także wśród rodziców żyjących we wspólnym gospodarstwie domowym. Z naszej praktyki wskazać możemy
                                        np. na spór dotyczący uczęszczania dziecka na lekcje religii, który został poddany sądowej ocenie.
                                        Niezgoda pomiędzy rodzicami może rozwinąć się także wokół kwestii zmiany nazwiska dziecka, co najczęściej ma miejsce po orzeczeniu rozwodu i zmiany nazwiska matki dziecka.
                                    </div>
                                    <div className="mt-4 text-justify">
                                        Mając doświadczenie w opisanych sprawach oferujemy pomoc prawną i profesjonalną reprezentację przed Sądem. Skuteczne popieranie racji Klienta jest jednak możliwe tylko wówczas, gdy idzie w parze z empatycznym podejściem i nastawieniem na zrozumienie. Mając
                                        zaś na uwadze, iż przenoszenie spraw rodzinnych na arenę sądową zawsze naraża Klientów
                                        i ich bliskich na zbędne koszty emocjonalne, w pierwszej kolejności dążymy do wykorzystania narzędzi umożliwiających polubowne rozwiązanie sporu, a dopiero gdy to nie jest możliwe,
                                        to występujemy na drogę procesu sądowego.
                                    </div>
                                    <div className="mt-4 text-justify">
                                        W naszej ofercie mieści się nadto doradztwo przy wyborze małżeńskiego ustroju majątkowego. Podpowiadamy Klientom rozwiązania najlepiej zabezpieczające ich interesy finansowe i osobiste.
                                    </div>
                                </div>
                    </Col>
                </Row>
                <Row className="practica_7 pt-4 row_brown">
                    <Col className="text-center" sm={3}>
                        <picture>
                            <Image src={PR7} width="300px"  className="img-fluid rounded align-content-center p-2"  alt="PRACTICA7"/>
                        </picture>

                    </Col>
                    <Col sm={9}>
                        <Container className="pl-sm-2">
                            <div className="zagolov text-center font-weight-bold">Prawo spółek i działalności gospodarczej</div>
                            <p className={"mt-2 text-justify tab_text"}>Wybór&nbsp;formy prawnej działalności gospodarczej to&nbsp;częsty dylemat, przed którym stają przedsiębiorcy rozpoczynający własną aktywność zarobkową.
                                Polski porządek prawny oferuje duży wybór możliwości takich jak jednoosobowa działalność, spółki osobowe, popularna spółka zoo, czy przyjazna podatkowo spółka komandytowa. Z&nbsp;każdego z&nbsp;tych rozwiązań płyną różne korzyści jak również każde posiada swoje słabe strony.
                                Wyjaśniamy Klientom na czym polegają różnice pomiędzy nimi oraz doradzamy, która forma będzie dla nich najbardziej odpowiednia. Obsługujemy proces zakładania spółek i jednoosobowych działalności, sporządzamy projekty dokumentów (umów, statutów, porozumień) związanych z&nbsp;wykonywaną działalnością oraz reprezentujemy w&nbsp;postępowaniach rejestrowych. Dzięki naszej ofercie Klient nie musi martwić się o formalności, zyskując czas na realizację zadań branżowych.</p>

                            <div className={"row_brown text-center mb-4"}>
                                <a className="text-white font-weight-bold text-center pt-4 mb-4" data-toggle="collapse" href="#collapse7"
                                   role="button" aria-expanded="false" aria-controls="collapse7">
                                    Dowiedz się więcej
                                </a>
                            </div>
                        </Container>
                    </Col>
                    <Col className="collapse mb-4" id="collapse7">
                        <div className="mt-2 text-justify">
                            <div className="mt-2">
                                Nasza kancelaria oferuje kompleksową obsługę podmiotów prawa handlowego i innych podmiotów prowadzących działalność gospodarczą. W szczególności wykonujemy usługi polegające na:
                            </div>
                            <ul className="mt-2">
                                <li>doradztwie w wyborze formy prawnej działalności</li>
                                <li>przygotowywaniu umów i aktów założycielskich</li>
                                <li>przygotowywaniu projektów umów, uchwał i innych dokumentów przyjętych w obiegu wewnętrznym</li>
                                <li>przygotowywaniu protokołów z posiedzeń organów spółek</li>
                                <li>łączeniu, przekształceniu, likwidacji spółek</li>
                                <li>tworzenie oddziałów i przedstawicielstw przedsiębiorców</li>
                                <li>opracowywaniu analiz i opinii prawnych z zakresu zasad podejmowania i wykonywania działalności gospodarczej</li>
                                <li>analizie sytuacji prawnej spółek i podmiotów gospodarczych</li>
                                <li>bieżącej obsłudze spółek i podmiotów gospodarczych</li>
                                <li>zaskarżanie uchwał wspólników podjętych niezgodnie z postanowieniami umowy spółki lub przepisami ustawy</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row className="practica_8 pt-4 row_white">
                    <Col sm={9}>
                        <Container className="pl-sm-2">
                            <div className="zagolov text-dark">
                                Upadłość konsumencka
                            </div>
                            <div className="text-justify mt-2">
                                Instytucja upadłości konsumenckiej została wprowadzona do polskiego porządku prawnego w&nbsp;2009 roku, niemniej jednak największą popularność zyskała stosunkowo niedawno. Jest to instrument prawny skierowany dla osób fizycznych co do zasady nieprowadzących działalności gospodarczej,
                                ale należy pamiętać, że istnieje też możliwość ogłoszenia upadłości w&nbsp;stosunku do byłego przedsiębiorcy, czy członka zarządu upadłej spółki. Nadrzędnym celem postępowania upadłościowego prowadzonego w&nbsp;stosunku do osób fizycznych jest uzyskanie pełnego oddłużenia.
                                Szacuje się, że ponad 2 miliony Polaków boryka się z&nbsp;problemami w&nbsp;regulowaniu swoich zobowiązań. Wiedząc, że w&nbsp;życiu nie zawsze wszystko układa się tak jak byśmy tego oczekiwali, swoją ofertę kierujemy zatem do tych osób, które w&nbsp;wyniku zaistnienia przeróżnych okoliczności
                                faktycznych utraciły możliwość wywiązania się z&nbsp;zaciągniętych zobowiązań i&nbsp;popadły w&nbsp;tzw. spiralę zadłużenia</div>
                            <div className={"mb-4 row_white text-center font-weight-bold text-dark "}>
                                <a data-toggle="collapse" href="#collapse8"
                                   role="button" aria-expanded="false" aria-controls="collapse8">
                                    <div className={"text-center text-dark pt-4"}>Dowiedz się więcej</div>
                                </a>
                            </div>
                        </Container>
                    </Col>
                    <Col sm={3} className={"text-center align-items-center"}>
                        <picture>
                            <Image src={PR8} width="300px" className="img-fluid rounded align-content-center p-2"  alt="PRACTICA8"/>
                        </picture>
                    </Col>
                    <Col className="collapse mb-4" id="collapse8">

                        <div className="mt-4 text-justify tab_text">
                            <div className="mt-4">
                                W dzisiejszych czasach bardzo łatwo o pozyskanie dodatkowego kapitału na dowolny cel. Banki czy inne instytucje finansowe oferują swoje produkty każdemu, częstokroć
                                nie weryfikując nawet jego podstawowej zdolności kredytowej, czym zachęcają
                                do zaciągania coraz to nowych zobowiązań. Nasza wieloletnia praktyka pokazuje jak bardzo niebezpieczne jest to zjawisko. Powszechna dostępność kapitału zewnętrznego prowadzi
                                do wzrostu zapotrzebowania na dobra konsumpcyjne. Chcemy coraz więcej, zatracając jednocześnie rozeznanie w naszych możliwościach spłaty zaciągniętych zobowiązań. To bardzo prosta droga do niewypłacalności. Mamy jednak świadomość, że powodów niewypłacalności jest znacznie więcej. Może to być nagła utrata pracy, wypadek lub choroba. Wychodząc z założenia, że nie ma sytuacji bez wyjścia, pomagamy Klientom uzyskać pełne oddłużenie oraz umożliwiamy im rozpoczęcie życia niejako na nowo: bez długów, komorników, uporczywego nękania windykatorów. Znowelizowane prawo upadłościowe,
                                a w&nbsp;szczególności wprowadzona instytucja uproszczonej upadłości konsumenckiej pozwala osiągnąć ten cel w&nbsp;stosunkowo krótkim czasie wynoszącym mniej niż pół roku.
                                Istnieje również możliwość skorzystania z dobrodziejstwa instytucji oddłużenia przy jednoczesnym zachowaniu części majątku. Uważamy, że każdy zasługuje na drugą szansę, dlatego wspieramy Klienta w jego drodze do oddłużenia od samego początku postępowania: począwszy od wyboru trybu procedowania, poprzez złożenie wniosku o ogłoszenie upadłości, aż po reprezentację w postępowaniu w przedmiocie ogłoszenia upadłości, jak i właściwym postępowaniu upadłościowym.
                            </div>

                            <div className="mt-4 font-weight-bold">
                                W obszarze prawa rodzinnego, oferujemy głównie pomoc prawną w sprawach o:
                            </div>
                            <ul className="mt-4">
                                <li>sporządzamy wnioski o ogłoszenie upadłości</li>
                                <li>pomagamy w uzyskaniu dokumentacji niezbędnej do sporządzenia wniosku</li>
                                <li>czuwamy nad prawidłowością przebiegu postępowania</li>
                                <li>przygotowujemy w imieniu Klienta wnioski o: wyłączenie niektórych składników majątku z masy upadłości, wydzielenie sum uzyskanych ze sprzedaży nieruchomości na zaspokojenie potrzeb mieszkaniowych, przyspieszenie postępowania</li>
                                <li>pomagamy w opracowaniu wniosku w przedmiocie ustalenia planu spłat, bądź umorzenia zobowiązań bez ustalania planu spłat</li>
                                <li>reprezentujemy dłużnika w trakcie posiedzeń sądowych</li>
                            </ul>
                            <div className="mt-4 text-justify">
                                Nie zapominamy o Kliencie również w końcowym etapie procesu upadłościowego, którym jest ustalenie i późniejsze wykonywanie planu spłat, bądź umorzenie zobowiązań bez ustalania planu spłaty. Tylko fachowe i rzetelne przygotowanie do upadłości pozwala osiągnąć
                                jej nadrzędny cel, którym jest oddłużenie, dlatego też tak ważnym jest, aby nad całym procesem czuwali profesjonaliści.
                            </div>
                            <div className="mt-4 text-justify">
                                Nasza oferta w zakresie upadłości konsumenckiej skierowana jest również do syndyków. Mamy bowiem świadomość tego, że postępowania z pozoru prostsze, niż te które toczą się wobec osób prowadzących działalność gospodarczą, w istocie mogą okazać się równie skomplikowane. Reprezentujemy syndyków w procesach o uznanie czynności prawnych za bezskuteczne w stosunku do masy upadłości, w postępowaniach spadkowych, o zniesienie współwłasności, rozgraniczenie i we wszystkich innych, które mogą pojawić się w toku postępowania.
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="practica_9 pt-4 row_brown">
                    <Col className="text-center" sm={3}>
                        <picture>
                            <Image src={PR9} width="300px"  className="img-fluid rounded align-content-center p-2"  alt="PRACTICA9"/>
                        </picture>

                    </Col>
                    <Col sm={9}>
                        <Container className="pl-sm-2">
                            <div className="zagolov text-center font-weight-bold">Prawo restrukturyzacyjne i upadłościowe</div>
                            <p className={"mt-2 text-justify tab_text"}>W dzisiejszych realiach rynkowych bardzo często występują sytuacje, w których bieżące doradztwo prawne nie wystarcza, a nawet najlepiej prosperujący przedsiębiorca może stanąć na skraju bankructwa. Nierzetelni kontrahenci spóźniający się z zapłatą swoich zobowiązań mogą poważnie zaburzyć płynność finansową podmiotów, które liczą na terminowe regulowanie płatności i w konsekwencji postawić ich w sytuacji zagrożenia niewypłacalnością. Wówczas pomocnym narzędziem może okazać się restrukturyzacja przedsiębiorstwa. Wychodząc z założenia, że nie ma sytuacji bez wyjścia, ofertę kierujemy do przedsiębiorców, którzy z najróżniejszych powodów znaleźli się w trudnej sytuacji materialnej, w stanie zagrożenia niewypłacalnością lub nawet w stanie niewypłacalności.</p>

                            <div className={"row_brown text-center mb-4"}>
                                <a className="text-white font-weight-bold text-center pt-4 mb-4" data-toggle="collapse" href="#collapse9"
                                   role="button" aria-expanded="false" aria-controls="collapse9">
                                    Dowiedz się więcej
                                </a>
                            </div>
                        </Container>
                    </Col>
                    <Col className="collapse mb-4" id="collapse9">
                        <div className="mt-2 text-justify">
                            <div className="mt-2 font-weight-bold">
                                Restrukturyzacja czasem jedynym kołem ratunkowym.
                            </div>
                            <div className="mt-2">
                                Rodzaj działań podjętych w celu ochrony dłużnika przed niewypłacalnością zależy od skali problemów, w jakich znalazł się przedsiębiorca. Dzięki wprowadzeniu do porządku prawnego nowych przepisów restrukturyzacyjnych istnieje możliwość uniknięcia najgorszego scenariusza jakim dla przedsiębiorcy jest likwidacja. Postępowanie restrukturyzacyjne wymaga jednak bardzo dużej aktywności ze strony dłużnika. Dobór odpowiedniej formy postępowania (postępowanie o zatwierdzenie układu, przyspieszone postępowanie układowe, postępowanie układowe, postępowanie sanacyjne), a także prawidłowo sporządzone propozycje układowe są niezbędne, aby odnieść sukces w tego typu procesie. Bazując
                                na naszym wieloletnim doświadczeniu jesteśmy w stanie opracować propozycje układowe dostosowane do realnych możliwości przedsiębiorcy - gdyż tylko takie dają szansę
                                na zawarcie układu z wierzycielami. Należy jednak pamiętać, że zawarcie układu to jedynie połowa sukcesu. Postępowanie restrukturyzacyjne kończy się bowiem w momencie wykonania układu. Nasza oferta obejmuje bieżące doradztwo w trakcie wykonywania układu, jak również poprzedzające głosowanie nad układem negocjacje z wierzycielami,
                                a w szczególności z bankami, czy funduszami, mające na celu  maksymalizację poparcia
                                dla podejmowanych działań restrukturyzacyjnych.
                            </div>
                            <div className="mt-2">
                                W zakresie prawa restrukturyzacyjnego oferujemy następujące usługi:
                            </div>
                            <ul className="mt-2">
                                <li>sporządzenie wniosku o otwarcie postępowania restrukturyzacyjnego</li>
                                <li>przygotowanie w imieniu Klienta propozycji układowych oraz opiniowanie propozycji już istniejących</li>
                                <li>doradztwo w zakresie źródeł finansowania układów zawartych z wierzycielami</li>
                                <li>reprezentację przed sądem restrukturyzacyjnym i organami postępowania restrukturyzacyjnego</li>
                                <li>negocjacje z wierzycielami</li>
                            </ul>
                            <div className="mt-2 font-weight-bold">
                                Gdy na restrukturyzację jest za późno.
                            </div>
                            <div className="mt-2">
                                Często zdarza się jednak, że stan przedsiębiorstwa dłużnika jest na tyle trudny,
                                że na jakiekolwiek działania restrukturyzacyjne jest już po prostu za późno – nie istnieje bowiem realna szansa na zawarcie układu z wierzycielami i późniejsze wykonanie go.
                                W tej sytuacji optymalnym i bezpiecznym dla dłużnika działaniem jest złożenie wniosku
                                o ogłoszenie upadłości. Jest to wręcz obowiązek kadry zarządzającej przedsiębiorstwem
                                – pozwala to uchronić się członkom zarządu przed osobistą odpowiedzialnością
                                za zobowiązania upadłej spółki. Z chwilą ogłoszenia upadłości zarząd nad majątkiem zadłużonego przedsiębiorstwa przejmuje syndyk, którego zadaniem jest likwidacja wszystkich składników majątku dłużnika i późniejsza dystrybucja uzyskanych w ten sposób środków
                                na zaspokojenie wierzytelności uczestników postępowania.
                            </div>
                            <div className={"mt-2"}>
                                Nasza oferta obejmuje kompleksową obsługę całego postępowania upadłościowego, począwszy od analizy stanu przedsiębiorstwa pod kątem posiadania zdolności upadłościowej, opracowanie planu wprowadzenia przedsiębiorcy w stan upadłości, biorąc przy tym pod uwagę bezskuteczność niektórych czynności prawnych dokonywanych przez dłużnika w okresie poprzedzającym złożenie wniosku. Czuwamy nad prawidłowością przebiegu postępowania upadłościowego od początku do końca oraz reprezentujemy Klienta w kontaktach
                                z syndykiem, przed sądem upadłościowym i Sędzią - Komisarzem.</div>
                            <div className={"mt-2"}>
                                W zakresie obsługi dłużnika w postępowaniu upadłościowym:
                            </div>
                            <ul className="mt-4">
                                <li>dokonujemy analizy stanu przedsiębiorstwa pod kątem tzw. zdolności upadłościowej</li>
                                <li>składamy wnioski o ogłoszenie upadłości obejmującej likwidację majątku</li>
                                <li>analizujemy czynności dłużnika w kontekście ich ewentualnej bezskuteczności w stosunku do masy upadłości</li>
                                <li>reprezentujemy Klienta przed sądem upadłościowym oraz w kontaktach z syndykiem</li>
                                <li>dbamy o prawidłowość sporządzenia spisu inwentarza masy upadłości oraz o jej właściwą wycenę.</li>
                                <li>składamy sprzeciwy od list wierzytelności oraz skargi na czynności syndyka i Sędziego – Komisarza</li>
                                <li>pomagamy zawrzeć układ w toku postępowania upadłościowego</li>
                            </ul>
                            <div className="mt-2 font-weight-bold">
                                Wieloletnie doświadczenie w obsłudze prawnej syndyków i doradców restrukturyzacyjnych.
                            </div>
                            <div className={"mt-2"}>
                                Postępowanie upadłościowe to nie tylko dłużnik i Sędzia – Komisarz. Swoją ofertę  kierujemy również do pozostałych jego uczestników – syndyków i wierzycieli. Posiadamy wieloletnie doświadczenie w obsłudze prawnej postępowań upadłościowych jako przedstawiciele syndyka. Skutecznie reprezentujemy syndyków w postępowaniach o uznanie czynności prawnych dokonanych z pokrzywdzeniem wierzycieli za bezskuteczne, w postępowaniach
                                o zniesienie współwłasności, rozgraniczenie, uzgodnienie treści księgi wieczystej
                                z rzeczywistym stanem prawnym oraz podejmujemy w imieniu syndyków działania mające na celu ściągnięcie przysługujących upadłym wierzytelności.
                            </div>
                            <div className={"mt-2"}>
                                W powyższym zakresie:
                            </div>
                            <ul className="mt-2">
                                <li>reprezentujemy syndyka we wszelkich postępowaniach incydentalnych pojawiających się w toku postępowania upadłościowego</li>
                                <li>prowadzimy windykację należności przysługujących upadłemu</li>
                            </ul>
                            <div className={"mt-2"}>
                                W ramach świadczonych przez nas usług pomagamy również wierzycielom. Sporządzamy zgłoszenia wierzytelności i czuwamy nad prawidłowością postępowań upadłościowych, biorąc pod uwagę interesy wierzycieli. W przypadku ujawnienia jakichkolwiek nieprawidłowości
                                w toku postępowania skutecznie zaskarżamy czynności syndyka, czy Sędziego – Komisarza oraz składamy sprzeciwy od list wierzytelności.
                            </div>
                            <div className="mt-2">
                                W powyższym zakresie:
                            </div>
                            <ul className={"mt-4"}>
                                <li>zgłaszamy wierzytelności oraz sprzeciwy od list wierzytelności</li>
                                <li>wnioskujemy o wyłączenie z masy upadłości niektórych jej składników</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row className="practica_10 pt-4 row_white">
                    <Col sm={9}>
                        <Container className="pl-sm-2">
                            <div className="zagolov text-dark">
                                Prawo karne
                            </div>
                            <div className="text-justify mt-2">
                                Złamanie porządku prawnego nie oznacza, iż&nbsp;sprawcy nie przysługują żadne uprawnienia i&nbsp;musi on spełniać wszelkie żądania przedstawicieli organów ścigania.
                                Popadnięcie w&nbsp;konflikt z prawem może przytrafić się każdemu, gdyż granica nie zawsze jest wyraźna i oczywista. Wielokrotnie zaś zdarza się,
                                iż wcale nie doszło do przekroczenia norm prawnych, a&nbsp;zarzuty stawiane Klientom są następstwem nieprawidłowości dowodowych. Obrońca jest strażnikiem praw zatrzymanego, podejrzanego, oskarżonego, świadka – każdego przeciwko komu uruchomiono karno-procesową machinę. Jesteśmy z Klientem od początku i czuwamy, aby żadne działania przedstawicieli organów ścigania oraz wymiaru sprawiedliwości nie naruszały jego uprawnień. Nie oceniamy postępowania Klientów. Nawyk obrońcy instynktownie zmusza nas do poszukiwania zrozumienia dla czynu sprawcy. Wskazana postawa ma się przekładać na zawziętą walkę o sprawiedliwe dla Klienta rozstrzygnięcie.
                            </div>
                            <div className={"mb-4 row_white text-center font-weight-bold text-dark "}>
                                <a data-toggle="collapse" href="#collapse10"
                                   role="button" aria-expanded="false" aria-controls="collapse10">
                                    <div className={"text-center text-dark pt-4"}>Dowiedz się więcej</div>
                                </a>
                            </div>
                        </Container>
                    </Col>
                    <Col sm={3} className={"text-center align-items-center"}>
                        <picture>
                            <Image src={PR10} width="300px" className="img-fluid rounded align-content-center p-2"  alt="PRACTICA10"/>
                        </picture>
                    </Col>
                    <Col className="collapse mb-4" id="collapse10">

                        <div className="mt-4 text-justify tab_text">
                            <div className="mt-4">
                                Posiadamy wieloletnie doświadczenie jako obrońcy w sprawach karnych. Zajmujemy się zarówno drobnymi postępowaniami, jak i procesami w sprawach o znacznym ciężarze gatunkowym (zabójstwa). Występujemy także jako przedstawiciele osób pokrzywdzonych.
                            </div>

                            <div className="mt-4 font-weight-bold">
                                Oferujemy następujące usługi::
                            </div>
                            <ul className="mt-4">
                                <li>reprezentujemy Klientów na etapie postępowania przygotowawczego,
                                    śledztwa, dochodzenia, postępowania wyjaśniającego</li>
                                <li>reprezentujemy Klientów w postępowaniu sądowym jako obrońcy oraz pełnomocnicy pokrzywdzonych</li>
                                <li>reprezentujemy Klientów w postępowaniu wykonawczym w sprawach o:
                                    <div>- odroczenie wykonania kary</div>
                                    <div>- udzielenie przerwy w wykonaniu kary</div>
                                    <div>- warunkowe przedterminowe zwolnienie z odbycia reszty kary</div>
                                    <div>- dozór elektroniczny </div>
                                    <div>- rozłożenie grzywny na raty</div>
                                </li>
                            </ul>
                            <div className="mt-4 text-justify">
                                W sprawach karnych już od samego początku bardzo ważna jest obecność profesjonalisty,
                                który będzie stał na straży praw osób podejrzanych czy też pokrzywdzonych. Brak obecności fachowcy już przy pierwszych czynnościach procesowych może spowodować nieodwracalne negatywne  następstwa  dla podsądnych. Cieszymy się wysoką skutecznością w sprawach karnych i mamy doświadczenie w sprawach medialnych.                            </div>
                            </div>
                    </Col>
                </Row>
                <Row className="practica_11 pt-4 row_brown">
                    <Col className="text-center" sm={3}>
                        <picture>
                            <Image src={PR11} width="300px"  className="img-fluid rounded align-content-center p-2"  alt="PRACTICA11"/>
                        </picture>

                    </Col>
                    <Col sm={9}>
                        <Container className="pl-sm-2">
                            <div className="zagolov text-center font-weight-bold">Prawo cywilne</div>
                            <p className={"mt-2 text-justify tab_text"}>Każdy z nas na co dzień spotyka się ze sprawami wymagającymi wiedzy z zakresu prawa cywilnego.  Kupując towary warto wiedzieć, jakie uprawnienia przysługują konsumentowi;  zawierając umowę najmu – czego można domagać się od Wynajmującego albo kiedy można wypowiedzieć skutecznie umowę nieuczciwemu Najemcy; sporządzając testament – jak to zrobić, aby nie narazić spadkobierców na konflikty przy podziale spadku. Prawo cywilne obszernie reguluje zwykłe, bieżące sprawy. Każdy z nas, czy tego chce czy nie, codziennie staje się uczestnikiem stosunków cywilnych, zawiera i rozwiązuje umowy jak również nabywa prawa i obowiązki. Warto znać swoje prawa i wiedzieć jak można je regulować, zabezpieczając swoje najlepsze interesy.</p>

                            <div className={"row_brown text-center mb-4"}>
                                <a className="text-white font-weight-bold text-center pt-4 mb-4" data-toggle="collapse" href="#collapse11"
                                   role="button" aria-expanded="false" aria-controls="collapse11">
                                    Dowiedz się więcej
                                </a>
                            </div>
                        </Container>
                    </Col>
                    <Col className="collapse mb-4" id="collapse11">
                        <div className="mt-2 text-justify">
                            <div className="mt-2">
                                Nasi specjaliści mają wieloletnie doświadczenie w udzielaniu pomocy z zakresu prawa cywilnego. Oferujemy następujące usługi.
                            </div>
                            <ul className="mt-2">
                                <li>Przygotowywanie i opiniowanie projektów wszelkiego rodzaju umów, porozumień, listów intencyjnych, itp., a także negocjujemy w imieniu klienta warunki umowy, np:
                                    <div>-  umowy zlecenia,</div>
                                    <div>-  umowy sprzedaży,</div>
                                    <div>-  umowy o dzieło,</div>
                                    <div>-  umowy najmu, </div>
                                    <div>-  umowy darowizny,</div>
                                    <div>-  umowy przekazania nieruchomości,</div>
                                    <div>-  umowy dożywocia,</div>
                                    <div>-  umowy leasingu,</div>
                                    <div>-  umowy spółki cywilnej,</div>
                                    <div>-  umowy ubezpieczenia, w tym negocjacja w imieniu klientów warunków umów</div>
                                </li>
                                <li>
                                    Wspieramy klientów w transakcjach dotyczących obrotu nieruchomościami, w szczególności doradzamy na etapie negocjacji i zawarcia umowy zakupu/sprzedaży nieruchomości,
                                    a także reprezentujemy w sporach dotyczących zasiedzenia, służebności, zniesienia współwłasności, eksmisji, ochrony własności i posiadania. Reprezentujemy także wspólnoty mieszkaniowe i spółdzielnie mieszkaniowe jak również zastępujemy strony
                                    w postępowaniach wieczystoksięgowych.
                                </li>

                                <li>Doradzamy i reprezentujemy w sprawach spadkowych, w szczególności dotyczących stwierdzenia nabycia spadków, działu spadku, testamentów, zachowków, wydziedziczenia</li>
                            </ul>
                            <div className="mt-2">
                                Do każdego klienta podchodzimy indywidualnie, dbając o najwyższą jakość, precyzję i staranność w realizowaniu powierzonego nam zadania. Koncentrujemy swoją uwagę na przedstawieniu naszym Klientom najbardziej efektywnych rozwiązań w możliwie najkrótszym terminie.
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="practica_12 pt-4 row_white">
                    <Col sm={9}>
                        <Container className="pl-sm-2">
                            <div className="zagolov text-dark">
                                Odszkodowanie za odwołany lot
                            </div>
                            <div className="text-justify mt-2">
                                W wypadku odwołania, opóźnienia lotu lub odmowy przyjęcia na pokład pasażerowi może przysługiwać odszkodowanie.
                                Wysokość odszkodowania zależy od długości trasy i&nbsp;może być przyznana w wysokości 250 euro, 400 euro lub 600 euro.
                                W&nbsp;niektórych sytuacjach pasażerowie mają także prawo do zwrotu pieniędzy za bilet, co jednak wiąże się z&nbsp;utratą
                                prawa do odszkodowania.
                            </div>
                            <div className={"mb-4 row_white text-center font-weight-bold text-dark "}>
                                <a data-toggle="collapse" href="#collapse12"
                                   role="button" aria-expanded="false" aria-controls="collapse12">
                                    <div className={"text-center text-dark pt-4"}>Dowiedz się więcej</div>
                                </a>
                            </div>
                        </Container>
                    </Col>
                    <Col sm={3} className={"text-center align-items-center"}>
                        <picture>
                            <Image src={PR12} width="300px" className="img-fluid rounded align-content-center p-2"  alt="PRACTICA12"/>
                        </picture>
                    </Col>
                    <Col className="collapse mb-4" id="collapse12">

                        <div className="mt-4 text-justify tab_text">
                            <div className="mt-4">
                                Odsz­ko­do­wa­nia można docho­dzić albo przed sądem albo w dar­mo­wym postę­po­wa­niu przed Preze­sem Urzędu Lot­nic­twa Cywil­nego. Odsz­ko­do­wa­nie należy się także klien­tom biur podróży. Reprezentujemy Klientów zarówno przed sądem jak i w postępowaniu przed Prezesem Urzędu Lotnictwa Cywilnego.
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="pt-4 row_brown">
                    <Col sm={9}><hr/></Col>
                </Row>

            </Container>
            </Container>
        )
    }
}
export default translate(Practica)
