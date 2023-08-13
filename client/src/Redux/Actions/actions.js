import { GET_VIDEOGAMES,ORDER,PAGINATE,GET_VIDEOGAMES_ID,GET_VIDEOGAMES_NAME,POST_VIDEOGAMES,GET_VIDEOGAMES_GENRES,FILTER_GENRES,FILTER_PLATFORMS,CLEAR} from "../Actions/action-types";
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
            console.log(error)
        }
    }
}

export function getVideoGamesId(id){
    return async function(dispatch){
        try {
            const response = await axios.get(`http://localhost:3001/videogames/${id}`)
            // console.log(response.data)
            dispatch({
                type:GET_VIDEOGAMES_ID,
                payload:response.data
            })
           
        } catch (error) {
            console.log(error)
        }

    }
}

export function getVideoGamesName(name){
    return async function (dispatch){
        try {
            
            const response=await axios.get(`http://localhost:3001/videogames/name?name=${name}`)
         
            dispatch({
                type:GET_VIDEOGAMES_NAME,
                payload:response.data
            })
        } catch (error) {
            console.log(error.message)
        }
    }
}
export function getVideoGamesGenres(){
    return async function (dispatch){
        try {
            const response=await axios.get("http://localhost:3001/genres")
            dispatch({
                type:GET_VIDEOGAMES_GENRES,
                payload:response.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}
export function postVideoGames(body){
    return async function(dispatch){
        console.log(body)
        try {
            
            const response=await axios.post("http://localhost:3001/videogames/",body)
            dispatch({
                type:POST_VIDEOGAMES,
                payload:response.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}
export function hoja (direction){
    return async function (dispatch){
        try {
            dispatch({
                type:PAGINATE,
                payload:direction
            })
        } catch (error) {
            console.log(error.message)
        }
    }
}
export function orderName (direction){
    return async function (dispatch){
        try {
            dispatch({
                type:ORDER,
                payload:direction
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
export function filterGenres(genres){
    return async function(dispatch){
        try {
            dispatch({
                type:FILTER_GENRES,
                payload:genres
            })
        } catch (error) {
            console.log(error)
        }
    }
}
export function filterPlatforms(platform){
    return async function (dispatch){
        try {
            dispatch({
                type:FILTER_PLATFORMS,
                payload:platform
            })
        } catch (error) {
            console.log(error)
        }
    }
}