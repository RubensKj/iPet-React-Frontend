import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import WebFont from 'webfontloader';

ReactDOM.render(<App />, document.getElementById('root'));

WebFont.load({
  google: {
    families: ['Titillium Web:300,400,600', 'sans-serif', 'Poppins:300,400,600']
  }
});