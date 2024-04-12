import estilos from './Inicial.module.css'
import fontes from './../../public/fontes.module.css'
import { Cabecalho } from '../components/Cabecalho'
import { Conteudo } from '../components/Conteudo'
import { Lateral } from '../components/Lateral'
import { DataProvider } from '../components/DataContext'

function Inicial() {
  return (
    <DataProvider>
      <div className={estilos.gridContainer}>

        <Cabecalho />
        <Conteudo />
        <Lateral />

      </div>
    </DataProvider>
  )
}

export default Inicial
