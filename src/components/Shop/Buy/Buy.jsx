import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import { BuyContainer, TableBuyStyle } from './BuyStyle'
import { formatPrice } from '../../Utils/UtilsConst'
import { DividerStyle, SpamStyle } from '../../Orders/OrdersStyle'
import { useNavigate } from 'react-router-dom'

const Buy = ({ order }) => {
    const navigate = useNavigate()

    return (
        <BuyContainer>
            <h2>¡Gracias por su compra!</h2>

            <TableBuyStyle>

                <Table className='shippingDetails'>
                    <h3>Detalles de Envío</h3>

                    <TableRow>

                        <TableHead>Nombre:</TableHead>
                        <TableCell>{order.shippingDetails.name}</TableCell>
                        <TableHead>Telefono:</TableHead>
                        <TableCell>{order.shippingDetails.cellphone}</TableCell>

                    </TableRow>

                    <TableRow>

                        <TableHead>Ciudad:</TableHead>
                        <TableCell>{order.shippingDetails.location}</TableCell>
                        <TableHead>Direccioón:</TableHead>
                        <TableCell>{order.shippingDetails.adress}</TableCell>
                        <TableHead>C.P:</TableHead>
                        <TableCell>{order.shippingDetails.cp}</TableCell>

                    </TableRow>

                </Table>

                <DividerStyle />

                <h3>Detalles de Compra</h3>

                <Table size="small" padding="checkbox">

                    <TableHead>

                        <TableRow>

                            <TableCell align="left">Cantidad</TableCell>

                            <TableCell >Producto</TableCell>

                            <TableCell align="right">Precio</TableCell>

                        </TableRow>

                    </TableHead>

                    <TableBody>

                        {
                            order.items.map((item) =>

                                <TableRow key={item.id}>

                                    <TableCell align="left">{item.quantity}</TableCell>

                                    <TableCell component="th" scope="row">{item.tittle}</TableCell>

                                    <TableCell align="right">${formatPrice(item.price)}</TableCell>

                                </TableRow>

                            )
                        }

                        <TableRow>

                            <TableCell />

                            <TableCell />

                            <TableCell align="right">

                                <SpamStyle>Subtotal:</SpamStyle>

                                ${formatPrice(order.price)}</TableCell>

                        </TableRow>

                        <TableRow>

                            <TableCell />

                            <TableCell />

                            <TableCell align="right">

                                <SpamStyle>Envio:</SpamStyle>

                                ${formatPrice(order.shipingCost)}</TableCell>

                        </TableRow>

                        <TableRow>

                            <TableCell />

                            <TableCell />

                            <TableCell align="right">

                                <SpamStyle>Total:</SpamStyle>

                                ${formatPrice(order.total)}</TableCell>

                        </TableRow>

                    </TableBody>

                </Table>

            </TableBuyStyle>

            <Button variant='contained'
                onClick={() => navigate('/')}
            >Volver al Inicio</Button>

        </BuyContainer>
    )
}

export default Buy
