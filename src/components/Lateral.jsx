import estilos from './Lateral.module.css'
import { Ticket } from './Ticket'
import { useData } from './DataContext'

export function Lateral() {
    const { hoveredData } = useData();

    return (
        <aside className={estilos.container}>
            {hoveredData && (
                <div className={estilos.hoveredInfo}>
                    <img src={hoveredData.img} alt={hoveredData.title} />

                    <div>
                        <h2>{hoveredData.title}</h2>

                        <span>Description</span>
                        <p>{hoveredData.description}</p>
                        <p><span>Rank: </span>{hoveredData.rank}</p>
                    </div>

                </div>
            )}
        </aside>
    )
}