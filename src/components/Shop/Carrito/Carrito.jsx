import { useSelector } from "react-redux"
import CardCarrito from "./Card/CardCarrito"
import { CarritoStyle } from "./CarritoStyled"
import { ErrorStyle } from "../../Podructs/ProductsStyle"

const Carrito = () => {
    const Shop = useSelector((state)=>state.shop.cartItems)

    return (
        <CarritoStyle>
            <h2>Carrito</h2>
            {Shop.length?
                Shop.map((product)=><CardCarrito key={product.id}{...product}/>) :
                <ErrorStyle>No se agrego ningun producto!</ErrorStyle>
            }
        </CarritoStyle>
    )
}

export default Carrito
