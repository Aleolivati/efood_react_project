import { BrowserRouter } from 'react-router-dom'

import RoutePages from './routes'
import Footer from './components/Footer'
import { GlobalStyle } from './styles'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <RoutePages />
      <Footer />
    </BrowserRouter>
  )
}

export default App
