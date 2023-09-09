import { ErrorRegister, RegisterStyle, InputsContainerStyle } from "./RegisterStyled"
import SendIcon from '@mui/icons-material/Send';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setMessage, setOpen } from "../../Redux/succesfulMessageSlice";
import { Button, TextField } from "@mui/material";
import { createUser } from "../../../axios/axiosUSer";
import { setLoading } from "../../Redux/loadingSlice"
import moment from "moment";


const Register = () => {
    const [data, setData] = useState({
        name: "",
        username: "",
        dateOfBirth: moment(Date.now()).format('yyyy-MM-DD'),
        email: "",
        password: "",
        passwordAgain: ""
    });
    const [error, setError] = useState("")
    const navigate = useNavigate();
    const dispatch = useDispatch()


    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };


    const sendRegister = async (e) => {
        e.preventDefault();
        const date = Number(moment(data.dateOfBirth).format('DDMMYYYY'))

        if (data.password != data.passwordAgain) {
            setError({ msg: "Las contraseñas no coinciden", path: "passwords" })
            return
        }

        dispatch(setLoading(true))

        const user = await createUser(data.name, data.username.trim(), date, data.email.toLowerCase().trim(), data.password)

        dispatch(setLoading(false))

        console.log(user)

        if (user.errors) {
            setError(user.errors[0].msg)
            return
        }

        if (user === "userRegister") {
            dispatch(setMessage(`El usuario ya se encuentra registrado. Se envió nuevamente código de verificación a ${data.email}`));
            dispatch(setOpen(true));
            
            navigate('/validate');
            return
        } else {
            dispatch(setMessage(user.msg));
            dispatch(setOpen(true));
            setData({
                name: "",
                username: "",
                email: "",
                password: "",
                passwordAgain: ""
            })
            navigate('/validate');
        }



    }

    return (
        <RegisterStyle>
            <section>
                <h1>REGISTER</h1>
                <ErrorRegister>{
                    error ?
                        error
                        : null}
                </ErrorRegister>

                <form onSubmit={sendRegister}>
                    <div>
                        <InputsContainerStyle>
                            <TextField id="full-name" label="full-name" variant="outlined"
                                InputLabelProps={{ shrink: true, }}
                                onChange={(e) => handleChange(e)} value={data.name}
                                name="name"

                            />

                            <TextField id="user-name" label="user-name" variant="outlined"
                                InputLabelProps={{ shrink: true, }}
                                onChange={(e) => handleChange(e)} value={data.username}
                                name="username"

                            />

                            <TextField id="date-of-birth" type="date" variant="outlined"
                                InputLabelProps={{ shrink: true, }} label="date of birth"
                                onChange={(e) => handleChange(e)} value={data.dateOfBirth}
                                name="dateOfBirth"

                            />
                        </InputsContainerStyle>

                        <InputsContainerStyle>
                            <TextField id="email" label="email" type="email" variant="outlined"
                                InputLabelProps={{ shrink: true, }}
                                onChange={(e) => handleChange(e)} value={data.email}
                                name="email"

                            />

                            <TextField id="password" label="password" variant="outlined" type="password"
                                InputLabelProps={{ shrink: true, }}
                                onChange={(e) => handleChange(e)} value={data.password}
                                name="password"

                            />

                            <TextField id="passwordRepeat" label="password" variant="outlined" type="password"
                                InputLabelProps={{ shrink: true, }}
                                onChange={(e) => handleChange(e)} value={data.passwordAgain}
                                name="passwordAgain"

                            />
                        </InputsContainerStyle>
                    </div>
                    <Button type="submit" variant="contained" endIcon={<SendIcon />}>
                        Send
                    </Button>

                </form>
            </section>
        </RegisterStyle>


    )
}

export default Register
