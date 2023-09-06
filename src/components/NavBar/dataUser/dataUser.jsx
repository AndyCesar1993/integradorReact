import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { UserContainerStyle } from './dataUserStyle';
import Divider from '@mui/material/Divider';
import { useDispatch, useSelector } from 'react-redux';
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import { setOrders } from '../../Redux/ordersSlice';
import { getOrders } from '../../../axios/axiosOrder'
import PersonIcon from '@mui/icons-material/Person';
import PortraitIcon from '@mui/icons-material/Portrait';
import EmailIcon from '@mui/icons-material/Email';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';



export default function DataUser({ setOpen, setUserData }) {

    const isLogin = useSelector((state) => state.user.isLogin)
    const { email, name, username } = useSelector((state) => state.user.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const userToken = useSelector((state) => state.user.userToken)

    const openOrders = async () => {
        const orders = await getOrders(userToken)
        dispatch(setOrders(orders))
        navigate('/orders')
    }


    return (
        <UserContainerStyle>
            {isLogin ?
                <List>
                    <ListItem style={{ cursor: 'pointer' }}
                        onClick={() => setUserData(false)}
                    >
                        <ListItemIcon style={{ marginLeft: 'auto' }}>
                            <CloseIcon style={{ marginLeft: 'auto' }} />
                        </ListItemIcon>
                    </ListItem>

                    <ListItem disablePadding>
                        <PersonIcon />
                        <ListItemButton>
                            <ListItemText primary={username} />
                        </ListItemButton>
                    </ListItem>

                    <Divider />

                    <ListItem disablePadding>
                        <PortraitIcon />
                        <ListItemButton>
                            <ListItemText primary={name} />
                        </ListItemButton>
                    </ListItem>

                    <Divider />

                    <ListItem disablePadding>
                        <EmailIcon />
                        <ListItemButton>
                            <ListItemText primary={email} />
                        </ListItemButton>
                    </ListItem>

                    <Divider />

                    <ListItem disablePadding
                        onClick={openOrders}
                    >
                        <ShoppingCartCheckoutIcon />
                        <ListItemButton component="a" >

                            <ListItemText primary='My orders' />
                        </ListItemButton>
                    </ListItem>

                    <Divider />

                    <ListItemButton
                        onClick={() => { setOpen(true), setUserData(false) }}
                    >
                        <ListItemIcon>
                            <SendIcon />
                        </ListItemIcon>
                        <ListItemText primary="Log Out" />
                    </ListItemButton>

                </List>
                :
                <ListItemButton>
                    <ListItemIcon
                        onClick={() => { navigate('/login'); setUserData(false) }}>
                        <SendIcon />
                    </ListItemIcon>
                    <ListItemText primary="Sign in"
                        onClick={() => { navigate('/login'); setUserData(false) }} />

                    <ListItemIcon style={{ marginLeft: 'auto' }}
                        onClick={() => setUserData(false)}
                    >
                        <CloseIcon style={{ marginLeft: 'auto' }} />
                    </ListItemIcon>
                </ListItemButton>
            }
        </UserContainerStyle>

    );
}