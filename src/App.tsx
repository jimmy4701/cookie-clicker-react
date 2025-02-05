import { useState } from "react"
import ShopItem from "./components/ShopItem"

export type ShopItemType = {
  name: string,
  price: number,
  cps: number
}

const shop_items = [
  {name: "Grand mère", price: 100, cps: 1, image_url: "https://orteil.dashnet.org/cookieclicker/img/grandma.png"},
  {name: "Ferme à cookie", price: 1000, cps: 10, image_url: "https://orteil.dashnet.org/cookieclicker/img/farm.png"},
  {name: "Usine à cookie", price: 10000, cps: 100, image_url: "https://orteil.dashnet.org/cookieclicker/img/factory.png"},
  {name: "Banque cookie", price: 80000, cps: 800, image_url: "https://orteil.dashnet.org/cookieclicker/img/bank.png"},
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
      <div className="flex-1 flex flex-col p-2 gap-3">
        {shop_items.map(item => {
          return <ShopItem item={item} />
        })}
      </div>
    </div>
  )
}

export default App
