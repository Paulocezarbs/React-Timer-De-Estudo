import style from "./Botao.module.scss"




function Botao({nomeBotao}: {nomeBotao:string}) {
        return(
            <button className={style.botao}> {nomeBotao} </button>
        )
}

export default Botao