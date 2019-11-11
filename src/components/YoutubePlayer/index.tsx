import React, { useEffect } from 'react';
import YouTubePlayer from 'youtube-player';
import styled from 'styled-components';

const VideoPlayer = styled.div`
    width: 100%;
    

`


export default function YoutubePlayer(props: any) {

    const { videoId } = props;
    useEffect(() => {
        onYouTubeIframeAPIReady();
    }, []);

    function onYouTubeIframeAPIReady() {
        const player = YouTubePlayer('video-player');
        player.loadVideoById(videoId);



    }
    return <VideoPlayer id="video-player" />
}
