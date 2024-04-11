import estilos from './Modal.module.css'

function Modal(props) {
    return (
        <div className={estilos.modal}>
            <div>
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