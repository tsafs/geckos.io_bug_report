import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import geckos from '@geckos.io/client';

const channel = geckos({ port: 3001 });
channel.onConnect((error) => {
  console.log('onConnect', error);
});
console.log('here');

ReactDOM.render(<React.StrictMode></React.StrictMode>, document.getElementById('root'));
