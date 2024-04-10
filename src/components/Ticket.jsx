import estilos from './Ticket.module.css'

export function Ticket(props){
    return(
        <div className={estilos.ticket}>
            <h1>{props.descricao}</h1>
            <h2>{props.nome}</h2>
            <h3>{props.estado}</h3>
        </div>
    )
}