// this file makes requests to the backend
import axios from 'axios' //http client
import {GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING} from './types'

export const getItems = () => dispatch => {
    dispatch(setItemsLoading());
    axios.get('/api/items') //we can simply do this because of the proxy set in the local package.json
        .then(res =>
            dispatch({
                type: GET_ITEMS,
                payload: res.data
            })
         )
};

export const addItem = item => dispatch => {

    axios.post('/api/items', item)
    .then(res => 
        dispatch({
            type: ADD_ITEM,
            payload: res.data // posting item to the items endpoint
        })
    )

};

export const deleteItem = (id) => dispatch => {
    axios.delete(`/api/items/${id}`)
    .then(res => dispatch({
        type: DELETE_ITEM,
        payload: id
    })
    );
};


export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    }
}