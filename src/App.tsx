import { Coffee } from './components/Coffee'
import { useCartContext } from './contexts/CartContext'
import { Products } from './Mock'

export type CartProps = {
  id: string
  name: string
  descricao: string
  quantity: number
  price: number
  total: number
}

export function App() {
  const { cart } = useCartContext()
  console.log(cart)
  return (
    <div>
      {Products.map((item) => (
        <Coffee
          key={item.id}
          id={item.id}
          name={item.name}
          descricao={item.descricao}
          price={item.price}
          tags={item.tags}
          image={item.image}
        />
      ))}
    </div>
  )
}
