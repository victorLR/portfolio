import Titulo from '../../components/Titulo' // importando o Titulo.
import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import { BotaoTema, Descricao, SidebarContainer } from './styles'

// no <Titulo> utiliza-se a string Victor Affonso somente porque la no index titulo foi adicionado o props children.
const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Victor</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        victorLR
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Desenvolvedor Full Stack Java
      </Descricao>
      <BotaoTema>Trocar Tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
