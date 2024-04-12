import estilos from './Card.module.css'
import Modal from './Modal'
import { useData } from './DataContext'

function Card(props) {

    const { handleHover } = useData();

    const handleMouseEnter = () => {
        handleHover({ rank: props.rank, img: props.img, title: props.title, description: props.description });
    }

    return (
        <div>
            <div className={estilos.card} onClick={handleMouseEnter}>
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