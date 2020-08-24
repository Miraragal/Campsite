import { createStore, combineReducers, applyMiddleware } from 'redux'; 
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { CampsitesReducer} from './campsites';
import { CommentsReducer} from './comments';
import { PartnersReducer} from './partners';
import { PromotionsReducer} from './promotions';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            campsites: CampsitesReducer,
            comments: CommentsReducer,
            partners: PartnersReducer,
            promotions: PromotionsReducer
        }),

        applyMiddleware(thunk, logger)
    );

    return store;
};

