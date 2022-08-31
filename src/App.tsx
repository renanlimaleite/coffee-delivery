import { Coffee } from './components/Coffee'
import { Products } from './Mock'

export function App() {
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
