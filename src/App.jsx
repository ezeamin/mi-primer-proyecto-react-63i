import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  // logica

  return (
    //jsx
    <>
      <a href='https://vitejs.dev' target='_blank' rel="noreferrer">
        <img src={viteLogo} className='logo' alt='Vite logo' />
      </a>
      <p>Hola este es un mensaje lol xd</p>
      <a href='https://react.dev' target='_blank' rel="noreferrer">
        <img src={reactLogo} className='logo react' alt='React logo' />
      </a>
    </>
  );
}

export default App;
