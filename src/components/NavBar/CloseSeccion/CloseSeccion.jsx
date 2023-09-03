import React, { useState } from 'react'
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import { useDispatch } from 'react-redux';
import { desLogUser } from '../../Redux/userSlice';

const CloseSeccion = (props) => {
    const dispatch = useDispatch();
    const open = props.open
    const setOpen = props.setOpen


    const handleCloseSeccion = (value) => {
        if (value) {
            setOpen(false)
            dispatch(desLogUser())
        }else setOpen(false)
    }
    return (
        <Collapse  style={{
            position: 'fixed',
            top: '0',
            right: '0',
            width: '100%',
            zIndex: '3',
        }} in={open}>
            <Alert className='alert'
                action={
                    <>
                        <IconButton
                            aria-label="true"
                            color="inherit"
                            size="medium"
                            onClick={()=>handleCloseSeccion(true)}
                        >
                            <CheckIcon fontSize="inherit" />
                        </IconButton>
                        <IconButton
                            aria-label="false"
                            color="inherit"
                            size="medium"
                            onClick={()=>handleCloseSeccion(false)}
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    </>
                }
                sx={{ mb: 2 }}
            >
                ¿Desea cerrar sesión?
            </Alert>
        </Collapse>
    )
}

export default CloseSeccion
