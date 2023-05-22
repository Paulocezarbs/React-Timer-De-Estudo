import style from "./Botao.module.scss"


interface Props{
    nomeBotao: string,
    type?: "button" | "submit" | "reset" | undefined,
    onClick?:() => void;
}

function Botao({nomeBotao, type, onClick}: Props) {
    const tipo = type?? "button"
    return(
        <button type={tipo} onClick={onClick} className={style.botao}> {nomeBotao} </button>
    )
}

export default Botao


















