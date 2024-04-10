import estilos from './Card.module.css'

function Card(props) {
    return (
        <div className={estilos.card}>
            <div style={estilos.img}>
                <img src={props.img}></img>
            </div>

            <div className={estilos.texto}>
                <h1 style={estilos.h1}>{props.title}</h1>
                <h2 style={estilos.h2}>{props.rank}</h2>
                <div className={estilos.description}>
                    <span style={estilos.span}>{props.description}</span>
                </div> 
            </div>
        </div>
    )
}

export default Card