import Titulo from '../../components/Titulo' // importando o Titulo.

// no <Titulo> utiliza-se a string Victor Affonso somente porque la no index titulo foi adicionado o props children.
const Sidebar = () => (
  <aside>
    <img src="https://github.com/victorLR.png" alt="" />
    <Titulo fontSize={20}>Victor</Titulo>
  </aside>
)

export default Sidebar
