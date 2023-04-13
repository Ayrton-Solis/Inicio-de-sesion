import React, { useState } from 'react';
import '../Estilos-de-componentes/LogIn.css'
import { Button, CssBaseline, TextField, Box } from '@mui/material';

export default function LogIn() {

  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');


  const guardarUsuario = () => {

    const usurios = [{
      correo: setCorreo(e.target.value),
      contraseña: setContraseña(e.target.value)
    }]
    
  };


  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      className='cajaPrincipal'
    >

      <CssBaseline />

      <h1 className='titulo'>LogIn</h1>

      <TextField id="outlined-basic" label="Correo" variant="outlined" />
      <TextField id="outlined-password-input" label="Contraseña" type="password" autoComplete="current-password"/>

      <Button sx={{ marginTop: 4, marginBottom: 1 }} variant="outlined">Iniciar Sesion</Button>
      <Button sx={{ margin: 1 }} variant="text" color="secondary">Registarse</Button>

    </Box>
  );
}
