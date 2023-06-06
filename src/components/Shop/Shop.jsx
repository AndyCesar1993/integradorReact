import { useSelector } from "react-redux"
import Carrito from "./Carrito/Carrito"
import InputShop from "./InputShop/InputShop"
import { ShopStyle } from "./ShopStyled"
import AlertDialogSlide from "./InputShop/CompletePayment/CompletePayment"

const Shop = () => {

    return (
        <ShopStyle>
            <Carrito/>
            <AlertDialogSlide/>
        </ShopStyle>
    )
}

export default Shop
