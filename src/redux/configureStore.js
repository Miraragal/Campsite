import { createStore, combineReducers } from 'redux'; 
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
        })
    );

    return store;
};

