import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { useDispatch } from 'react-redux';
import { setMessage, setOpen } from '../../../Redux/succesfulMessageSlice';
import InputShop from '../InputShop';
import { forwardRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Buy from '../../Buy/Buy';
import { cleanShop } from '../../../Redux/shopSlice'

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
    const [orderRealized, setOrderRealized] = useState([])
    const [openAlert, setOpenAlert] = useState(false);
    const [orderOk, setOrderOk] = useState(false)
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleClose = (state) => {
        if (state) {
            dispatch(setMessage('Compra realizada exitosamente!'))
            dispatch(setOpen(true))
            setOpenAlert(false)
            dispatch(cleanShop())
            setOrderOk(true)
        } else setOpenAlert(false)
    }

    return (
        orderOk ?

            <Buy order={orderRealized} /> :

            <div>

                <InputShop setOpenAlert={setOpenAlert} setOrderRealized={setOrderRealized} />
                <Dialog
                    open={openAlert}
                    TransitionComponent={Transition}
                    keepMounted
                    style={{ zIndex: '2' }}
                    onClose={handleClose}
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle>{"¿Desea completar la compra?"}</DialogTitle>
                    <DialogActions>
                        <Button onClick={() => handleClose(true)}>Continuar</Button>
                        <Button onClick={() => handleClose(false)}>Cancelar</Button>
                    </DialogActions>
                </Dialog>
            </div>
    );
}