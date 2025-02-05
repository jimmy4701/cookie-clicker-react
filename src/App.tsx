import { useState } from "react"
import ShopItem from "./components/ShopItem"

export type ShopItemType = {
  name: string,
  price: number,
  cps: number
}

const shop_items = [
  {name: "Grand mère", price: 100, cps: 1},
  {name: "Ferme à cookie", price: 1000, cps: 10},
  {name: "Usine à cookie", price: 10000, cps: 100},
]

const App = () => {

  const [cookies, setCookies] = useState(0)


  return (
    <div className="w-screen h-screen flex">
      <div className="flex-1 flex flex-col justify-center items-center">
        <p>Total cookies : {cookies}</p>
        <img 
          onClick={() => { setCookies(cookies + 1)}} 
          className="h-40" 
          src="https://cdn-icons-png.flaticon.com/512/216/216341.png" 
          alt="cookie" />
      </div>
      <div className="flex-1 bg-red-100">items</div>
      <div className="flex-1 bg-blue-100">
        {shop_items.map(item => {
          return <ShopItem item={item} />
        })}
      </div>
    </div>
  )
}

export default App
