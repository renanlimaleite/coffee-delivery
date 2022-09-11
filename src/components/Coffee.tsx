import { useState } from 'react'
import { useCartContext } from '../contexts/CartContext'

interface CoffeeProps {
  name: string
  descricao: string
  image: string
  tags: string
  price: number
  id: string
}

export function Coffee({
  name,
  id,
  descricao,
  image,
  tags,
  price,
}: CoffeeProps) {
  const [count, setCount] = useState(0)
  const { addToCart } = useCartContext()

  function handleAddToCart() {
    // Trocar para toast
    if (count <= 0) {
      alert('Você deve adicionar ao menos 1 item')
      return
    }
    addToCart({
      id,
      name,
      descricao,
      price,
      quantity: count,
      total: count * price,
    })
  }

  return (
    <div>
      <img src={image} alt={descricao} />
      <p>{name}</p>
      <button
        onClick={() => setCount((state) => (state > 0 ? state - 1 : state))}
      >
        -
      </button>
      {count}
      <button type="button" onClick={() => setCount((state) => state + 1)}>
        +
      </button>

      {/* DISPARA FUNÇÃO AQUI */}
      <button onClick={handleAddToCart} type="button">
        Adicionar
      </button>
    </div>
  )
}
