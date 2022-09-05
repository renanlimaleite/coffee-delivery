import { createContext, ReactNode, useContext, useState } from 'react'

type CartProps = {
  id: string
  name: string
  descricao: string
  quantity: number
  price: number
  total: number
}

type Address = {
  cep: string
  rua: string
  bairro: string
  numero: string
  complemento?: string | number
  cidade: string
  state: string
}

type CartTextTypes = {
  cart: CartProps[]
  address?: Address
  addToCart: ({
    id,
    name,
    descricao,
    quantity,
    total,
    price,
  }: CartProps) => void
}

export const CartContext = createContext<CartTextTypes | null>(null)

type CartContextProviderProps = {
  children: ReactNode | ReactNode[]
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<CartProps[]>([])

  function addToCart({
    id,
    name,
    descricao,
    total,
    price,
    quantity,
  }: CartProps) {
    setCart((prevState) => {
      const productExists = prevState.find((prd) => prd.id === id)

      if (productExists) {
        return prevState.map((prd) => ({
          ...prd,
          total: prd.total + prd.quantity * prd.price,
          quantity: prd.quantity + quantity,
        }))
      } else {
        return [...prevState, { id, name, descricao, total, price, quantity }]
      }
    })
  }

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCartContext() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('Você precisa usar o CartContextProvider')
  }
  return context
}
