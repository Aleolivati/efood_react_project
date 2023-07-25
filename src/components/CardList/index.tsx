import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { Cardapio, add, open } from '../../store/reducers/cart'
import Card from '../Card'
import { CardsGrid, Container } from './styles'
import { Restaurants } from '../../pages/Home'

export type Props = {
  type: 'home' | 'perfil' | 'modal'
  cardItems?: Restaurants[]
  cardMenu?: Cardapio[]
}

type ModalState = {
  isVisible: boolean
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export const formatToCurrency = (preco: number) => {
  return new Intl.NumberFormat('pr-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const CardList = ({ type, cardItems, cardMenu }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    foto: '',
    preco: 0,
    id: 0,
    nome: '',
    descricao: '',
    porcao: ''
  })

  const closeModal = () => {
    setModal({ isVisible: false, foto: '', preco: 0, nome: '', descricao: '', porcao: '', id: 0 })
  }

  const dispatch = useDispatch()

  const addItem = () => {
    dispatch(add(modal))
    dispatch(open())
    closeModal()
  }

  if (type === 'perfil') {
    return (
      <Container>
        <div className="container">
          <CardsGrid type={type}>
            {cardMenu?.map((item) => (
              <div key={item.id}>
                <Card
                  type={type}
                  image={item.foto}
                  title={item.nome}
                  description={item.descricao}
                  onClick={() =>
                    setModal({
                      isVisible: true,
                      foto: `${item.foto}`,
                      preco: item.preco,
                      id: item.id,
                      nome: `${item.nome}`,
                      descricao: `${item.descricao}`,
                      porcao: `${item.porcao}`
                    })
                  }
                />
                <div className={modal.isVisible ? 'visible' : 'invisible'}>
                  <Card
                    type="modal"
                    description={modal.descricao}
                    portion={`Serve: ${modal.porcao}`}
                    image={modal.foto}
                    title={modal.nome}
                    price={formatToCurrency(modal.preco)}
                    onClick={() => closeModal()}
                    buttonOnClick={addItem}
                  />
                </div>
              </div>
            ))}
          </CardsGrid>
        </div>
      </Container>
    )
  }

  return (
    <Container>
      <div className="container">
        <CardsGrid type={type}>
          {cardItems?.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              type={type}
              image={item.capa}
              title={item.titulo}
              description={item.descricao}
              tag={item.tipo}
              stars={item.avaliacao}
            />
          ))}
        </CardsGrid>
      </div>
    </Container>
  )
}

export default CardList
