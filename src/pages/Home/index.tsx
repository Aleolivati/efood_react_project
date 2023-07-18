import { useEffect, useState } from 'react'
import CardList from '../../components/CardList'
import Header from '../../components/Header'

export type Restaurants = {
  id: number
  titulo: string
  destacado: string
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
  cardapio: [{
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }]
}

const Home = () => {
  const [restaurants, setRestaurants] = useState<Restaurants[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res: Restaurants[]) => setRestaurants(res))
      .catch(Error)
  }, [])

  return (
    <>
      <Header type="home" />
      <CardList type="home" cardItems={restaurants} />
    </>
  )
}

export default Home
