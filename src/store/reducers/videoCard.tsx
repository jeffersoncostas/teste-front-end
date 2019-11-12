
export interface VideoCardState {
    cardSaved: any
}
const initialState: VideoCardState = {
    cardSaved: null
};

export enum VideoCardActionType {
    GET_CARD,
}
interface VideoCardAction {
    type: VideoCardActionType;
    cardSaved: any
}

export default function VideoCardReducer(
    state = initialState,
    action: VideoCardAction
) {
    switch (action.type) {
        case VideoCardActionType.GET_CARD:
            console.log('saved', action);
            return {
                ...state,
                cardSaved: action.cardSaved
            };

        default:
            return state;
    }
}