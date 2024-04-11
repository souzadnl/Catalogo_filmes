import estilos from './Conteudo.module.css'
import Banner from './Banner'
import Card from './Card'
import Movies from '../assets/Movies'
import Modal from './Modal'

export function Conteudo() {

    return (
        <main className={estilos.container}>

            <div>
                <Banner img="https://images5.alphacoders.com/125/1257951.jpeg"></Banner>
            </div>

            <div className={estilos.texto}>
                <h1>100 Melhores Filmes</h1>
            </div>

            <div className={estilos.cards}>

                {Movies.map((data) => (                  
                    <Card rank={data.rank} img={data.img} key={data.id} title={data.title} description={data.description} conteudo={data}/>
                ))}

            </div>

        </main>
    )
}