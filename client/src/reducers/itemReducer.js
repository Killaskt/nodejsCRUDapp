import {GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING} from '../actions/types'
import {  } from "../actions/itemActions";

const intialState = {
    items: [
        //got rid of static data
    ],
    loading: false
    //just incase data takes a minute to come 
}

export default function(state = intialState, action) {
    switch(action.type) {
        case GET_ITEMS:
            return {
                ...state, // ... is the spread operator
                items: action.payload, //get items from backend
                loading: false // after we get items, we want to set the loading back to false
            };
        case DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item._id !== action.payload)
            };
        case ADD_ITEM:
            return {
                ...state,
                items: [action.payload, ...state.items] //we use the ... (spread operator) because we cant directly mutate the 'items', so this makes a copy of it
            };
        case ITEMS_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}