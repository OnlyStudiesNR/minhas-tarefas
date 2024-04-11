import styled from 'styled-components'

import { Props } from '.'

type PropsSemLegendaEContador = Omit<Props, 'contador' | 'legenda'>

export const Card = styled.div<PropsSemLegendaEContador>`
  padding: 8px;
  border: 1px solid ${(props) => (props.ativo ? '#1E90FF' : '#A1A1A1')};
  background-color: ${(props) => (props.ativo ? '#FFF' : '#FCFCFC')};
  color: ${(props) => (props.ativo ? '#1E90FF' : '#5e5e5e')};
  border-radius: 8px;
`
export const Contador = styled.span`
  display: block;
  font-weight: bold;
  font-size: 24px;
`
export const Label = styled.span`
  font-size: 14px;
`
