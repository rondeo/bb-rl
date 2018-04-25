import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import 'jquery';
import 'bootstrap';
import 'fullpage.js';

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();