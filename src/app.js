import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


const content = document.getElementById('content');

ReactDOM.render(<App/>, content);
