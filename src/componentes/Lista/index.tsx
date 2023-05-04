import React, { useState } from 'react';
import style from "./Lista.module.scss"
import Item from "./Item";

function Lista(){

    const [tarefas, setTarefas] = useState ([{
        tarefa: "React",
        tempo: "02:00:00"
      }, {
        tarefa: "JavaScript",
        tempo: "01:00:00"
      },{
        tarefa: "TypeScript",
        tempo: "01:30:00"
      }]);


    return(
        <aside className={style.listaTarefas}>
            <h2 onClick={()=>{
                setTarefas([...tarefas, {tarefa: "Estudar estado", tempo: "02:30:00"}])
            }}>Estudos do dia</h2>
            <ul>
                {tarefas.map((item, index)=>{
                   return( 
                    <Item key={index} tarefa = {item.tarefa} tempo = {item.tempo} /> 
                   )
                }) }
            </ul>


        </aside>
    )
}

export default Lista