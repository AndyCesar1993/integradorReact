import Carrito from "./Carrito/Carrito"
import { ShopStyle } from "./ShopStyled"
import AlertDialogSlide from "./InputShop/CompletePayment/CompletePayment"
import Animations from "../Utils/loading"
import { useState } from "react"

const Shop = () => {
    const [loading, setLoading] = useState(false)

    return (
        <ShopStyle>
            {loading ?
                <Animations/> :
                <>
                    <Carrito/>
                    <AlertDialogSlide setLoading={setLoading}/>
                </>
            }
        </ShopStyle>
    )
}

export default Shop
