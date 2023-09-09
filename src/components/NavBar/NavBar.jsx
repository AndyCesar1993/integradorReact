import Box from '@mui/material/Box';
import { CountShopStyle, HeaderStyle, LoginStyle, LogoStyle, NavStyle, MenuIconStyle } from './NavBarStyled';
import BikeLogo from '../../assets/logo bike.png';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import CloseSeccion from './CloseSeccion/CloseSeccion';
import DataUser from './dataUser/dataUser';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const NavBar = () => {
    const ShopLength = useSelector((state) => state.shop.cartItems.length);
    const [openNav, setOpenNav] = useState(true);
    const [open, setOpen] = useState(false);
    const [userData, setUserData] = useState(false);
    const navigate = useNavigate();

    return (
        <Box sx={{ width: '100%' }}>
            <CloseSeccion open={open} setOpen={setOpen} />
            <HeaderStyle>
                <LogoStyle onClick={() => { navigate('/') }}>
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
                        onClick={() => {
                            setUserData(!userData),
                            setOpenNav(true)
                        }}
                    />
                </LoginStyle>

                <MenuIconStyle onClick={() => {
                        setOpenNav(!openNav),
                        setUserData(false)
                    }}
                >
                    <MenuIcon />
                    {ShopLength > 0 ? <CountShopStyle className='CountShop'>{ShopLength}</CountShopStyle> : <></>}
                </MenuIconStyle>

            </HeaderStyle>

            {userData ?
                <DataUser setUserData={setUserData} setOpen={setOpen} /> :
                <></>
            }


        </Box>
    )
}

export default NavBar

