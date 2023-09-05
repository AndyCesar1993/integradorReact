import { useEffect, useState } from "react"
import { Autocomplete, Box, Button, TextField } from "@mui/material"
import { ErrorShop, InputPhoneStyle, InputShopStyle } from "./InputShopStyled"
import { useDispatch, useSelector } from "react-redux"
import { formatPrice } from "../../Utils/UtilsConst"
import { countries } from "../../Utils/Countries"
import { useNavigate } from "react-router-dom"
import { createOrder } from "../../../axios/axiosOrder"
import { cleanShop } from "../../Redux/shopSlice"
import { setLoading } from "../../Redux/loadingSlice"

const InputShop = ({ setOpenAlert }) => {

  let shippingCost = 15000


  const [shippingDetails, setshippingDetails] = useState({
    name: "",
    cellphone: "",
    location: "",
    adress: "",
    cp: ""
  })

  const [error, seterror] = useState('');
  const navigate = useNavigate();
  const [country, setCountry] = useState('');
  const dispatch = useDispatch();
  const totalCost = useSelector((state) => state.shop.shipingCost);
  const isLogin = useSelector((state) => state.user.isLogin);
  const userToken = useSelector((state) => state.user.userToken);
  const Shop = useSelector((state) => state.shop.cartItems);

  const handleShipping = e => {
    setshippingDetails({
      ...shippingDetails,
      [e.target.name]: e.target.value
    })
  }

  const buy = async () => {
    let totalPrice = shippingCost + totalCost

    if (!isLogin) {
      navigate('/login')
      return
    }

    dispatch(setLoading(true))

    const data = await createOrder(totalCost, shippingCost, totalPrice, shippingDetails, Shop, userToken);

    dispatch(setLoading(false))
    
    if (data.order) {
      setOpenAlert(true)
      seterror("")
      dispatch(cleanShop())
      return
    }

    if (data.response.data.errors) {
      seterror(data.response.data.errors[0].msg)
      console.log(error)
      return
    }

  }

  return (
    /* Input Nombre */

    <InputShopStyle>
      <h2>Datos de Envío</h2>
      <ErrorShop>{error}</ErrorShop>
      <TextField className="textField" label="Nombre Completo" value={shippingDetails.name} name="name"
        onChange={(e) => handleShipping(e)} />

      {/* Input Telefono */}

      <InputPhoneStyle>
        <Autocomplete
          className="selectCountry"
          options={countries}
          autoHighlight
          getOptionLabel={(option) => option.label}
          renderOption={(props, option) => (
            <Box
              style={{
                fontSize: '12px',
                gap: '5px'
              }}
              component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }}{...props}>
              <img
                width="15"
                src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                alt={option.label}
              />

              {option.label}+{option.phone}
            </Box>
          )}
          renderInput={(params) => (
            useEffect(() => setCountry(params.inputProps.value)),
            <TextField
              {...params}
              label="Ciudad"
              className="textField"
              inputProps={{
                ...params.inputProps,
              }}
            />
          )}
        />
        <input
          name="cellphone"
          value={shippingDetails.cellphone}
          onChange={(e) => handleShipping(e)}
          className="inputNumber" type="tel" placeholder="Numero de Telefono" />
      </InputPhoneStyle>

      <TextField className="textField" label="Ciudad" variant="outlined" value={shippingDetails.location} name="location"
        onChange={e => { handleShipping(e) }} />
      <TextField className="textField" label="Direccion" variant="outlined" value={shippingDetails.adress} name="adress"
        onChange={e => { handleShipping(e) }} />
      <TextField className="textField" label="Codigo Postal" type="number" variant="outlined" value={shippingDetails.cp} name="cp"
        onChange={e => { handleShipping(e) }} />

      {(shippingDetails.location && shippingDetails.adress && shippingDetails.cp) ?
        <Button variant="outlined">Envio $ {formatPrice(shippingCost)}</Button> : null
      }

      <Button variant="outlined">Total $ {formatPrice(totalCost)}</Button>
      <Button
        onClick={buy}
        variant="contained" href="#contained-buttons"
        disabled={
          Shop.length ?
            false : true
        }
      >COMPRAR</Button>
    </InputShopStyle>
  )
}

export default InputShop
