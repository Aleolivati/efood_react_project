import CardList from '../components/CardList'
import Header from '../components/Header'
import CardItems from '../modules/CardItems'
import hioki_sushi from '../assets/images/hioki_sushi.png'
import la_dolce_vita_trattoria from '../assets/images/la_dolce_vita_trattoria.png'

const restaurants: CardItems[] = [
  {
    id: 1,
    image: `${hioki_sushi}`,
    title: 'Hioki Sushi',
    description: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    stars: '4.9',
    tags: ['Destaque da semana', 'Japonesa']
  },
  {
    id: 2,
    image: `${la_dolce_vita_trattoria}`,
    title: 'La Dolce Vita Trattoria',
    description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    stars: '4.6',
    tags: ['Italiana']
  },
  {
    id: 3,
    image: `${hioki_sushi}`,
    title: 'Hioki Sushi',
    description: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    stars: '4.9',
    tags: ['Destaque da semana', 'Japonesa']
  },
  {
    id: 4,
    image: `${la_dolce_vita_trattoria}`,
    title: 'La Dolce Vita Trattoria',
    description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    stars: '4.6',
    tags: ['Italiana']
  },
  {
    id: 5,
    image: `${hioki_sushi}`,
    title: 'Hioki Sushi',
    description: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    stars: '4.9',
    tags: ['Destaque da semana', 'Japonesa']
  },
  {
    id: 6,
    image: `${la_dolce_vita_trattoria}`,
    title: 'La Dolce Vita Trattoria',
    description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    stars: '4.6',
    tags: ['Italiana']
  }
]

const Home = () => (
  <>
    <Header type="home" />
    <CardList type="home" cardItems={restaurants}/>
  </>
)

export default Home
