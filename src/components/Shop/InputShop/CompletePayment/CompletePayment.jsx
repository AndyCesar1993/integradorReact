import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { useDispatch } from 'react-redux';
import { setMessage, setOpen } from '../../../Redux/succesfulMessageSlice';
import InputShop from '../InputShop';
import { forwardRef, useState } from 'react';

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide(props) {
    const [openAlert, setOpenAlert] = useState(false);
    const dispatch = useDispatch();
    const {setLoading} = props


    const handleClose = (state) => {
        if(state){
            dispatch(setMessage('Compra realizada exitosamente!'))
            dispatch(setOpen(true))
            setOpenAlert(false)
        }else setOpenAlert(false)
    }

    return (
        <div>
            <InputShop setOpenAlert={setOpenAlert} setLoading={setLoading}/>
            <Dialog
                open={openAlert}
                TransitionComponent={Transition}
                keepMounted
                style={{zIndex:'2'}}
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Continuar con la compra?"}</DialogTitle>
                <DialogActions>
                    <Button onClick={()=>handleClose(true)}>Continuar</Button>
                    <Button onClick={()=>handleClose(false)}>Cancelar</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}