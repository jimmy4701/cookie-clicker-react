


const ShopItem = ({item}:any) => {

    return (
        <div className="bg-white p-5 border rounded cursor-pointer hover:bg-gray-200 flex gap-3 hover:scale-130 transition-all duration-1000">
            <img src={item.image_url} />
            <div className="flex-1">
                <div className="flex justify-between">
                    <span className="font-bold">{item.name}</span>
                    <span>Prix : {item.price}</span>
                </div>
                <p className="text-sm">Cookies par seconde : {item.cps}</p>
            </div>
        </div>
    )
}

export default ShopItem