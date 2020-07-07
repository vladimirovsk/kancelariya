import React, {Component} from 'react';
import './App.css';
import {setDefaultLanguage, setLanguageCookie, setTranslations, translate} from "react-switch-lang";
import en from '../../i18/en.json';
import pl from '../../i18/pl.json';
import * as PropTypes from "prop-types";
import Headers from "../Header/Header";
import Home from "../Page/Home/Home";
import About from "../Page/About/About";
import Uslugi from "../Page/Uslugi/Uslugi";
import Practica from "../Page/Practica/Practica";
import Team from "../Page/Team/Team";
import Kontact from "../Page/Kontact/Kontact";
import Pravila from "../Page/Pravila/Pravila";
import '../../assets/styles/global.css';
import Slayder from "../Page/Slayder/Slayder";

setTranslations({en, pl });
setDefaultLanguage('pl');
setLanguageCookie();
//<h1 class="text-hide" style="background-image: url('/docs/4.0/assets/brand/bootstrap-solid.svg'); width: 50px; height: 50px;">Bootstrap</h1>
class App extends Component {
  render() {
      //const {t} = this.props;
      return (
        <div className="App">
            <Headers />
            <Home id="home" />
            <Slayder id="slider"/>
            <About id="about" />
            <Uslugi id="services" />
            <Practica id="practica" />
            <Team id="team" />
            <Pravila id="pravila" />
            <Kontact id="kontact" />
        </div>
    );
  }
}

App.propTypes = {
  t: PropTypes.func.isRequired,
};

export default translate(App);
