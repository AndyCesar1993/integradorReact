import Box from '@mui/material/Box';
import { CountShopStyle, HeaderStyle, LoginStyle, LogoStyle, NavStyle } from './NavBarStyled';
import BikeLogo from '../../assets/logo bike.png';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import CloseSeccion from './CloseSeccion/CloseSeccion';
import DataUser from './dataUser/dataUser';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const NavBar = () => {
    const ShopLength = useSelector((state) => state.shop.cartItems.length)
    const userLog = useSelector((state) => state.user.user)
    const isLogin = useSelector((state) => state.user.isLogin)
    const [openNav, setOpenNav] = useState(true);
    const [open, setOpen] = useState(false);
    const [userData, setUserData] = useState(false)

    return (
        <Box sx={{ width: '100%' }}>
            <CloseSeccion open={open} setOpen={setOpen} />
            <HeaderStyle>
                <LogoStyle>
                    <h3>Bike</h3>
                    <img src={BikeLogo} alt="logo bike" />
                    <h3>Store</h3>
                </LogoStyle>

                <NavStyle open={openNav}>
                    <ul onClick={() => setOpenNav(!openNav)}>
                        <li><Link to='/'>Inicio</Link></li>
                        <li><Link to='products'>Productos</Link></li>
                        <li><Link to='aboutUs'>Nosotros</Link></li>
                        <li><Link to='contact'>Contacto</Link></li>
                        <li><Link to='shop'>Shop</Link>
                            {ShopLength > 0 ? <CountShopStyle className='CountShop'>{ShopLength}</CountShopStyle> : <></>}
                        </li>
                    </ul>
                </NavStyle>

                <LoginStyle>
                    <AccountCircleIcon
                        onClick={()=>setUserData(!userData)}
                    />
                </LoginStyle>

                <MenuIcon className='menuIcon' onClick={() => setOpenNav(!openNav)} />

            </HeaderStyle>

            {userData ?
                <DataUser setUserData={setUserData} setOpen={setOpen} /> :
                <></>
            }


        </Box>
    )
}

export default NavBar

