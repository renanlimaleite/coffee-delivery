import { BrowserRouter } from 'react-router-dom'
import { CartContextProvider } from './contexts/CartContext'
import { Router } from './Router'

export function App() {
  return (
    <CartContextProvider>
      <header>
        <h1>Coffee Delivery</h1>
      </header>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </CartContextProvider>
  )
}
