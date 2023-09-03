import { DontUserStyle, ErrorLogin, LoginStyle } from "./LoginStyled"
import SendIcon from '@mui/icons-material/Send';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logUser } from "../../Redux/userSlice";
import { useNavigate } from "react-router-dom";
import { setMessage, setOpen } from "../../Redux/succesfulMessageSlice";
import { Button, TextField } from "@mui/material";
import { loginUser } from "../../../axios/axiosUSer";
import Animations from "../../Utils/loading";


const Login = () => {
    const [user, setUser] = useState({
        username: "",
        password: ""
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const submitLogin = async (e) => {
        e.preventDefault();

        setLoading(true)

        const data = await loginUser(user.username, user.password)

        setLoading(false)

        if(data.user){
            setError("")
        }

        if(data.errors){
            setError(data.errors[0].msg)
            return
        }

        if(data.msg){
            setError(data.msg)
            return
        } 

        else{
            setError(data.msg)
            dispatch(setMessage('Logeado Correctamente'))
            dispatch(logUser(data));
            dispatch(setOpen(true));
            navigate('/');
            return
        }

    }

    return (
        <LoginStyle>
            {loading ?
                <Animations /> :
                <section>
                    <h1>LOGIN</h1>
                    <ErrorLogin>{error}</ErrorLogin>
                    <form onSubmit={submitLogin}>
                        <TextField id="user-name" label="user-name" variant="outlined" value={user.username} name="username"
                            InputLabelProps={{ shrink: true, }}
                            onChange={(e) => handleChange(e)}
                        />

                        <TextField id="password" label="password" variant="outlined" type="password" value={user.password} name="password"
                            InputLabelProps={{ shrink: true, }}
                            onChange={(e) => handleChange(e)}
                        />

                        <Button type="submit" variant="contained" endIcon={<SendIcon />}>
                            Send
                        </Button>

                        <DontUserStyle to='/register'>¿No posee usuario?</DontUserStyle>
                    </form>
                </section>
            }

        </LoginStyle>
    )
}

export default Login
