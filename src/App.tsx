import BarraLateral from './container/BarraLateral'
import ListaDeTarefa from './container/ListaDeTarefas'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <BarraLateral />
        <ListaDeTarefa />
      </Container>
    </>
  )
}

export default App
