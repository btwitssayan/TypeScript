import './App.css'
import { ChaiCard } from './components/ChaiCard'
import  Counter  from './components/Counter'
import ChaiList from './components/ChaiList'
import OrderForm from './components/OrderForm'
import Card from './components/Card'
import type { Chai } from "./types";

const menu:Chai[] = [
  {
    id: 1,
    name: "Masala Chai",
    price: 234,
  },
  {
    id: 2,
    name: "Green Chai",
    price: 2.00,
  },
  {
    id: 3,
    name: "Ginger Chai",
    price: 4.50,
  },
  {
    id: 4,
    name: "Lemon Chai",
    price: 3.75,
  },
]
function App() {

  return (
    <>
      <ChaiCard name="Masala Chai" price={234} isSpecial={true} />
      <ChaiCard name="Green Chai" price={2.00} />
      <div>
        <Counter />
      </div>
      <ChaiList items={menu} />
      <OrderForm onSubmit={(order) => {
        console.log({...order})
      }} />
      <div>
        <Card title='Chai aur typescript'
        footer={<p>Footer content</p>}>
          <p>This is a card about chai and typescript.</p>
        </Card>
      </div>
    </>
  )
}

export default App
