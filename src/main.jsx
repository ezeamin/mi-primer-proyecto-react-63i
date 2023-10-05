import React from 'react';
import ReactDOM from 'react-dom/client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'sonner';

// import CardsGallery from './components/CardsGallery/CardsGallery.jsx';
// import Counter from './components/Counter/Counter.jsx';
// import Message from './components/Message/Message.jsx';
// import Form from './components/Form/Form.jsx';
// import Formv2 from './components/Form/Formv2.jsx';
// import Formv3 from './components/Form/Formv3.jsx';
// import Contactos from './components/Contactos/Contactos.jsx';
// import HookForm from './components/Form/HookForm.jsx';
// import NormalFetch from './components/NormalFetch/NormalFetch.jsx';
import TQueryFetch from './components/TQueryFetch/TQueryFetch.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import './index.css';

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* <CardsGallery /> */}
      {/* <Counter /> */}
      {/* <Message /> */}
      {/* <Form /> */}
      {/* <Formv2 /> */}
      {/* <Formv3 /> */}
      {/* <Contactos /> */}
      {/* <HookForm /> */}
      {/* <NormalFetch /> */}
      <TQueryFetch />
      <Toaster richColors position="top-right"/>
    </QueryClientProvider>
  </React.StrictMode>
);
