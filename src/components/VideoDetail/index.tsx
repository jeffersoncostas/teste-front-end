import React from 'react'
import { Typography } from '@material-ui/core';
import YoutubePlayer from '../YoutubePlayer';


export default function VideoDetail(props: any) {

    console.log(props.data);
    const { title } = props.data.snippet;
    return (

        <>
            <Typography gutterBottom variant="h5" component="h2">
                {title}
            </Typography>

            <YoutubePlayer videoId={props.data.id} />
        </>


    )
}
