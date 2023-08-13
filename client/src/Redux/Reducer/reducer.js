import { GET_VIDEOGAMES, PAGINATE,ORDER , GET_VIDEOGAMES_ID,CLEAR, GET_VIDEOGAMES_NAME, POST_VIDEOGAMES, GET_VIDEOGAMES_GENRES, FILTER_GENRES, FILTER_PLATFORMS} from "../Actions/action-types";

let initialState={
    allVideoGames:[],
    allVideoGamesBackUp:[],
    filterBackUp:[],
    gameDetail:[],
    gameName:[],
    gameGenres:[],
    gamePlatforms:[],
    filterGenres:[],
    currentPage:0,
};

function rootReducer(state=initialState,action){
    const ITEMS_PER_PAGE=15;
    switch (action.type) {

        case GET_VIDEOGAMES:
            const gamePlatforms = new Set();
           
            action.payload.forEach(game=> {
             
                if (Number.isInteger(game.id)){
                    game.platforms.forEach((platforms)=>{
                        if (platforms.platform.name){
                            gamePlatforms.add(platforms.platform.name)
                        }
                    })
                }

                
            });
            return{
                ...state,
                allVideoGames:[...action.payload].splice(0,ITEMS_PER_PAGE),
                allVideoGamesBackUp:action.payload,
                gamePlatforms:gamePlatforms,
                filterBackUp:action.payload
                
            }
        
        case GET_VIDEOGAMES_GENRES:
            const genresGame=[]
            action.payload?.forEach(genres=> {
                genresGame.push(genres.name)
            });
            return{
                ...state,
                gameGenres:genresGame
            }
           
        case GET_VIDEOGAMES_ID:
            return {
                ...state,
                gameDetail:action.payload
            }

        case GET_VIDEOGAMES_NAME:
            return{
                ...state,
                gameName:action.payload
            }

        case POST_VIDEOGAMES:
            return{
                ...state
            }

        case PAGINATE:
            const next_page=state.currentPage + 1;
            const prev_page=state.currentPage - 1;
            const firstIndex = action.payload ==="next" ? next_page * ITEMS_PER_PAGE : prev_page * ITEMS_PER_PAGE;
            
            if (action.payload==="next" && firstIndex >= state.allVideoGamesBackUp.length){
                return {...state}
            }
            else if (action.payload ==="prev" && prev_page < 0 ){
                return {...state}
            }
            return({
                ...state,
                allVideoGames:[...state.allVideoGamesBackUp].splice(firstIndex,ITEMS_PER_PAGE),
                currentPage: action.payload ==="next" ? next_page : prev_page,
            })

        case ORDER:
            if (action.payload === "az"){
                const allVideoGamesOrder = [...state.allVideoGamesBackUp].sort((prev,next)=>{
                    if (prev.name>next.name){
                        return 1;
                    }
                    if(prev.name<next.name){
                        return -1;
                    }
                    return 0;
                })
                return{
                    ...state,
                    allVideoGames:[...allVideoGamesOrder].splice(0,ITEMS_PER_PAGE),
                    allVideoGamesBackUp:allVideoGamesOrder,
                    currentPage:0
                }
            }else if (action.payload === "za"){
                const allVideoGamesOrder = [...state.allVideoGamesBackUp].sort((prev,next)=>{
                    if (prev.name>next.name){
                        return -1;
                    }
                    if(prev.name<next.name){
                        return 1;
                    }
                    return 0;
                })
                return{
                    ...state,
                    allVideoGames:[...allVideoGamesOrder].splice(0,ITEMS_PER_PAGE),
                    allVideoGamesBackUp:allVideoGamesOrder,
                    currentPage:0
                }

            }
        case FILTER_GENRES:
            const filterVideoGames=[];
            [...state.filterBackUp].forEach(game=>game.genres.forEach(genre=>{if (genre.name===action.payload){filterVideoGames.push(game)}}))
            
            return{
                ...state,
                filterGenres:filterVideoGames,
                allVideoGames:[...filterVideoGames].splice(0,ITEMS_PER_PAGE)
            }
        case FILTER_PLATFORMS:
            const filterGames=[];
            [...state.filterBackUp].forEach(game=>{
                if(Number.isInteger(game.id)){
              
                    game.platforms.forEach(plat=>{
                        console.log(plat)
                        if (plat.platform.name===action.payload){
                            filterGames.push(game)
                        }
                    })
                }else{
                    game.platforms.forEach(platform=>{
                        if (platform===action.payload){
                            filterGames.push(game)
                        }
                    })
                }
            })
            return{
                ...state,
                allVideoGames:[...filterGames].splice(0,ITEMS_PER_PAGE)
            }

        case CLEAR:
            return{
                ...state,
                gameDetail:action.payload,
                gameName:[]
            }


        default:
            return state
        
    }
    
}
export default rootReducer;