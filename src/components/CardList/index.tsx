import { useState } from 'react'
import Card from '../Card'
import { CardsGrid, Container } from './styles'
import { Restaurants } from '../../pages/Home'

export type Props = {
  type: 'home' | 'perfil' | 'modal'
  cardItems?: Restaurants[]
  cardMenu?: Restaurants
}

type ModalState = {
  isVisible: boolean
  url: string
  price: number
  title: string
  description: string
  portion: string
}

const CardList = ({ type, cardItems, cardMenu }: Props) => {
  const [modal, setModal] = useState<ModalState>({isVisible: false, url: '', price: 0, title: '', description: '', portion: ''})

  const closeModal = () => {
    setModal({isVisible: false, url:'', price: 0, title: '', description: '', portion: ''})
  }

  const transformToCurrency = (price: number) => {
    return new Intl.NumberFormat('pr-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price)
  }

  if (type === 'perfil') {
    return (
      <Container>
        <div className="container">
          <CardsGrid type={type}>
            {cardMenu?.cardapio.map((item) => (
              <div key={item.id}>
                <Card type={type} image={item.foto} title={item.nome} description={item.descricao} onClick={() => setModal({isVisible: true, url: `${item.foto}`, price: item.preco, title: `${item.nome}`, description: `${item.descricao}`, portion: `${item.porcao}`})}/>
                <div className={modal.isVisible ? 'visible' : 'invisible'}>
                  <Card
                    type="modal"
                    description={modal.description}
                    portion={`Serve: ${modal.portion}`}
                    image={modal.url}
                    title={modal.title}
                    price={transformToCurrency(modal.price)}
                    onClick={() => closeModal()}
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
