import React,{useState} from 'react'
import "./Create.css"
const Create = () => {

  const [state,setState]=useState({
    name:"",
    email:"",
    phone:""
  })
  const [error,setError]=useState({
    name:"campo requerido",
    email:"campo requerido",
    phone:""
  })

  const handleChange=(event)=>{
    setState({
      ...state,
      [event.target.name]:event.target.value
    })
    validate({...state,[event.target.name]:event.target.value}, event.target.name)
  }

  const handleSubmit=(event)=>{
    event.preventDefault()
    console.log(state)
  }

  const disable = () =>{
    let disabled = true;
    for (let err in error){
      if (error[err]==="") disabled=false;
      else{
        disabled=true;
        break;
      }
    }
    return disabled;
  }

  const validate = (state,name)=>{
    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (name==="name"){
      if (state.name!=="")setError({...error,name:""})
      else{setError({...error,name:"campo requerido"})}
    }
    if (name==="email"){

      if (state.email!=="")setError({...error,email:""})
      else{
        setError({...error,email:"campo requerido"})
        return;
      }
      
      if (emailRegex.test(state.email)) {
        setError({...error,email:""})
      } else {
        setError({...error,email:"El email tiene un formato erroneo"})
        return;
      }
    }
    if (name==="phone"){
      if (isNaN(parseInt(state.phone))){
        setError({...error,phone:"El telefono debe ser numero."})
      }else{
        setError({...error,phone:""})
        return;
      }
    }
  }
  return (
    <div className='form-cont'>
      <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input name="name" onChange={handleChange} type="text" />
        <label className='form-error'>{error.name}</label>

        <label>Email:</label>
        <input name="email" onChange={handleChange} type="text" />
        <label className='form-error'>{error.email}</label>

        <label>Telefono:</label>
        <input name="phone" onChange={handleChange} type="text" />
        <label className='form-error'>{error.phone}</label>

        <input disabled={disable()} className='form-button' type='submit'/>
      </form>
      </div>
  )
}

export default Create