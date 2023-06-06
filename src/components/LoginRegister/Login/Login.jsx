import { DontUserStyle, ErrorLogin, IconsStyle, InputDivStyle, LoginStyle, SubmitStyle } from "./LoginStyled"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonIcon from '@mui/icons-material/Person';
import KeyIcon from '@mui/icons-material/Key';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty, searchUser } from "../../Utils/UtilsConst";
import { logUser } from "../../Redux/userSlice";
import { useNavigate } from "react-router-dom";
import { setMessage, setOpen } from "../../Redux/succesfulMessageSlice";

const Login = () => {
    const [userName,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [error,setError]=useState('');
    const users = useSelector((state)=>state.users.users);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submitLogin = e=>{
        e.preventDefault();
        let user= searchUser(userName,users)
        if(isEmpty(userName)){
            setError('El usuario es obligatorio!')
            return
        }if(!user){
            setError('El nombre de usuario no existe!')
            return
        }if(user.password !== password){
            setError('La contraseña es incorrecta!')
        }else{
            dispatch(setMessage('Registrado Correctamente'))
            dispatch(logUser(user));
            dispatch(setOpen(true))
            setUsername('');
            setPassword('');
            navigate('/');
        }
    }

    return (
        <LoginStyle>
            <section>
                <AccountCircleIcon style={{fontSize:'100px'}}/>
                <h1>LOGIN</h1>
                <ErrorLogin>{error}</ErrorLogin>
                <form onSubmit={submitLogin}>
                    <InputDivStyle>
                    <IconsStyle><PersonIcon /></IconsStyle>
                        <input value={userName} onChange={(e)=>setUsername(e.target.value)} type="text" name="user-name" id="user-name" placeholder="user-name" />
                    </InputDivStyle>
                    <InputDivStyle>
                        <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" name="password" id="password" placeholder="password" />
                        <IconsStyle><KeyIcon /></IconsStyle>
                    </InputDivStyle>
                    <DontUserStyle to='/register'>¿No posee usuario?</DontUserStyle>
                    <SubmitStyle type="submit" value="ENVIAR" />
                </form>
            </section>
        </LoginStyle>
    )
}

export default Login
