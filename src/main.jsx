import React from 'react';
import ReactDOM from 'react-dom/client';

// import CardsGallery from './components/CardsGallery/CardsGallery.jsx';
// import Counter from './components/Counter/Counter.jsx';
// import Message from './components/Message/Message.jsx';
// import Form from './components/Form/Form.jsx';
// import Formv2 from './components/Form/Formv2.jsx';
// import Formv3 from './components/Form/Formv3.jsx';
import Contactos from './components/Contactos/Contactos.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <CardsGallery /> */}
    {/* <Counter /> */}
    {/* <Message /> */}
    {/* <Form /> */}
    {/* <Formv2 /> */}
    {/* <Formv3 /> */}
    <Contactos />
  </React.StrictMode>
);
