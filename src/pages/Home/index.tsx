import { Link } from 'react-router-dom'
import { Coffee } from '../../components/Coffee'
import { useCartContext } from '../../contexts/CartContext'
import { Products } from '../../Mock'

export function Home() {
  const { cart } = useCartContext()
  console.log({ cart })
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
      <Link to="/checkout">Carrinho</Link>
    </div>
  )
}
