import React, { useState } from 'react';
import '../Estilos-de-componentes/LogIn.css'
import { Button, TextField, Box } from '@mui/material';

export default function LogIn() {

  // ORDEN

  // = Hacer un funcion llamada handleSubmit que consologee el state
  // = Hacer una validacion simple con If's para verificar que email y password tengas como minimo 5 letras 
  // sino mostrar un alerte con un mensaje
  // Hacer un set Local storage, buscar doc. (Tip: solo se pueden guardar Strings si necesitas guardar un Obj usar JSON.Strinfigy)
  // Hacer un get localStorage para obtener los datos del usuario

  const initialForm = {
    email: '',
    password: ''
  }

  const [formData, setFormData] = useState(initialForm)

  const handleInputs = (e, field) => {
    setFormData({
      ...formData,
      [field]: e.target.value
    })
  }
  return (
    <>
      <h2 className='titulo'>Login</h2>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        className='cajaPrincipal'
      >

        <TextField onChange={(e) => handleInputs(e, 'email')} id="outlined-basic" label="Correo" variant="outlined" />
        <TextField onChange={(e) => handleInputs(e, 'password')} id="outlined-password-input" label="Contraseña" type="password" autoComplete="current-password" />

        <Button sx={{ marginTop: 4, marginBottom: 1 }} variant="outlined">Iniciar Sesion</Button>
        <Button sx={{ margin: 1 }} variant="text" color="secondary">Registarse</Button>
      </Box>
    </>
  );
}