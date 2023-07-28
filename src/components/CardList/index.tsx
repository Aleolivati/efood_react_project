import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Card from '../Card'
import cartFull from '../../assets/images/cart-full.png'

import { RootReducer } from '../../store'
import { add, open, clear } from '../../store/reducers/cart'
import { parseToBrl } from '../../utils'

import * as S from './styles'
import Loader from '../Loader'
import Button from '../Button'

export type Props = {
  type: 'home' | 'perfil' | 'modal'
  cardItems?: Restaurants[]
  cardMenu?: Cardapio[]
  isLoading: boolean
  restaurantId?: number
}

type ModalState = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
  restaurantId: number
}

const CardList = ({ type, cardItems, cardMenu, isLoading, restaurantId }: Props) => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [warningCart, setWarningCart] = useState(false)
  const [modalIsVisible, setMobalIsVisible] = useState(false)
  const [modal, setModal] = useState<ModalState>({
    foto: '',
    preco: 0,
    id: 0,
    nome: '',
    descricao: '',
    porcao: '',
    restaurantId: 0
  })

  const closeModal = () => {
    setModal({ foto: '', preco: 0, nome: '', descricao: '', porcao: '', id: 0, restaurantId: 0 })
    setMobalIsVisible(false)
  }

  const dispatch = useDispatch()

  const addItem = () => {
    const anotherRestaurant = items.find((item) => item.restaurantId !== modal.restaurantId)
    if (anotherRestaurant) {
      setWarningCart(true)
      setMobalIsVisible(false)
    } else {
      dispatch(add(modal))
      dispatch(open())
      closeModal()
    }
  }

  const closeWarning = () => {
    setWarningCart(false)
    closeModal()
  }

  const warningYes = () => {
    dispatch(clear())
    dispatch(add(modal))
    dispatch(open())
    closeModal()
    setWarningCart(false)
  }


  if (isLoading) {
    return <Loader />
  }

  if (type === 'perfil') {
    return (
      <>
        <S.Container>
          <div className={warningCart ? 'is-visible' : 'is-invisible'}>
            <S.ModalContainer>
              <div className="overlay">
                <Card
                  type="modal"
                  description="Deseja limpar o seu carrinho?"
                  title="Você já tem itens adicionados no seu carrinho!"
                  image={cartFull}
                  onClick={() => closeWarning()}
                >
                  <div className='buttonContainer'>
                    <Button title="Sim" variant="secondary" onClick={() => warningYes()}>
                      Sim
                    </Button>
                    <Button title="Não" variant="secondary" onClick={() => closeWarning()}>
                      Não
                    </Button>
                  </div>
                </Card>
              </div>
            </S.ModalContainer>
          </div>
        </S.Container>
        <S.Container>
          <div className="container">
            <S.CardsGrid type={type}>
              {cardMenu &&
                cardMenu.map((item) => (
                  <div key={item.id}>
                    <Card
                      type={type}
                      image={item.foto}
                      title={item.nome}
                      description={item.descricao}
                      onClick={() => {
                        setModal({
                          foto: `${item.foto}`,
                          preco: item.preco,
                          id: item.id,
                          nome: `${item.nome}`,
                          descricao: `${item.descricao}`,
                          porcao: `${item.porcao}`,
                          restaurantId: restaurantId as number
                        }),
                          setMobalIsVisible(true)
                      }}
                    />
                    <div className={modalIsVisible ? 'is-visible' : 'is-invisible'}>
                      <Card
                        type="modal"
                        description={modal.descricao}
                        portion={`Serve: ${modal.porcao}`}
                        image={modal.foto}
                        title={modal.nome}
                        onClick={() => closeModal()}
                      >
                        <Button
                          variant="secondary"
                          title="Clique aqui pra saber mais sobre o restaurante"
                          onClick={addItem}
                        >
                          {`Adicionar ao carrinho - ${parseToBrl(modal.preco)}`}
                        </Button>
                      </Card>
                    </div>
                  </div>
                ))}
            </S.CardsGrid>
          </div>
        </S.Container>
      </>
    )
  }

  return (
    <S.Container>
      <div className="container">
        <S.CardsGrid type={type}>
          {cardItems &&
            cardItems.map((item) => (
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
        </S.CardsGrid>
      </div>
    </S.Container>
  )
}

export default CardList
