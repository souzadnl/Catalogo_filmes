import estilos from './Card.module.css'

function Modal(props) {
    return (
        <div className={estilos.modal}>
            <div className={estilos.modal_conteudo}>
                <h1>{props.title}</h1>
                <div>
                    <span>{props.rank}</span>
                </div>
                <div>
                    <span>Uva</span>
                </div>
            </div>
        </div>
    )
}

export default Modal