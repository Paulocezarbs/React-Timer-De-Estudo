import React from 'react';
import Formulario from '../Forumulario/formulario';
import Lista from '../Lista';
import style from "./App.module.scss"

function App() {
  return (
    <div className={style.AppStyle}>
        <Formulario/>
        <Lista/>
    </div>
  );
}

export default App;
