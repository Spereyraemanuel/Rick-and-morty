import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const regexEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
const regexPassword = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/i;

export default function Login({login}) {

const [inputs, setInputs] = useState({
  email:"",
  password:""
})

const [errors, setError] = useState({
  email:"",
  password:""
})

const validate = (inputs) => {
 const errors = {}
 if(!inputs.email){
  errors.email = "Debe haber un email"
 }else if(!inputs.password){
  errors.password = "Debe haber un password"
  }
  else if(!regexEmail.test(inputs.email)){
      errors.email = "debe ser un email valido"

  }
  else if(!regexPassword.test(inputs.password)){
    errors.password = "Debe ser un password valido"
  }
  return errors;
 }


const handleChange = (event) => {
  setInputs({
    ...inputs,
    [event.target.name]: event.target.value

  })
  setError(
    validate({ 
      ...inputs,
      [event.target.name]: event.target.value,
    })
  );
}
  
const handleSubmit = (event) => {
  event.prevent.default()
  const aux = Object.kets(errors)
  if(aux.length===0){
    setInputs({
      email:"",
      password:""
    })
    setError({
      email:"",
      password:""
    })
     login(inputs)
    return alert("okk")

  }
  return alert("Error")
}
 

  return (
    <div>
      <form onSubmit={handleSubmit}>

        <label>Email:</label>
        <input name="email"
         value={inputs.email} 
         onChange={handleChange}
         placeholder=""
         />
         <p className='danger'>{errors.email}</p>
        <label>Password: </label>
        <input name='password' 
        value={inputs.password}
        onChange={handleChange}
        ></input>
         <p className='danger'>{errors.password}</p>
         {
          Object.keys(errors).length===0 ? (  <Link to="/home">
        <button type="submit">Ingresar</button>
         </Link>
          ) : null}
      </form>
      </div>
      );
    }
    