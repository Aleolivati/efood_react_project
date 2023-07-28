import CardList from '../../components/CardList'
import Header from '../../components/Header'
import { useGetRestaurantsQuery } from '../../services/api'

const Home = () => {
  const { data: restaurants, isLoading } = useGetRestaurantsQuery()
  // const [restaurants, setRestaurants] = useState<Restaurants[]>([])

  // useEffect(() => {
  //   fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
  //     .then((res) => res.json())
  //     .then((res: Restaurants[]) => setRestaurants(res))
  //     .catch(Error)
  // }, [])

  return (
    <>
      <Header type="home" />
      <CardList isLoading={isLoading} type="home" cardItems={restaurants} />
    </>
  )
}

export default Home
