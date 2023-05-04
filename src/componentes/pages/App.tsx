import React from 'react';
import Formulario from '../Forumulario/formulario';
import Lista from '../Lista';
import style from "./App.module.scss"
import Cronometro from '../Cronometro';

function App() {
  return (
    <div className={style.AppStyle}>
        <Formulario/>
        <Lista/>
        <Cronometro/>
    </div>
  );
}

export default App;
