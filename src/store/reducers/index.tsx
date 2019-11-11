import { combineReducers } from 'redux';

import search, { SearchState } from './search';
import videoCard, { VideoCardState } from './videoCard';

export interface States {
    search: SearchState;
    videoCard: VideoCardState
}

export default combineReducers({
    search,
    videoCard
});
