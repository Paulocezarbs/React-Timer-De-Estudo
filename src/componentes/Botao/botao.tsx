import style from "./Botao.module.scss"




function Botao({nomeBotao, type}: {nomeBotao:string, type?: "button" | "submit" | "reset" | undefined}) {
    const tipo = type?? "button"
    return(
        <button type={tipo} className={style.botao}> {nomeBotao} </button>
    )
}

export default Botao


















