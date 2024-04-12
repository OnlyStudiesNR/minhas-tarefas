import { Provider } from 'react-redux'
import BarraLateral from './container/BarraLateral'
import ListaDeTarefa from './container/ListaDeTarefas'
import EstiloGlobal, { Container } from './styles'

import store from './store'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <BarraLateral />
        <ListaDeTarefa />
      </Container>
    </Provider>
  )
}

export default App
