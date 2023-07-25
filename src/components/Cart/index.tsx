import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import { close, remove } from '../../store/reducers/cart'
import Button from '../Button'
import { formatToCurrency } from '../CardList'
import { CartContainer, CartItem, Overlay, Quantity, RemoveItem, Sidebar } from './styles'
import trash from '../../assets/images/trash.png'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const totalPrice = () => {
    return items.reduce((accumulator, totalValue) => {
      return (accumulator += totalValue.preco)
    }, 0)
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart}/>
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.cartId}>
              <img src={item.foto}/>
              <div>
                <h3>{item.nome}</h3>
                <p>{formatToCurrency(item.preco)}</p>
              </div>
              <RemoveItem style={{ backgroundImage: `url(${trash})` }} onClick={() => removeItem(item.cartId as number)}></RemoveItem>
            </CartItem>
          ))}
        </ul>
        <Quantity>
          <p>Valor total</p>
          <p>{formatToCurrency(totalPrice())}</p>
        </Quantity>
        <Button title="Clique aqui para continuar com a entrega" type="secondary">
          Continuar com a entrega
        </Button>
        <div className='close-cart-mobile'>
          <Button title="Clique aqui para continuar comprando" type="secondary" onClick={closeCart}>
            Voltar para restaurante
          </Button>
        </div>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
