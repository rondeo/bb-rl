import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker, {unregister} from './registerServiceWorker';

/* eslint-disable import/first */
import $ from 'jquery';
import 'bootstrap';
import 'fullpage.js/dist/jquery.fullpage.min.css';
import 'animate.css/animate.css';
import iscroll from 'iscroll';
window.jQuery = $;
window.IScroll = iscroll;
require('fullpage.js/vendors/scrolloverflow');
require('fullpage.js');

ReactDOM.render(<App/>, document.getElementById('root'));
//registerServiceWorker();
unregister();