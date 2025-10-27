import { Route, Routes } from 'react-router-dom'
import './App.css'
import Container from 'react-bootstrap/Container'
import AppNavbar from './components/NavBar'
import ProductList from './components/ProductList'
import Cart from './components/Cart'

function App() {

  return (
    <Container className="py-4">
      <AppNavbar/>
      <Routes>
        <Route path='/products' element={<ProductList/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </Container>
  )
}

export default App
