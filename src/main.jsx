import React from 'react';
import ReactDOM from 'react-dom/client';

// import CardsGallery from './components/CardsGallery/CardsGallery.jsx';
// import Counter from './components/Counter/Counter.jsx';
import Message from './components/Message/Message.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <CardsGallery /> */}
    {/* <Counter /> */}
    <Message />
  </React.StrictMode>
);
