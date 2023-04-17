import React, { useState } from 'react';
import '../EstilosDeComponentes/LogIn.css'
import { Button, TextField, Box } from '@mui/material';

export default function LogIn() {

  // ORDEN

  // = Hacer un funcion llamada handleSubmit que consologee el state: LISTO!!
  // = Hacer una validacion simple con If's para verificar que email y password tengas como minimo 5 letras 
  // sino mostrar un alerte con un mensaje: LISTO!!
  // = Hacer un set Local storage, buscar doc. (Tip: solo se pueden guardar Strings si necesitas guardar un Obj usar JSON.Strinfigy): LISTO!!
  // = Hacer un get localStorage para obtener los datos del usuario: LISTOOOOO!!!!!!!!!!!!!!!!!!!

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

  const handleSubmit = () => {
    if (formData.email.length && formData.password.length >= 5) {
      localStorage.setItem('users' ,JSON.stringify(formData));
      console.log(formData);
    } else {
      alert('El email y la contraseña deben tener al menos 5 caracteres');
    }
  }

  const getItem = () => {
    const users = localStorage.getItem('users')
    console.log(JSON.parse(users));
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

        <Button onClick={handleSubmit} sx={{ marginTop: 4, marginBottom: 1 }} variant="outlined">Iniciar Sesion</Button>
        <Button sx={{ margin: 1 }} variant="text" color="secondary">Registarse</Button>
        <Button onClick={getItem} sx={{ margin: 1 }} variant="outlined">GetItem</Button>
      </Box>
    </>
  );
}