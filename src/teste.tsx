import styled from 'styled-components'

type BotaoProps = {
  principal: boolean
}

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};
`

function Teste() {
  return (
    <>
      <Botao principal>ClickHere</Botao>
      <Botao principal={false}>Cancel</Botao>
    </>
  )
}

export default Teste
