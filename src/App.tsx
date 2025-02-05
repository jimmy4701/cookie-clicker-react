import { useState } from "react"

const shop_items = [
  {name: "Grand mère", value: 100, cps: 1},
  {name: "Ferme à cookie", value: 1000, cps: 10},
  {name: "Usine à cookie", value: 10000, cps: 100},
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
          return <p>{item.name}</p>
        })}
      </div>
    </div>
  )
}

export default App
