import { useSelector } from "react-redux"
import { useEffect } from "react"
import { ErrorStyle } from "../Podructs/ProductsStyle"
import { DividerStyle, OrderCardStyle, OrderContaynerStyle, OrderStyle, SpamStyle } from "./OrdersStyle"
import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"
import { formatPrice } from "../Utils/UtilsConst"
import { useNavigate } from "react-router-dom"



const Orders = () => {
    const orders = useSelector((state) => state.orders.state)
    const isLogin = useSelector((state) => state.user.isLogin)
    const navigate = useNavigate()


    if (!isLogin) {
        useEffect(() => {
            navigate('/login')
        })
        return
    }


    return (
        <>
            {
                orders.length ?
                    <OrderContaynerStyle>
                        <OrderStyle>
                            <h2>My Orders</h2>

                            {orders.map((order) =>
                                <OrderCardStyle key={order._id}>
                                    <SpamStyle>Estado: <span>{order.status}</span></SpamStyle>

                                    <Table size="small" aria-label="a dense table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell align="left">Cantidad</TableCell>
                                                <TableCell >Nombre</TableCell>
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
                                    <DividerStyle />
                                    <Table>

                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Nombre</TableCell>
                                                <TableCell>Telefono</TableCell>
                                                <TableCell>Ciudad</TableCell>
                                                <TableCell>Direncción</TableCell>
                                                <TableCell>C.P</TableCell>
                                            </TableRow>
                                        </TableHead>

                                        <TableBody>
                                            <TableCell>{order.shippingDetails.name}</TableCell>
                                            <TableCell>{order.shippingDetails.cellphone}</TableCell>
                                            <TableCell>{order.shippingDetails.location}</TableCell>
                                            <TableCell>{order.shippingDetails.adress}</TableCell>
                                            <TableCell>{order.shippingDetails.cp}</TableCell>
                                        </TableBody>
                                    </Table>

                                </OrderCardStyle>
                            )}
                        </OrderStyle>
                    </OrderContaynerStyle>
                    :
                    <ErrorStyle>No se encontro ordenes en curso!</ErrorStyle>
            }
        </>
    )
}

export default Orders
