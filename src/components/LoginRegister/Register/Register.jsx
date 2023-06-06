import { ErrorRegister, InputContRegister, InputLeftRegister, InputRightRegister, RegisterStyle } from "./RegisterStyled"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonIcon from '@mui/icons-material/Person';
import { Email, Key } from "@mui/icons-material";
import { IconsStyle, SubmitStyle } from "../Login/LoginStyled";
import { useState } from "react";
import { isBetween, emailValid, passwordValid, searchUser, } from '../../Utils/UtilsConst'
import { useDispatch, useSelector } from "react-redux";
import { logUser, regUser } from "../../Redux/userSlice";
import { useNavigate } from "react-router-dom";
import { setMessage, setOpen } from "../../Redux/succesfulMessageSlice";



const Register = () => {
    const [name, setName] = useState('')
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordAgain, setPasswordAgain] = useState('')
    const [error, setError] = useState('')
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.users)
    const navigate = useNavigate();

    const sendRegister = (e) => {
        e.preventDefault();
        if (!isBetween(name.length, 3, 30)) {
            setError('El nombre debe tener entre 3 y 30 caracteres')
            return
        } if (!isBetween(name.length, 3, 20)) {
            setError(' El nombre de usuario debe tener entre 3 y 20 caracteres')
            return
        } if (searchUser(userName, users)) {
            setError('El UserName no esta disponible')
            return
        } if (!emailValid(email)) {
            setError("El Email es invalido!");
            return
        } if (!passwordValid(password)) {
            setError("La contraseña debe ser alfanumerica,contener al menos un simbolo y una Mayuscula!");
            return
        } if (password !== passwordAgain) {
            setError("Las contraseñas no coinciden!");
            return
        } else {
            dispatch(setMessage('Registrado Correctamente'))
            dispatch(setOpen(true))
            dispatch(regUser({ name: name, userName: userName, email: email, password: password}))
            dispatch(logUser({ name: name, userName: userName, email: email, password: password}))
            dispatch(setOpen(true))
            setName('')
            setUserName('')
            setEmail('')
            setPassword('')
            setPasswordAgain('')
            navigate('/');
        }
    }

    return (
        <RegisterStyle>
            <section>
                <AccountCircleIcon style={{ fontSize: '100px' }} />
                <h1>REGISTER</h1>
                <ErrorRegister>{error}</ErrorRegister>
                <form onSubmit={sendRegister}>
                    <InputContRegister>
                        <InputRightRegister onChange={(e) => setName(e.target.value)} value={name} type="text" name="name" placeholder="name" />
                        <IconsStyle><PersonIcon /></IconsStyle>
                    </InputContRegister>
                    <InputContRegister>
                        <IconsStyle><PersonIcon /></IconsStyle>
                        <InputLeftRegister onChange={(e) => setUserName(e.target.value.toLowerCase())} value={userName} type="text" name="user-name" placeholder="user-name" />
                    </InputContRegister>
                    <InputContRegister>
                        <InputRightRegister onChange={(e) => setEmail(e.target.value)} value={email} type="text" name="email" placeholder="email" />
                        <IconsStyle><Email /></IconsStyle>
                    </InputContRegister>
                    <InputContRegister>
                        <IconsStyle><Key /></IconsStyle>
                        <InputLeftRegister onChange={(e) => setPassword(e.target.value.trim())} value={password} type="password" name="password" placeholder="password" />
                    </InputContRegister>
                    <InputContRegister>
                        <InputRightRegister onChange={(e) => setPasswordAgain(e.target.value.trim())} value={passwordAgain} type="password" name="password-again" placeholder="password" />
                        <IconsStyle><Key /></IconsStyle>
                    </InputContRegister>
                    <SubmitStyle type="submit" value="SEND" />
                </form>
            </section>
        </RegisterStyle>
    )
}

export default Register
