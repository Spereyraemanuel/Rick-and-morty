import { ADD_FAV, REMOVE_FAV } from "./actions/actions-type";

const initialState = {
    myFavorites:[]
}; 


export default function rootReducer(state=initialState, {type,payload}){
    switch (type) {
        case ADD_FAV:
          return{
           ...state,
           myFavorites: [...state.myFavorites, payload]
        };
        case REMOVE_FAV:
            const newFavorites = state.myFavorites.filter((character) => character.id !== payload)
           return{
            ...state,
            myFavorites: newFavorites
           };
        
           default:
            return state;
    }
   
}