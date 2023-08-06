import { GET_VIDEOGAMES, PAGINATE,ORDER} from "../Actions/action-types";

let initialState={
    allVideoGames:[],
    allVideoGamesBackUp:[],
    currentPage:0
};

function rootReducer(state=initialState,action){
    const ITEMS_PER_PAGE=15;
    switch (action.type) {
        case GET_VIDEOGAMES:
            return{
                ...state,
                allVideoGames:[...action.payload].splice(0,ITEMS_PER_PAGE),
                allVideoGamesBackUp:action.payload
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

        default:
            return state
        
    }
    
}
export default rootReducer;