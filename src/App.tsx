import { BrowserRouter } from 'react-router-dom'

import { store } from './store'
import RoutePages from './routes'
import Footer from './components/Footer'
import Cart from './components/Cart'
import { GlobalStyle } from './styles'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <RoutePages />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
