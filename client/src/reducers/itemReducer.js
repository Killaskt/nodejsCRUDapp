import { v4 as uuid } from "uuid";
import {GET_ITEMS, ADD_ITEM, DELETE_ITEM} from '../actions/types'
import {  } from "../actions/itemActions";

const intialState = {
    items: [
        {
            id: uuid(),
            name: "Soy"
        }, 
        {
            id: uuid(),
            name: 'Milk'
        }, 
        {
            id: uuid(),
            name: "Celery"
        }, 
        {
            id: uuid(),
            name: "Potatas"
        }, 
    ]
}

export default function(state = intialState, action) {
    switch(action.type) {
        case GET_ITEMS:
            return {
                ...state // ... is the spread operator
            };
        case DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            };
        case ADD_ITEM:
            return {
                ...state,
                items: [action.payload, ...state.items] //we use the ... (spread operator) because we cant directly mutate the 'items', so this makes a copy of it

            };
        default:
            return state;
    }
}