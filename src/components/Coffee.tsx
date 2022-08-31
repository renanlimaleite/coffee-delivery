import { useState } from 'react'

interface CoffeeProps {
  name: string
  descricao: string
  image: string
  tags: string
  price: number
  id: string
}

type CartProps = {
  id: string
  name: string
  quantity: number
  price: number
  total: number
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
  const [cart, setCart] = useState<CartProps[]>([])
  console.log(cart)

  function addToCart() {
    const newProduct = {
      id,
      name,
      price,
      quantity: count,
      total: price * count,
    }

    console.log({ newProduct })

    setCart((prevState) => {
      if (prevState.length > 0) {
        return prevState.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity + count,
              total: item.total + price * count,
            }
          } else {
            return item
          }
        })
      }
      return [...prevState, newProduct]
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
      <button onClick={addToCart} type="button">
        Adicionar
      </button>
    </div>
  )
}
