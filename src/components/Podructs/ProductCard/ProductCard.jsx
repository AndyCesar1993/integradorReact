import { Button } from '@mui/material'
import { ProductCardDescriptionStyle, ProductCardInfoStyle, ProductCardStyle, ViewImgStyle } from './ProductCardStyled'
import { Close } from '@mui/icons-material'
import { useState } from 'react'
import { formatPrice } from '../../Utils/UtilsConst'
import { useDispatch, useSelector } from 'react-redux'
import { addToShop } from '../../Redux/shopSlice'
import { setLink, setMessage, setOpen } from '../../Redux/succesfulMessageSlice'
import { Link } from 'react-router-dom'

const ProductCard = ({ img, name, price, brand, wheels, frame, size, brake, vel, color, des, id }) => {
    const [more, setMore] = useState(false);
    const [viewImg, setViewImg] = useState(false)
    const allProducts = useSelector((state) => state.products.products)
    const Shop = useSelector((state) => state.shop.cartItems)
    const dispatch = useDispatch();

    const setMoreCard = (e) => {
        e.preventDefault();
        more === false ? setMore(true) : setMore(false);
    }

    const productToAdd = allProducts.find((product) => product.id === id);
    const existProductShop = Shop.length ? Shop.find((product) => product.id === productToAdd.id) : false;


    const addProductToShop = () => {
        if (!existProductShop) {
            dispatch(addToShop({
                id: productToAdd.id,
                price: productToAdd.price,
                quantity: 1,
                tittle: productToAdd.name,
                img: productToAdd.img
            }))
            dispatch(setMessage(`Producto agregado al carrito   `))
            dispatch(setLink('shop'))
            dispatch(setOpen(true));
        }
    }

    return (
        <ProductCardStyle>
            <ProductCardInfoStyle>
                {viewImg ?
                    <ViewImgStyle><img src={img} alt={name} onClick={()=> setViewImg(false)}/></ViewImgStyle> :
                    <img src={img} alt={name} onClick={()=> setViewImg(true)}/>
                }
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
