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
            }
        default:
            return state;
    }
}