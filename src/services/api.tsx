import axios from "axios";
import {
    SearchActionType
} from "../store/reducers/search";
import { VideoCardActionType } from "../store/reducers/videoCard";
import { Dispatch } from "redux";

const API_KEY = "AIzaSyB97m_XBbWogjaUjsqiyAYHL0rFU6iA8Mk"


export function getSearchData(searchTerm: any, pageToken?: string) {
    console.log("searchterm ", searchTerm)
    return (dispatch: Dispatch) => {
        axios.get(`https://www.googleapis.com/youtube/v3/search?part=id,snippet&q=${searchTerm}&key=${API_KEY}&maxResults=6&type=video&${pageToken ? "pageToken=" + pageToken : ""}`)
            .then(res => {
                console.log(res);
                dispatch({
                    type: SearchActionType.ON_SEARCH_RESULT,
                    searchResult: res.data
                })
            });
    };
}

export function getVideoData(videoId: any) {

    return (dispatch: Dispatch) => {
        axios.get(
            `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=snippet,statistics&key=${API_KEY}`
        ).then(res => {
            console.log(res)
            dispatch({
                type: VideoCardActionType.GET_CARD,
                cardSaved: res.data
            })
        })
    }
}