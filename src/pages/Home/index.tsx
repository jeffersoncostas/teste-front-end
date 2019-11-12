import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Container, GridList, GridListTile, CircularProgress } from '@material-ui/core/';
import Search from '../../components/Search';
import { Background } from '../../styled';
import { useSelector, useDispatch } from 'react-redux';
import { States } from '../../store/reducers';
import { ContainerProps } from '@material-ui/core/Container';
import VideoCard from '../../components/VideoCard';
import InfiniteScroll from 'react-infinite-scroll-component';
import { getSearchData } from '../../services/api';
import { SearchActionType } from '../../store/reducers/search';
import VideoDetail from '../../components/VideoDetail';


interface IContainerStyled extends ContainerProps {
    isSearching: any
}


const ContainerStyled = styled(Container) <IContainerStyled>`
    padding-top: 40px;
    height: ${props => props.isSearching ? "10%" : "100%"};
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 400ms;
    position: absolute;
    z-index: 2;
    max-width: 100% !important;
    .MuiPaper-root{
        
    }
    
    
`;
const ContainerCardsStyled = styled(Container)`

    .MuiGridList-root{
        justify-content: center;
        padding-top: 140px;
        padding-bottom: 20px;
    }

    .MuiGridListTile-root{
        width: 400px !important;
        &>div{
            overflow: visible;
        }
    }
`
const initialStateVideos: any[] = [];
export default function Home() {
    const searchState = useSelector((state: States) => state.search);
    const dispatch = useDispatch();
    const [videos, setVideos]: any[] = useState(initialStateVideos);
    const [hasMore, setHasMore] = useState(false);

    const [term, setTerm] = useState('');

    useEffect(() => {

        if (searchState.searchResult) {
            console.log(searchState.searchResult)
            setVideos([
                ...videos,
                ...searchState.searchResult.items
            ])
            if (searchState.searchResult.nextPageToken) {
                setHasMore(true);
            }
        }

    }, [searchState])


    function getNextPageVideos() {

        dispatch(getSearchData(searchState.searchTerm, searchState.searchResult.nextPageToken))


    }

    function onClickSearch() {
        if (searchState.isSearching) {

            setVideos(initialStateVideos);
            dispatch({ type: SearchActionType.DELETE })
        }
        dispatch(getSearchData(term));
        dispatch({ type: SearchActionType.ON_SEARCH, searchTerm: term })
    }

    useEffect(() => {

        console.log(videos);

    }, [videos])




    return (

        <Background>
            <ContainerStyled isSearching={searchState.isSearching} >
                <Search
                    placeholder="Pesquisar"
                    onClickSearch={onClickSearch}
                    term={term}
                    setTerm={setTerm} />
            </ContainerStyled>

            {searchState.searchResult ?
                <ContainerCardsStyled >
                    <InfiniteScroll
                        dataLength={videos.length}
                        next={getNextPageVideos}
                        hasMore={hasMore}
                        loader={<CircularProgress />}
                        style={{ overflow: 'none' }}>
                        <GridList cellHeight={364} spacing={20} >


                            {videos.map((data: any) => {
                                return (<GridListTile>
                                    <VideoCard videoData={data} key={data.id.videoId} />
                                </GridListTile>)
                            })}


                        </GridList>
                    </InfiniteScroll>
                </ContainerCardsStyled>

                : null}




        </Background >
    );
};
