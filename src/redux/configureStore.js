import { createStore, combineReducers, applyMiddleware } from 'redux'; 
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { CampsitesReducer} from './campsites';
import { CommentsReducer} from './comments';
import { PartnersReducer} from './partners';
import { PromotionsReducer} from './promotions';
import{ createForms} from 'react-redux-form';
import {InitialFeedback} from './forms';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            campsites: CampsitesReducer,
            comments: CommentsReducer,
            partners: PartnersReducer,
            promotions: PromotionsReducer,
            ...createForms({
                feedbackForm: InitialFeedback
            })
        }),

        applyMiddleware(thunk, logger)
    );

    return store;
};

