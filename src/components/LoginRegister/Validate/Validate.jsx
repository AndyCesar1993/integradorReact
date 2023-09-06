import { Button, TextField } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import { ValidateContainerStyle, InputValidateStyle, ErrorValidate } from "./ValidateStyled"
import { useState } from "react";
import { verifyUser } from "../../../axios/axiosUSer";
import { useDispatch } from "react-redux";
import { setMessage, setOpen } from "../../Redux/succesfulMessageSlice";
import { useNavigate } from "react-router-dom";
import { setLoading } from "../../Redux/loadingSlice"


const Validate = () => {
  const [data, setData] = useState({
    email: "",
    code: ""
  })
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const verifytiUser = async (e) => {
    e.preventDefault();

    dispatch(setLoading(true))

    const validate = await verifyUser(data.email.toLowerCase(), data.code)

    dispatch(setLoading(false))

    if (!validate.errors) {
      dispatch(setMessage(validate.msg));
      dispatch(setOpen(true));
      setError("")
      navigate("/login")
      return
    }

    if (validate.errors.msg === "El usuario ya se encuentra verificado") {
      dispatch(setMessage(validate.errors.msg));
      dispatch(setOpen(true));
      setError("")
      navigate("/login")
      return
    }

    setError(validate.errors)

  }

  return (
    <ValidateContainerStyle>

      <h2>Por favor ingrese el codigo que le enviamos al email para validar su usuario</h2>

      <InputValidateStyle onSubmit={verifytiUser}>


        <ErrorValidate>
          {error ?
            error.length ?
              <li>{error[0].msg}</li> :
              <li>{error.msg}</li> :
            null
          }
        </ErrorValidate>


        <TextField id="email" type="email" label="email" variant="outlined"
          onChange={(e) => handleChange(e)} value={data.email} name="email"
        />

        <TextField id="codigo" label="Codigo" variant="outlined"
          onChange={(e) => handleChange(e)} value={data.code} name="code"
        />

        <Button variant="contained" type="submit" endIcon={<SendIcon />}>
          Send
        </Button>

      </InputValidateStyle>

    </ValidateContainerStyle>
  )
}

export default Validate

