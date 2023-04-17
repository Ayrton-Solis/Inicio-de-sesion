import React, { useState } from 'react';
import '../EstilosDeComponentes/LogIn.css'
import { Button, TextField, Box } from '@mui/material';

export default function LogIn() {

  // ORDEN

  // Regiser
    // usar el componente que sellama login y renombrarlo a signup
    // agregar un input mas que se llame repeat password
    // en el handle submit verificar que las passwords sean iguales
    // EXTRA: si te animas googlear como poner un if con una REGEX de email para validar que sea un email valido (que contenga texto@texto.texto ej: a@a.c)

  // Login
    // crear otro componente que tenga solo email y password
    // agregar el nuevo comoponete llamado Login abjo de singUp en App.js. (Recordar: app.js solo puede retornar 1 elemento por ende vas a tener que agregar un <></>)
    // EXTRAS: Login tome el valor de local storage y busque si el usuario es correcto, sino alert('email o password incorrectos')


    // Mejoras:

    // Register =>  Que deje de guardar 1 solo objecto y guarde un array de usuarios, antes de guardar el usuario nuevo debe verificar
      // que no este creado una cuenta con ese email.

    // Login => Hacer que el login se fije en un array de usuarios si existe la cuenta y si las credenciales son validas.


    // Seguridad: instalar https://www.npmjs.com/package/crypto-js, y vamos a usar el metodo de encriptacion AES para ocultar la informacion del elemento user del localStogare
        // implentar y hacer todo vuelva a funcionar apartir de el nuevo metodo de seguridad.
      // EXTRA: hacer que la key tambien encriptada

    // Rutas!!!!
      // Leer la documentacion de React router dom V6 (https://reactrouter.com/en/main/start/tutorial)
      // Ver video de FAZT (https://www.youtube.com/watch?v=7xRVnmWcTE8)
      // implementar las rutas en App.js tanto para /auth/login y /auth/singup
      // poner en ambos componentes un boton onclick para ir al otro ej: (navigate('/profile/settings'))


      // EXTRAS
        // crear la pagina 404 que todas las paginas invalidas caigan ahi y poner un boton para ir home.
        // El home tiene que estar en el / y debe ser una ruta authenticada!!!
          //  vas a tener que agregar algo mas en el localsotgarge para saber si el usuario esta logeado. ej. logged: true
          // en el home poner un mensaje que diga bienvendo: `{user.email}` y un boton para deslogear, que settee logged: false y redireccione a /auth/login.


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