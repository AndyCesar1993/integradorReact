import Box from '@mui/material/Box';
import { CountShopStyle, HeaderStyle, LoginAvatarStyle, LoginStyle, LogoStyle, NavStyle } from './NavBarStyled';
import BikeLogo from '../../assets/logo bike.png';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import CloseSeccion from './CloseSeccion/CloseSeccion';


const NavBar = () => {
    const ShopLength = useSelector((state) => state.shop.cartItems.length)
    const userLog = useSelector((state) => state.users.userLog)
    const isLogin = useSelector((state) => state.users.isLogin)
    const [openNav, setOpenNav] = useState(true);
    const [open, setOpen] = useState(false);

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
                    <ul onClick={()=> setOpenNav(!openNav)}>
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
                    {isLogin ?
                        <LoginAvatarStyle>
                            <PersonRemoveIcon onClick={() => setOpen(true)} className='UserIcon'/>
                            <p onClick={() => setOpen(true)}>{userLog.userName}</p>
                        </LoginAvatarStyle>
                        : <Link to='/login'>
                            <PersonAddIcon className='UserIcon' />
                        </Link>}
                </LoginStyle>

                <MenuIcon className='menuIcon' onClick={()=> setOpenNav(!openNav)} />

            </HeaderStyle>
        </Box>
    )
}

export default NavBar

