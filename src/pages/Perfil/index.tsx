import { useEffect, useState } from 'react'
import CardList from '../../components/CardList'
import Header from '../../components/Header'
import { Restaurants } from '../Home'
import { useParams } from 'react-router-dom'

// const laDolceVitaTrattoria: CardItems[] = [
//   {
//     id: 1,
//     image: `${x}`,
//     title: 'Pizza Marguerita',
//     description:
//       'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
//     price: 'R$ 60,00'
//   },
//   {
//     id: 2,
//     image: `${pizza}`,
//     title: 'Pizza Marguerita',
//     description:
//       'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
//     price: 'R$ 60,00'
//   },
//   {
//     id: 3,
//     image: `${pizza}`,
//     title: 'Pizza Marguerita',
//     description:
//       'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
//       price: 'R$ 60,00'
//   },
//   {
//     id: 4,
//     image: `${pizza}`,
//     title: 'Pizza Marguerita',
//     description:
//       'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
//       price: 'R$ 60,00'
//   },
//   {
//     id: 5,
//     image: `${pizza}`,
//     title: 'Pizza Marguerita',
//     description:
//       'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
//       price: 'R$ 60,00'
//   },
//   {
//     id: 6,
//     image: `${pizza}`,
//     title: 'Pizza Marguerita',
//     description:
//       'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
//       price: 'R$ 69,00'
//   }
// ]

const Perfil = () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
  const { id } = useParams()

  const [cardapio, setCardapio] = useState<Restaurants>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res: Restaurants) => setCardapio(res))
      .catch(Error)
  }, [id])

  return (
    <>
      <Header type="perfil" restaurant={cardapio} />
      <CardList type="perfil" cardMenu={cardapio} />
    </>
  )
}

export default Perfil
