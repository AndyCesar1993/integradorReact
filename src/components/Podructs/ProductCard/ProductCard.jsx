import { Button } from '@mui/material'
import { ProductCardDescriptionStyle, ProductCardInfoStyle, ProductCardStyle } from './ProductCardStyled'
import { Close } from '@mui/icons-material'
import { useState } from 'react'
import { formatPrice } from '../../Utils/UtilsConst'
import { useDispatch, useSelector } from 'react-redux'
import { addToShop } from '../../Redux/shopSlice'

const ProductCard = ({ img, name, price, brand, wheels, frame, size, brake, vel, color, des, id }) => {
    const [more, setMore] = useState(false);
    const allProducts = useSelector((state) => state.products.products)
    const Shop = useSelector((state) => state.shop.cartItems)
    const dispatch = useDispatch();

    const setMoreCard = (e) => {
        e.preventDefault();
        more === false ? setMore(true) : setMore(false);
    }

        const productToAdd = allProducts.find((product) => product.id === id);
        const existProductShop = Shop.length? Shop.find((product)=>product.id===productToAdd.id):false;


    const addProductToShop = () => {
        if(!existProductShop){
            dispatch(addToShop(productToAdd))
        }
    }

    return (
        <ProductCardStyle>
            <ProductCardInfoStyle>
                <img src={img} alt={name} />
                <h2>{name}</h2>
                <Button variant="outlined" color="inherit" onClick={setMoreCard}>Más</Button>
                <h2>$ {formatPrice(price)}</h2>
                <Button variant="contained" color="inherit" onClick={addProductToShop}>Agregar al carrito</Button>
            </ProductCardInfoStyle>
            {more ?
                <ProductCardDescriptionStyle>
                    <Button onClick={setMoreCard}
                        variant="outlined"
                        color="inherit"
                        className='ButtonClose'
                    >
                        <Close></Close>
                    </Button>
                    <h3>Marca:<span>{brand}</span></h3>
                    <h3>Rodado:<span>{wheels}</span></h3>
                    <h3>Cuadro:<span>{frame}</span></h3>
                    <h3>Talle:<span>{size}</span></h3>
                    <h3>Frenos:<span>{brake}</span></h3>
                    <h3>Velocidades:<span>{vel}</span></h3>
                    <h3>Color:<span>{color}</span></h3>
                    <h3>Descripcion:</h3>
                    <p>{des}</p>
                </ProductCardDescriptionStyle>
                : <></>
            }
        </ProductCardStyle>
    )
}

export default ProductCard
