export interface SearchState {
    isSearching?: boolean;
    searchTerm?: string;
}

const initialState: SearchState = {
    isSearching: false,
    searchTerm: ''
};

export enum SearchActionType {
    ON_SEARCH
}
interface SearchAction {
    type: SearchActionType;
    searchTerm: string;
}

export default function SearchReducer(
    state = initialState,
    action: SearchAction
) {
    switch (action.type) {
        case SearchActionType.ON_SEARCH:
            console.log('mudei');
            return {
                ...state,
                isSearching: true,
                searchTerm: action.searchTerm
            };
        default:
            return state;
    }
}
