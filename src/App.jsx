import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import NavBar from './components/NavBar/NavBar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { NotificationProvider } from './context/NotificationContext';

function App() {


  return (
    <BrowserRouter>
    <NotificationProvider>
    <CartProvider>
    <NavBar />
    <Routes>
      <Route path='/' element={<ItemListContainer greetings={"Lista de Productos"} />} />
      <Route path='/category/:category' element={<ItemListContainer />} />
      <Route path='/detail/:id' element={<ItemDetailContainer />} />

      <Route exact path="/cart" element={<Cart />} />

      <Route exact path="/checkout" element={<Checkout />} />
      
      <Route path="*" element={<h1>:( 404 Not found</h1>} />
    </Routes>
    </CartProvider>
    </NotificationProvider>
    </BrowserRouter>
  )
}

export default App
