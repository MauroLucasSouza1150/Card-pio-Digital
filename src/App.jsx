import './App.css'
import { useState } from 'react'
import { ItemCardapio } from './ItemCardapio'
import { Navegacao } from './Navegacao'
import {pratosPrincipais, sobremesas, bebidas} from './cardapio'
import Hashtaurante from './assets/hashtaurante.webp'

function App() {
  const paginasMenu = [pratosPrincipais, sobremesas, bebidas];
  const [paginaSelecionada, setPaginaSelecionada] = useState(0)

  return (
    <>
      <h1>Restaurante ComeMais</h1>
      <img src={Hashtaurante} alt="Imagem Restaurante" className='capa'/>
      <h2>Cardápio de Hoje</h2>
      <Navegacao setPaginaSelecionada={setPaginaSelecionada} />
      <div className='menu'>
          {paginasMenu[paginaSelecionada].map((item) => (
            <ItemCardapio nome={item.nome} preco={item.preco} descricao={item.descricao} imagem={item.imagem}/>
          ))}
      </div>
    </>
  )
}

export default App
