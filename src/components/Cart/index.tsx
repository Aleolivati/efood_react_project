import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'

import Button from '../Button'
import InputMask from 'react-input-mask'
import trash from '../../assets/images/trash.png'

import { RootReducer } from '../../store'
import { usePurchaseMutation } from '../../services/api'
import { close, remove, clear } from '../../store/reducers/cart'
import { parseToBrl } from '../../utils'
import * as Yup from 'yup'

import * as S from './styles'

type SetRouteProps = {
  route: 'delivery' | 'payment' | 'success' | ''
}

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()
  const [{ route }, setRouteCart] = useState<SetRouteProps>({ route: '' })
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
    setRouteCart({ route: '' })
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const totalPrice = () => {
    return items.reduce((accumulator, totalValue) => {
      return (accumulator += totalValue.preco)
    }, 0)
  }

  const form = useFormik({
    initialValues: {
      receiverName: '',
      receiverAddress: '',
      receiverCity: '',
      receiverZipCode: '',
      receiverAddressNumber: '',
      receiverAddressComplement: '',
      cardName: '',
      cardNumber: '',
      cardCode: '',
      cardExpiresMonth: '',
      cardExpiresYear: ''
    },
    validationSchema: Yup.object({
      receiverName: Yup.string()
        .min(5, 'O nome precisa ter no mínimo 5 caracteres')
        .required('Este campo é obrigatório'),
      receiverAddress: Yup.string()
        .min(5, 'O endereço precisa ter no mínimo 5 caracteres')
        .required('Este campo é obrigatório'),
      receiverCity: Yup.string()
        .min(5, 'A cidade precisa ter no mínimo 5 caracteres')
        .required('Este campo é obrigatório'),
      receiverZipCode: Yup.string()
        .min(9, 'O CEP precisa ter 9 caracteres')
        .max(9, 'O CEP precisa ter 9 caracteres')
        .required('Este campo é obrigatório'),
      receiverAddressNumber: Yup.string().required('Este campo é obrigatório'),
      receiverAddressComplement: Yup.string(),
      cardName: Yup.string().required('Este campo é obrigatório'),
      cardNumber: Yup.string()
        .min(19, 'Número incompleto')
        .max(19, 'Número incompleto')
        .required('Este campo é obrigatório'),
      cardCode: Yup.string().min(3, 'Campo incompleto').max(3, 'Campo incompleto').required('Este campo é obrigatório'),
      cardExpiresMonth: Yup.string()
        .min(2, 'Campo incompleto')
        .max(2, 'Campo incompleto')
        .required('Este campo é obrigatório'),
      cardExpiresYear: Yup.string()
        .min(4, 'Número incompleto')
        .max(4, 'Número incompleto')
        .required('Este campo é obrigatório')
    }),
    onSubmit: (values) => {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      purchase({
        products: items.map((item) => ({
          id: item.id,
          price: item.preco
        })),
        delivery: {
          receiver: values.receiverName,
          address: {
            description: values.receiverAddress,
            city: values.receiverCity,
            zipCode: values.receiverZipCode,
            number: Number(values.receiverAddressNumber),
            complement: values.receiverAddressComplement
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.cardExpiresMonth),
              year: Number(values.cardExpiresYear)
            }
          }
        }
      })
    }
  })

  const validateDelivery = () => {
    const hasError =
      'receiverName' in form.errors ||
      'receiverAddress' in form.errors ||
      'receiverCity' in form.errors ||
      'receiverZipCode' in form.errors ||
      'receiverAddressNumber' in form.errors
    const isEmpty =
      form.values.receiverName === '' ||
      form.values.receiverAddress === '' ||
      form.values.receiverCity === '' ||
      form.values.receiverZipCode === '' ||
      form.values.receiverAddressNumber === ''
    const isInvalid = hasError || isEmpty

    return isInvalid
  }
  const validatePayment = () => {
    const hasError =
      'cardName' in form.errors ||
      'cardNumber' in form.errors ||
      'cardCode' in form.errors ||
      'cardExpiresMonth' in form.errors ||
      'cardExpiresYear' in form.errors
    const isEmpty =
      form.values.cardName === '' ||
      form.values.cardNumber === '' ||
      form.values.cardCode === '' ||
      form.values.cardExpiresMonth === '' ||
      form.values.cardExpiresYear === ''
    const isInvalid = hasError || isEmpty

    return isInvalid
  }

  const resetInputs = () => {
    form.values.receiverName = ''
    form.values.receiverAddress = ''
    form.values.receiverCity = ''
    form.values.receiverZipCode = ''
    form.values.receiverAddressNumber = ''
    form.values.receiverAddressComplement = ''
    form.values.cardName = ''
    form.values.cardNumber = ''
    form.values.cardCode = ''
    form.values.cardExpiresMonth = ''
    form.values.cardExpiresYear = ''
  }

  const goToRoute = ({ route }: SetRouteProps) => {
    switch (route) {
      case 'delivery':
        setRouteCart({ route: 'delivery' })
        break
      case 'payment':
        if (!validateDelivery()) {
          setRouteCart({ route: 'payment' })
        }
        document.getElementById('receiverName')?.focus()
        document.getElementById('receiverAddress')?.focus()
        document.getElementById('receiverCity')?.focus()
        document.getElementById('receiverZipCode')?.focus()
        document.getElementById('receiverAddressNumber')?.focus()
        document.getElementById('receiverName')?.focus()
        break
      case 'success':
        if (!validatePayment()) {
          form.handleSubmit()
          resetInputs()
        }
        document.getElementById('cardName')?.focus()
        document.getElementById('cardNumber')?.focus()
        document.getElementById('cardCode')?.focus()
        document.getElementById('cardExpiresMonth')?.focus()
        document.getElementById('cardExpiresYear')?.focus()
        document.getElementById('cardName')?.focus()
        break
      default:
        setRouteCart({ route: '' })
    }
  }

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isError = fieldName in form.errors
    const hasError = isTouched && isError

    return hasError
  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
      setRouteCart({ route: 'success' })
    }
  }, [isSuccess, dispatch, setRouteCart])

  if (items.length === 0 && route === '') {
    return (
      <S.CartContainer className={isOpen ? 'is-open' : ''}>
        <S.Overlay onClick={closeCart} />
        <S.Sidebar>
          <div className="empty-cart">
            <p>
              Nenhum item encontrado! <br />
              Favor adicionar pelo meno um item ao carrinho para continuar a compra
            </p>
            <Button title="Clique aqui para voltar para a compra" variant="secondary" type="button" onClick={closeCart}>
              Voltar
            </Button>
          </div>
        </S.Sidebar>
      </S.CartContainer>
    )
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        {isSuccess && items.length === 0 && data ? (
          <div>
            <h2>Pedido realizado - {data.orderId}</h2>
            <div className="success-text">
              <p>
                Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue
                no endereço fornecido.
              </p>
              <p>Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras.</p>{' '}
              <p>
                Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua
                segurança e bem-estar durante a refeição.
              </p>{' '}
              <p>Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!</p>
            </div>
            <Button title="Clique aqui para concluir a compra" variant="secondary" type="button" onClick={closeCart}>
              Concluir
            </Button>
          </div>
        ) : (
          <>
            {(route === 'success' && items.length > 0) ||
              (route === '' && (
                <>
                  <ul>
                    {items.map((item) => (
                      <S.CartItem key={item.cartId}>
                        <img src={item.foto} />
                        <div>
                          <h3>{item.nome}</h3>
                          <p>{parseToBrl(item.preco)}</p>
                        </div>
                        <S.RemoveItem
                          style={{ backgroundImage: `url(${trash})` }}
                          onClick={() => removeItem(item.cartId as number)}
                        ></S.RemoveItem>
                      </S.CartItem>
                    ))}
                  </ul>
                  <S.Quantity>
                    <p>Valor total</p>
                    <p>{parseToBrl(totalPrice())}</p>
                  </S.Quantity>
                  <Button
                    title="Clique aqui para continuar com a entrega"
                    variant="secondary"
                    type="button"
                    onClick={() => goToRoute({ route: 'delivery' })}
                  >
                    Continuar com a entrega
                  </Button>
                  <div className="close-cart-mobile">
                    <Button
                      title="Clique aqui para continuar comprando"
                      variant="secondary"
                      type="button"
                      onClick={closeCart}
                    >
                      Voltar para restaurante
                    </Button>
                  </div>
                </>
              ))}
            {route !== '' && route !== 'success' && (
              <>
                <S.FormContainer onSubmit={form.handleSubmit}>
                  <div className={route === 'delivery' ? 'is-visible' : 'is-invisible'}>
                    <h2>Entrega</h2>
                    <S.InputGroup>
                      <label htmlFor="receiverName">Quem irá receber</label>
                      <input
                        className={checkInputHasError('receiverName') ? 'is-error' : ''}
                        onBlur={form.handleBlur}
                        onChange={form.handleChange}
                        value={form.values.receiverName}
                        id="receiverName"
                        name="receiverName"
                        type="text"
                      />
                    </S.InputGroup>
                    <S.InputGroup>
                      <label htmlFor="receiverAddress">Endereço</label>
                      <input
                        className={checkInputHasError('receiverAddress') ? 'is-error' : ''}
                        onBlur={form.handleBlur}
                        onChange={form.handleChange}
                        value={form.values.receiverAddress}
                        id="receiverAddress"
                        name="receiverAddress"
                        type="text"
                      />
                    </S.InputGroup>
                    <S.InputGroup>
                      <label htmlFor="receiverCity">Cidade</label>
                      <input
                        className={checkInputHasError('receiverCity') ? 'is-error' : ''}
                        onBlur={form.handleBlur}
                        onChange={form.handleChange}
                        value={form.values.receiverCity}
                        id="receiverCity"
                        name="receiverCity"
                        type="text"
                      />
                    </S.InputGroup>
                    <div className="row">
                      <S.InputGroup>
                        <label htmlFor="receiverZipCode">CEP</label>
                        <InputMask
                          className={checkInputHasError('receiverZipCode') ? 'is-error' : ''}
                          onBlur={form.handleBlur}
                          onChange={form.handleChange}
                          value={form.values.receiverZipCode}
                          id="receiverZipCode"
                          name="receiverZipCode"
                          type="text"
                          mask="99999-999"
                        />
                      </S.InputGroup>
                      <S.InputGroup>
                        <label htmlFor="receiverAddressNumber">Número</label>
                        <input
                          className={checkInputHasError('receiverAddressNumber') ? 'is-error' : ''}
                          onBlur={form.handleBlur}
                          onChange={form.handleChange}
                          value={form.values.receiverAddressNumber}
                          id="receiverAddressNumber"
                          name="receiverAddressNumber"
                          type="text"
                        />
                      </S.InputGroup>
                    </div>
                    <S.InputGroup>
                      <label htmlFor="receiverAddressComplement">Complemento (opcional)</label>
                      <input
                        className={checkInputHasError('receiverAddressComplement') ? 'is-error' : ''}
                        onBlur={form.handleBlur}
                        onChange={form.handleChange}
                        value={form.values.receiverAddressComplement}
                        id="receiverAddressComplement"
                        name="receiverAddressComplement"
                        type="text"
                      />
                    </S.InputGroup>
                  </div>
                  <div className={route === 'payment' ? 'is-visible' : 'is-invisible'}>
                    <h2>Pagamento - Valor a pagar {parseToBrl(totalPrice())}</h2>
                    <S.InputGroup>
                      <label htmlFor="cardName">Nome no cartão</label>
                      <input
                        className={checkInputHasError('cardName') ? 'is-error' : ''}
                        onBlur={form.handleBlur}
                        onChange={form.handleChange}
                        value={form.values.cardName}
                        id="cardName"
                        name="cardName"
                        type="text"
                      />
                    </S.InputGroup>
                    <div className="row">
                      <S.InputGroup inputWidth="228px">
                        <label htmlFor="cardNumber">Número do cartão</label>
                        <InputMask
                          className={checkInputHasError('cardNumber') ? 'is-error' : ''}
                          onBlur={form.handleBlur}
                          onChange={form.handleChange}
                          value={form.values.cardNumber}
                          id="cardNumber"
                          name="cardNumber"
                          type="text"
                          mask="9999 9999 9999 9999"
                        />
                      </S.InputGroup>
                      <S.InputGroup>
                        <label htmlFor="cardCode">CVV</label>
                        <InputMask
                          className={checkInputHasError('cardCode') ? 'is-error' : ''}
                          onBlur={form.handleBlur}
                          onChange={form.handleChange}
                          value={form.values.cardCode}
                          id="cardCode"
                          name="cardCode"
                          type="text"
                          mask="999"
                        />
                      </S.InputGroup>
                    </div>
                    <div className="row">
                      <S.InputGroup>
                        <label htmlFor="cardExpiresMonth">Mês de vencimento</label>
                        <InputMask
                          className={checkInputHasError('cardExpiresMonth') ? 'is-error' : ''}
                          onBlur={form.handleBlur}
                          onChange={form.handleChange}
                          value={form.values.cardExpiresMonth}
                          id="cardExpiresMonth"
                          name="cardExpiresMonth"
                          type="text"
                          mask="99"
                        />
                      </S.InputGroup>
                      <S.InputGroup>
                        <label htmlFor="cardExpiresYear">Ano de vencimento</label>
                        <InputMask
                          className={checkInputHasError('cardExpiresYear') ? 'is-error' : ''}
                          onBlur={form.handleBlur}
                          onChange={form.handleChange}
                          value={form.values.cardExpiresYear}
                          id="cardExpiresYear"
                          name="cardExpiresYear"
                          type="text"
                          mask="9999"
                        />
                      </S.InputGroup>
                    </div>
                  </div>
                  <S.ButtonsContainer>
                    <Button
                      title={
                        route === 'delivery'
                          ? 'Clique aqui para continuar com pagamento'
                          : 'Clique aqui para finalizar a compra'
                      }
                      variant="secondary"
                      onClick={() => goToRoute({ route: route === 'delivery' ? 'payment' : 'success' })}
                      type="button"
                    >
                      {route === 'delivery'
                        ? 'Continuar com o pagamento'
                        : isLoading
                        ? 'Finalizando o pagamento...'
                        : 'Finalizar pagamento'}
                    </Button>
                    <Button
                      title={
                        route === 'delivery'
                          ? 'Clique aqui para voltar para o carrinho'
                          : 'Clique aqui para voltar para os dados de entrega'
                      }
                      variant="secondary"
                      type="button"
                      onClick={() => goToRoute({ route: route === 'delivery' ? '' : 'delivery' })}
                    >
                      {route === 'delivery' ? 'Voltar para o carrinho' : 'Voltar para a edição de endereço'}
                    </Button>
                  </S.ButtonsContainer>
                </S.FormContainer>
              </>
            )}
          </>
        )}
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
