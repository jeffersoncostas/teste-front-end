import { combineReducers } from 'redux';

import search, { SearchState } from './search';

export interface States {
    search: SearchState;
}

export default combineReducers({
    search
});
