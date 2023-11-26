import React, {Fragment} from 'react';
import {Button, TextField, Typography} from "@mui/material";
import {IPropsLogin} from "../../../common/types/auth/auth";

const LoginPage:React.FC<IPropsLogin> = (props: IPropsLogin): JSX.Element =>{
    const{setPassword, setEmail, navigate} = props
    return(
        <Fragment >
            <Typography  variant="h5" color="white"  fontFamily="Unbounded" textAlign="center">Авторизация</Typography>
            <Typography  variant="body1" color="white" marginBottom={3} fontFamily="Unbounded" textAlign="center">Введите ваш логин и пароль</Typography>
            <TextField  sx={{ input: { color: 'white' } }} type="email" margin="normal" fullWidth={true}  label="Email" variant="filled"  color="success" placeholder="Введите ваш email" onChange={(e) => setEmail(e.target.value)}/>
            <TextField  sx={{ input: { color: 'white' } }} type="password" margin="normal" fullWidth={true} label="Пароль" variant="filled" color="success" placeholder="Введите ваш пароль" onChange={(e) => setPassword(e.target.value)}/>
            <Button      type="submit" variant="contained" sx={{fontFamily:"Unbounded",backgroundColor:" #6FCF97",border:"6FCF97", marginBottom: 2, marginTop: 2, width:'60%'}}>Войти</Button>
        </Fragment>
    )
}

export default LoginPage;
