import { Button, ButtonGroup } from "@mui/material"
import { formatPrice } from "../../../Utils/UtilsConst"
import { ShopCardStyle, InfoCardShopStyle } from "./CardCarritoStyled"
import { Close } from "@mui/icons-material"
import { useDispatch, useSelector } from "react-redux"
import { addShipingCost, removeToShop, susShipingCost } from "../../../Redux/shopSlice"
import { useState } from "react"

const CardCarrito = ({ img, tittle, id, price }) => {
    const dispatch = useDispatch();
    const [count, setCount] = useState(1);

    const removeProduct = () => {
        let totalPrice=(price*count)
        dispatch(removeToShop({ id, totalPrice }))
    }

    const increment = () => {
        setCount(count + 1);
        dispatch(addShipingCost({price,count,id}))
    };
    const decrement = () => {
        if (count > 1) {
            setCount(count - 1)
            dispatch(susShipingCost({price,count,id}))
        }
    };


    return (
        <ShopCardStyle>
            <img src={img} alt={tittle} />
            <InfoCardShopStyle>
                <h3>{tittle}</h3>
                <ButtonGroup variant="outlined" aria-label="outlined secondary  button group">
                    <Button onClick={decrement}>-</Button>
                    <Button>{count}</Button>
                    <Button onClick={increment}>+</Button>
                </ButtonGroup>
                <small>$ {formatPrice(price * count)}</small>
            </InfoCardShopStyle>
            <Close
                onClick={removeProduct}
                style={{
                    border: '1px solid black',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    marginBottom: 'auto',
                    fontSize: '20px'
                }} />
        </ShopCardStyle>
    )
}

export default CardCarrito
