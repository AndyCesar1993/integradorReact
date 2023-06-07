import { Autocomplete, Box, Button, MenuItem, Switch, TextField } from "@mui/material"
import { ErrorShop, InputPhoneStyle, InputShopStyle } from "./InputShopStyled"
import { useSelector } from "react-redux"
import { formatPrice, isEmpty } from "../../Utils/UtilsConst"
import { countries } from "../../Utils/Countries"
import { Payment } from "../../Utils/Payment"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const InputShop = (props) => {
  const totalCost = useSelector((state) => state.shop.shipingCost);
  const isLogin = useSelector((state) => state.users.isLogin)
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [phone, setPhone] = useState('');
  const [payment, setPayment] = useState('');
  const [shypment, setShypment] = useState('');
  const [cuotas, setCuotas] = useState(true);
  const [envio, setEnvio] = useState(true);
  const Shop = useSelector((state) => state.shop.cartItems);
  const [error, setError] = useState('');
  const { setOpenAlert } = props

  const arrayCuotas = ['1', '3', '6', '12']

  const Buy = () => {
    if (!isLogin) {
      navigate('/login')
      return
    } if (isEmpty(name)) {
      setError('Por favor ingrese el nombre completo')
      return
    } if (isEmpty(country)) {
      setError('Por favor ingrese la ciudad')
      return
    } if (isEmpty(phone)) {
      setError('Por favor ingrese su numero de telefono')
      return
    } if (isEmpty(payment)) {
      setError('Por favor ingrese el medio de pago')
      return
    } if (isEmpty(shypment)) {
      setError('Por favor ingrese si desea envio')
      return
    } else {
      setError('');
      setOpenAlert(true);
    }
  }

  return (
    /* Input Nombre */

    <InputShopStyle>
      <h2>Datos de Compra</h2>
      <ErrorShop>{error}</ErrorShop>
      <TextField
        className="textField"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        label="Nombre Completo"
      />

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
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="inputNumber" type="tel" placeholder="Numero de Telefono" />
      </InputPhoneStyle>

      {/* Input Medios de pago */}

      <Autocomplete
        style={{
          textAlign: 'center'
        }}
        options={Payment}
        autoHighlight
        getOptionLabel={(option) => option.name}
        renderOption={(props, option) => (
          <Box
            style={{
              fontSize: '12px'
            }}
            component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
            <img
              width="15"
              src={option.img}
              alt={option.name}
            />
            {option.name}
          </Box>
        )}
        renderInput={(paymens) => (
          useEffect(() => {
            let valuePay = paymens.inputProps.value
            setPayment(paymens.inputProps.value)
            if (valuePay === 'Visa' || valuePay === 'MasterCard' || valuePay === 'American Express' || valuePay === 'Mercado Pago') {
              setCuotas(false)
              return
            } else setCuotas(true)
          }),
          <TextField className="textField"
            {...paymens}
            label="Medio de Pago"
            inputProps={{
              ...paymens.inputProps,
            }}
          />

        )}
      />

      {/* Input Cuotas */}

      <Autocomplete
        options={arrayCuotas}
        disabled={cuotas}
        renderInput={(params) => <TextField className="textField" {...params} label="Cuotas" />}
      />

      {/* Envio? */}

      <Autocomplete
        options={['Si', 'No']}
        renderInput={(params) => (
          useEffect(() => {
            setShypment(params.inputProps.value)
            if (params.inputProps.value === 'Si') {
              setEnvio(false)
            } else setEnvio(true)
          }),
          <TextField className="textField" {...params} label="Envio?" />)}
      />

      {/* Input ubicacion */}

      <TextField className="textField" label="Ciudad" variant="outlined" disabled={envio} />
      <TextField className="textField" label="Direccion" variant="outlined" disabled={envio} />
      <TextField className="textField" label="Codigo Postal" variant="outlined" disabled={envio} />

      <Button variant="outlined" >$ {formatPrice(totalCost)}</Button>
      <Button
        onClick={Buy}
        variant="contained" href="#contained-buttons"
        disabled={Shop.length ? false : true}
      >COMPRAR</Button>
    </InputShopStyle>
  )
}

export default InputShop
