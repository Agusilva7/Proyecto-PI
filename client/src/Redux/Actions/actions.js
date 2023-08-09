import { GET_VIDEOGAMES,ORDER,PAGINATE,GET_VIDEOGAMES_ID,GET_VIDEOGAMES_NAME,CLEAR} from "../Actions/action-types";
import axios from "axios"

export function getVideoGames(){
    return async function(dispatch){
        //logica de la action
        try {
            const response = await axios.get("http://localhost:3001/videogames")
           
            dispatch({
                type:GET_VIDEOGAMES,
                payload:response.data
            })
           
        } catch (error) {
            console.log(error.message)
        }
    }
}

export function getVideoGamesId(id){
    return async function(dispatch){
        try {
            const response = await axios.get(`http://localhost:3001/videogames/${id}`)
            console.log(response.data)
            dispatch({
                type:GET_VIDEOGAMES_ID,
                payload:response.data
            })
           
        } catch (error) {
            console.log(error.message)
        }

    }
}

export function getVideoGamesName(name){
    return async function (dispatch){
        try {
            console.log(name)
            const response=await axios.get(`http://localhost:3001/videogames/name?name=${name}`)
            console.log(response.data)
            dispatch({
                type:GET_VIDEOGAMES_NAME,
                payload:response.data
            })
        } catch (error) {
            console.log(error.message)
        }
    }
}

export function hoja (direccion){
    return async function (dispatch){
        try {
            dispatch({
                type:PAGINATE,
                payload:direccion
            })
        } catch (error) {
            console.log(error.message)
        }
    }
}
export function orderName (direccion){
    return async function (dispatch){
        try {
            dispatch({
                type:ORDER,
                payload:direccion
            })
        } catch (error) {
            console.log(error.message)
        }
    }
}
export function clear (){
    return async function(dispatch){
        try {
            dispatch({
                type:CLEAR,
                payload:{}
           })
        } catch (error) {
            console.log(error.message)
        }
        
    }
}
