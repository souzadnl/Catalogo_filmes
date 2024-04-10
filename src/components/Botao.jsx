function Botao(props){
    return(
        <a href={props.link}> 
        <button>{props.icone} <h1>{props.texto}</h1> </button>
        </a>
    )
}

export default Botao