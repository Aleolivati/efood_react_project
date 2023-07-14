import CardList from '../components/CardList'
import Header from '../components/Header'
import restaurantHero from '../assets/images/hero_restaurant.png'
import CardItems from '../modules/CardItems'
import pizza from '../assets/images/pizza.png'

const laDolceVitaTrattoria: CardItems[] =[
  {
    id: 1,
    image: `${pizza}`,
    title: 'Pizza Marguerita',
    description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 2,
    image: `${pizza}`,
    title: 'Pizza Marguerita',
    description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 3,
    image: `${pizza}`,
    title: 'Pizza Marguerita',
    description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 4,
    image: `${pizza}`,
    title: 'Pizza Marguerita',
    description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 5,
    image: `${pizza}`,
    title: 'Pizza Marguerita',
    description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 6,
    image: `${pizza}`,
    title: 'Pizza Marguerita',
    description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
]

const Perfil = () => (
  <>
    <Header type="perfil" restaurantImg={restaurantHero} />
    <CardList type="perfil" cardItems={laDolceVitaTrattoria}/>
  </>
)

export default Perfil
