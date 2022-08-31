import Expresso from './assets/coffees/expresso.png'
import ExpressoAmericano from './assets/coffees/expresso-americano.png'
import ExpressoCremoso from './assets/coffees/expresso-cremoso.png'

export const Products = [
  {
    id: '1',
    name: 'Expresso Tradicional',
    descricao: 'O tradicional café feito com água quente e grãos moídos',
    tags: 'Tradicional',
    image: Expresso,
    price: 9.9,
  },
  {
    id: '2',
    name: 'Expresso Americano',
    descricao: 'Expresso diluído, menos intenso que o tradicional',
    tags: 'Tradicional, Cremoso',
    image: ExpressoAmericano,
    price: 9.9,
  },
  {
    id: '3',
    name: 'Expresso Cremoso',
    descricao: 'Café expresso tradicional com espuma cremosa',
    tags: 'Tradicional, Gelado',
    image: ExpressoCremoso,
    price: 9.9,
  },
]
