import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import App from './components/App/App';
import {BrowserRouter} from 'react-router-dom'
import '../src/assets/styles/global.css';
import * as serviceWorker from './serviceWorker';


const app =(
    <BrowserRouter>
        <App />
    </BrowserRouter>

)

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
