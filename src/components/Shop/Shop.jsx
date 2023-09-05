import Carrito from "./Carrito/Carrito"
import { ShopStyle } from "./ShopStyled"
import AlertDialogSlide from "./InputShop/CompletePayment/CompletePayment"

const Shop = () => {

    return (
        <ShopStyle>
            <Carrito />
            <AlertDialogSlide/>
        </ShopStyle>
    )
}

export default Shop
