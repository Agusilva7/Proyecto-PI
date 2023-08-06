import { GET_VIDEOGAMES,ORDER,PAGINATE} from "../Actions/action-types";
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