import './App.css'
import AppNavbar from './components/NavBar'
import ProductList from './components/ProductList'
import Container from 'react-bootstrap/Container'

function App() {

  return (
    <Container className="py-4">
      <AppNavbar/>
      <ProductList/>
    </Container>
  )
}

export default App
