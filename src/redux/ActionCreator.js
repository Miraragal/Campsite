import * as ActionTypes from './ActionTypes';

export const addComment= (campsiteId, rating, author, text)=> ({
    type: ActionTypes.ADD_COMMENT,
    payload:{
        campsiteId,  // ES6 short syntax for campsiteId: campsiteId
        rating, 
        author,
        text

    }
})