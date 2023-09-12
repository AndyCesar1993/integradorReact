import * as React from 'react';
import Footer from "../Footer/Footer"
import NavBar from "../NavBar/NavBar"
import { LayoutStyle } from "./LayoutStyled"
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useDispatch, useSelector } from "react-redux";
import { setLink, setOpen } from "../Redux/succesfulMessageSlice";
import Animations from "../Utils/loading"
import { Link } from 'react-router-dom';
import { ArrowForward, ArrowForwardIosSharp } from '@mui/icons-material';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Layout = ({ children }) => {
    const dispatch = useDispatch()
    const open = useSelector((state) => state.succesfuldMessage.open);
    const message = useSelector((state) => state.succesfuldMessage.message);
    const link = useSelector((state) => state.succesfuldMessage.link);
    const loading = useSelector((state) => state.loading.loading)

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        } dispatch(setOpen(false))
    };



    return (
        <Stack spacing={2} sx={{ width: '100%' }}>
            <NavBar />
                <LayoutStyle>{children}</LayoutStyle>
                <Animations loading={loading}/> 
            <Footer />
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    {
                        link?
                        <>{message} <Link color="inherit" to={link}><ArrowForward fontSize='sm'/></Link></> :
                        message
                    }                  
                </Alert>
                
            </Snackbar>
        </Stack>
    );
}

export default Layout
