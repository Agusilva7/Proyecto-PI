import React, {useState } from "react";
import "./Create.css";
import { useSelector,useDispatch} from "react-redux";
import { postVideoGames ,getVideoGamesGenres} from "../../Redux/Actions/actions";
import { useEffect } from "react";

const Create = () => {
  const dispatch=useDispatch();

  const gamePlatforms = useSelector((state) => state.gamePlatforms);
  const gameGenres = useSelector((state) => state.gameGenres);



  const [state, setState] = useState({
    name: "",
    description: "",
    image: "",
    released: "",
    rating: ""
  });
  
  const[gender,setGender]=useState([]);

  const[platform,setPlatform]=useState([]);


  const [error, setError] = useState({
    name: "*Este campo es obligatorio",
    description: "*Este campo es obligatorio",
    image: "*Este campo es obligatorio",
    released: "*Este campo es obligatorio",
    rating: "*Este campo es obligatorio",
  });

  // const [aux, setAux] = React.useState(false);

  const handleChange = (event) => {

    // console.log( [event.target.name], event.target.value)

    if (event.target.name==="gender"){
      if (!gender.find(gen=>gen===event.target.value)){
        setGender([
          ...gender,
          event.target.value
          
        ])
      }else{
        console.log("ya esta repetido el genero")
      }
      
    }
    if (event.target.name==="platforms"){
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
      description:state.description,
      platforms:platform,
      image:state.image,
      released:state.released,
      rating:parseInt(state.rating),
      genres:gender
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
      if(state.name.length<30){
        setError({
          ...error,
          name:""
        })
      }else{
        setError({
          ...error,
          name:"El nombre debe tener menos de 30 caracteres"
        })
        return;
      }
    }
    //!Descripcion
    if (name ==="description"){
      //validacion que no este vacio 
      if (state.description!== ""){
        setError({
          ...error,
          description:"",
        });
      }
      else{
        setError({
          ...error,
          description: "Este campo es obligatorio",
        });
        return;
      }
    }

    //!Imagen
    if (name ==="image"){
      if (state.image !== ""){
        setError({
          ...error,
          image:"",
        });
      }
      else{
        setError({
          ...error,
          image: "Este campo es obligatorio",
        });
        return;
      }
    }

    //!Fecha de lanzamiento
    if (name ==="released"){
      if (state.released!== ""){
        setError({
          ...error,
          released:"",
        });
      }
      else{
        setError({
          ...error,
          released: "Este campo es obligatorio",
        });
        return;
      }
      if(!isNaN(parseInt(state.released))){
        setError({
          ...error,
          released:""
        })
      }else{
        setError({
          ...error,
          released:"La fecha de lanzamiento tiene que ser un numero"
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
    let filtrado=gender.filter(gen=>gen!==clear)
    setGender([...filtrado])
  }

  return (
    <div className="form-cont">
      <form className="form" onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input name="name" type="text" onChange={handleChange} />
        <label className="form-error">{error.name}</label>

        <label>Descripción:</label>
        <input name="description" type="text" onChange={handleChange} />
        <label className="form-error">{error.description}</label>

        <label>Imagen:</label>
        <input name="image" type="text" onChange={handleChange} />
        <label className="form-error">{error.image}</label>

        <label>Fecha de lanzamiento:</label>
        <input name="released" type="date" onChange={handleChange} />
        <label className="form-error">{error.released}</label>

        <label>Rating:</label>
        <input name="rating" type="text" onChange={handleChange} />
        <label className="form-error">{error.rating}</label>

        <label>Genero:</label>
      
        <select name="gender" onChange={handleChange}>
          {[...gameGenres].map((genres, index) => {
            return (
              <option key={index} value={genres} >
                {genres}
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

        {/* <label className='form-error'>{error.phone}</label> */}

        <label>Plataformas:</label>
       
        <select name="platforms" onChange={handleChange}>
          {[...gamePlatforms].map((plataforma, index) => {
            return (
              <option key={index} value={plataforma} >
                {plataforma}
              </option>
            );
          })}
        </select>
        <div className="div_platform_global">
          {platform?.map((platform,index)=>{
            
            return(
              <div className="div_platform">
                <div>{platform}</div>
                <button type="button" onClick={()=>{eliminar(index)}} >X</button>
              </div>
            )
          })}
        </div>
         
        
        {/* <label className='form-error'>{error.phone}</label>  */}
        <input disabled={disable()} className="form-button" type="submit" />
      </form>
     
    </div>
  );
};

export default Create;