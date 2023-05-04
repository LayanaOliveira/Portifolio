import './App.css';
import React from 'react';
import LikeButton from './Botao';
import VerMaisEsconder from './Vermais';
import VerMaisEsconder2 from './Vermais2';
import ReactDOM from 'react-dom';
import EmailForm from './Email';

function App() {
  return (
    <div className="App">

        <div className='background'>
          <nav>
              <React.StrictMode>
              <EmailForm/>
             </React.StrictMode>,
          </nav>
        </div>

        <div className='tela2'></div>

        <div className='tela3'>
          <VerMaisEsconder/>
          <VerMaisEsconder2/>
        </div>

        <div className='tela4'>
            <p><br/>Nossas Redes sociais: <br/> <a href='#'>@Layana.queiiroz</a> <br/>
            <a href='#'>@Emanuela.raay</a></p>
            <p className='pergunta'>Eaí! Curtiu?</p>
            <LikeButton/>
         </div>
         
    </div>
  );
}

export default App;
