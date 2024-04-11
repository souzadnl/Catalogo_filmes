import estilos from './Card.module.css'
import Modal from './Modal'

function Card(props) {

    return (
        <div>
            <Modal rank={data.rank} img={data.img} key={data.id} title={data.title} description={data.description} />,

            <div className={estilos.card}>
                <div style={estilos.img}>
                    <img src={props.img}></img>
                </div>

                <div className={estilos.texto}>
                    <h1 style={estilos.h1}>{props.title}</h1>
                    <div className={estilos.description}>
                        <span style={estilos.span}>{props.rank}°</span>
                    </div>
                    <div className={estilos.description}>
                        <span style={estilos.span}>{props.description}</span>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Card