import {useState} from 'react'
import Formulario from '../Forumulario/formulario';
import Lista from '../Lista';
import style from "./App.module.scss"
import Cronometro from '../Cronometro';
import { ITarefa } from '../../types/tarefa';

function App() {

  const [tarefas, setTarefas] = useState<ITarefa[] | []>  ([]);
  const [selecionado, setSelecionado] = useState<ITarefa>()

  function selecionaTarefa (tarefaSelecionada: ITarefa){
    setSelecionado(tarefaSelecionada)
  }

  return (
    <div className={style.AppStyle}>
        <Formulario setTarefas={setTarefas}/>
        <Lista 
        tarefas={tarefas} 
        selecionaTarefa={selecionaTarefa} />
        <Cronometro/>
    </div>
  );
}

export default App;
