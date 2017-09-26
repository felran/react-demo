import React from 'react';
import ReactDOM from 'react-dom';
import Root from './router/router';
import registerServiceWorker from './registerServiceWorker';
import 'antd/dist/antd.min.css';
import './scss/index.css';

ReactDOM.render(<Root/>, document.getElementById('root'));
registerServiceWorker();
