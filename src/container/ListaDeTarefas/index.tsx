import Tarefa from '../../components/Tarefa'
import { Container } from './styles'

import * as enums from '../../utils/enums/Tarefa'

const tarefas = [
  {
    title: 'Estudar inglês',
    descricao: 'Terminar o modulo 30 da EBAC',
    prioridade: enums.Prioridade.NORMAL,
    status: enums.Status.CONCLUIDA
  },
  {
    title: 'Mudar de casa',
    descricao: 'Procurar casa para alugar',
    prioridade: enums.Prioridade.URGENTE,
    status: enums.Status.CONCLUIDA
  },
  {
    title: 'Pegar outro projeto freela',
    descricao: 'Enviar propostas',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.PENDENTE
  },
  {
    title: 'Lêr',
    descricao: 'Lêr 10 páginas de um livro',
    prioridade: enums.Prioridade.URGENTE,
    status: enums.Status.CONCLUIDA
  }
]

const ListaDeTarefa = () => (
  <Container>
    <p>2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;</p>
    <ul>
      {tarefas.map((t) => (
        <li key={t.title}>
          <Tarefa
            title={t.title}
            descricao={t.descricao}
            status={t.status}
            prioridade={t.prioridade}
          />
        </li>
      ))}
    </ul>
  </Container>
)

export default ListaDeTarefa
