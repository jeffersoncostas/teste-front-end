import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { States } from '../../store/reducers';
import VideoDetail from '../../components/VideoDetail';
import { getVideoData } from '../../services/api';
import { useParams } from 'react-router-dom';
import { Background } from '../../styled';
import { Container, IconButton, AppBar, Typography, CircularProgress, Toolbar } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import styled from 'styled-components';


const ContainerStyled = styled(Container)`
    height: 100%;
    padding-top: 40px;
    &.MuiContainer-root{
        padding-left: 100px;

    }
    .custom-app-bar{
        .MuiButtonBase-root{
            position: absolute;
            left: 20px;
            top: 33px;
        }
    }

`


export default function Detail() {
    const [isloading, setIsLoading] = useState(true);
    const { videoid } = useParams();
    const dispatch = useDispatch();
    const videoCardState = useSelector((state: States) => state.videoCard);

    useEffect(() => {

        console.log(videoid)
        dispatch(getVideoData(videoid));

    }, [])
    useEffect(() => {

        console.log(videoCardState.cardSaved)
        if (videoCardState.cardSaved) {
            setIsLoading(false)
        }

    }, [videoCardState])

    // { videoCardState.cardSaved.items[0].snippet.title }
    return (
        <Background>
            <ContainerStyled>
                {isloading ? <CircularProgress /> : (<>
                    <div className="custom-app-bar">
                        <IconButton> <ArrowBack /></IconButton>
                    </div>
                    <VideoDetail data={videoCardState.cardSaved.items[0]} /> </>)
                }


            </ContainerStyled>

        </Background>
    )
};


