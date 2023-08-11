import React, { useEffect, useState } from "react";
import "./Create.css";
import { useSelector,useDispatch} from "react-redux";
import { postVideoGames } from "../../Redux/Actions/actions";
const Create = () => {
  const dispatch=useDispatch();

  const plataformas = useSelector((state) => state.plataformas);
  const gameGenero = useSelector((state) => state.gameGenero);
  const [state, setState] = useState({
    name: "",
    descripcion: "",
    imagen: "",
    lanzamiento: "",
    rating: ""
  });
  
  const[gender,setGender]=useState([]);

  const[platform,setPlatform]=useState([]);


  const [error, setError] = useState({
    name: "*Este campo es obligatorio",
    descripcion: "*Este campo es obligatorio",
    imagen: "*Este campo es obligatorio",
    lanzamiento: "*Este campo es obligatorio",
    rating: "*Este campo es obligatorio",
  });

  // const [aux, setAux] = React.useState(false);

  const handleChange = (event) => {

    // console.log( [event.target.name], event.target.value)

    if (event.target.name==="genero"){
      if (!gender.find(gen=>gen===event.target.value)){
        setGender([
          ...gender,
          event.target.value
          
        ])
      }else{
        console.log("ya esta repetido el genero")
      }
      
    }
    if (event.target.name==="plataformas"){
      if (!platform.find(plat=>plat===event.target.value)){
        setPlatform([
          ...platform,
          event.target.value
          
        ])
      }else{
        console.log("ya esta repetida la plataforma")
      }
      
    }

    
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
    validate(
      { ...state, 
      [event.target.name]: event.target.value },
      event.target.name
    );
    // aux ? setAux(false) : setAux(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const body={
      name:state.name,
      descripción:state.descripcion,
      plataformas:platform,
      imagen:state.imagen,
      fechaDeLanzamiento:state.lanzamiento,
      rating:parseInt(state.rating),
      genero:gender
    }
    dispatch(postVideoGames(body));
  };

  const disable = () => {
    let disabled = true;
    for (let err in error) {
      if (error[err] === "") disabled = false;
      else {
        disabled = true;
        break;
      }
    }
    return disabled;
  };

  const validate = (state, name) => {
    const regex=/[0-9]/g;
    //!nombre
    if (name === "name") {
      //validacion que no este vacio
      if (state.name !== "") {
        setError({
          ...error,
          name: "",
        });
      } else {
        setError({
          ...error,
          name: "Este campo es obligatorio",
        });
        return;
      }
      //validacion de longitud
      if(state.name.length<10){
        setError({
          ...error,
          name:""
        })
      }else{
        setError({
          ...error,
          name:"El nombre debe tener menos de 10 caracteres"
        })
        return;
      }

      //validacion que no contenga un numero
      if(!regex.test(state.name)){
        setError({
          ...error,
          name:""
        })
      }else{
        setError({
          ...error,
          name:"El nombre tiene que ser solo letras"
        })
        return;
      }
    }
    //!Descripcion
    if (name ==="descripcion"){
      //validacion que no este vacio 
      if (state.descripcion !== ""){
        setError({
          ...error,
          descripcion:"",
        });
      }
      else{
        setError({
          ...error,
          descripcion: "Este campo es obligatorio",
        });
        return;
      }
    }

    //!Imagen
    if (name ==="imagen"){
      if (state.imagen !== ""){
        setError({
          ...error,
          imagen:"",
        });
      }
      else{
        setError({
          ...error,
          imagen: "Este campo es obligatorio",
        });
        return;
      }
    }

    //!Fecha de lanzamiento
    if (name ==="lanzamiento"){
      if (state.lanzamiento !== ""){
        setError({
          ...error,
          lanzamiento:"",
        });
      }
      else{
        setError({
          ...error,
          lanzamiento: "Este campo es obligatorio",
        });
        return;
      }
      if(!isNaN(parseInt(state.lanzamiento))){
        setError({
          ...error,
          lanzamiento:""
        })
      }else{
        setError({
          ...error,
          lanzamiento:"La fecha de lanzamiento tiene que ser un numero"
        })
        return;
      }
    }
    //!Rating

    if (name ==="rating"){
      //validacion que no este vacio
      if (state.rating !== ""){
        setError({
          ...error,
          rating:"",
        });
      }
      else{
        setError({
          ...error,
          rating: "Este campo es obligatorio",
        });
        return;
      }

       //validacion que sea un numero
      if(!isNaN(parseInt(state.rating))){
        setError({
          ...error,
          rating:""
        })
      }else{
        setError({
          ...error,
          rating:"El rating tiene que ser un numero"
        })
        return;
      }
      if (state.rating>=0&&state.rating<=5){
        setError({
          ...error,
          rating:""
        })
      }else{
        setError({
          ...error,
          rating:"El rating tiene que ser entre 0 y 5"
        })
      }
    }
  };

  const eliminar=(index)=>{
    const clear=platform[index]
    let filtrado=platform.filter(plataforma=>plataforma!==clear)
    setPlatform([...filtrado])
  }
  const eliminar2=(index)=>{
    const clear=gender[index]
    let filtrado=gender.filter(genero=>genero!==clear)
    setGender([...filtrado])
  }

  return (
    <div className="form-cont">
      <form className="form" onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input name="name" type="text" onChange={handleChange} />
        <label className="form-error">{error.name}</label>

        <label>Descripción:</label>
        <input name="descripcion" type="text" onChange={handleChange} />
        <label className="form-error">{error.descripcion}</label>

        <label>Imagen:</label>
        <input name="imagen" type="text" onChange={handleChange} />
        <label className="form-error">{error.imagen}</label>

        <label>Fecha de lanzamiento:</label>
        <input name="lanzamiento" type="date" onChange={handleChange} />
        <label className="form-error">{error.lanzamiento}</label>

        <label>Rating:</label>
        <input name="rating" type="text" onChange={handleChange} />
        <label className="form-error">{error.rating}</label>

        <label>Genero:</label>
      
        <select name="genero" onChange={handleChange}>
          {[...gameGenero].map((genero, index) => {
            return (
              <option key={index} value={genero} >
                {genero}
              </option>
            );
          })}
        </select>
          <div className={"div_gender_global"}>
            {gender?.map((gen,index)=>{
            
              return(
                <div className="div_gender">
                  <div>{gen}</div>
                  <button type="button" onClick={()=>{eliminar2(index)}} >X</button>
                </div>
              )
              })}
          </div>
        <label className='form-error'>{error.phone}</label>

        <label>Plataformas:</label>
       
        <select name="plataformas" onChange={handleChange}>
          {[...plataformas].map((plataforma, index) => {
            return (
              <option key={index} value={plataforma} >
                {plataforma}
              </option>
            );
          })}
        </select>
        <div className="div_platform_global">
          {platform?.map((plataforma,index)=>{
            
            return(
              <div className="div_platform">
                <div>{plataforma}</div>
                <button type="button" onClick={()=>{eliminar(index)}} >X</button>
              </div>
            )
          })}
        </div>
         
        <label className='form-error'>{error.phone}</label> 
        <input disabled={disable()} className="form-button" type="submit" />
      </form>
     
    </div>
  );
};

export default Create;