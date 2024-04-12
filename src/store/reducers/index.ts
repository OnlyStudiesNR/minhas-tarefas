import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefa'

const tarefaSlice = createSlice({
  name: 'tarefas',
  initialState: [
    new Tarefa(
      'Estudar inglês',
      enums.Prioridade.NORMAL,
      enums.Status.CONCLUIDA,
      'Terminar o modulo 30 da EBAC',
      1
    ),
    new Tarefa(
      'Mudar de casa',
      enums.Prioridade.URGENTE,
      enums.Status.CONCLUIDA,
      'Procurar casa para alugar',
      2
    ),
    new Tarefa(
      'Pegar outro projeto freela',
      enums.Prioridade.IMPORTANTE,
      enums.Status.PENDENTE,
      'Enviar propostas',
      3
    ),
    new Tarefa(
      'Lêr',
      enums.Prioridade.URGENTE,
      enums.Status.CONCLUIDA,
      'Lêr 10 páginas de um livro',
      4
    )
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { remover } = tarefaSlice.actions

export default tarefaSlice.reducer
