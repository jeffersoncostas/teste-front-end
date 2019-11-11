import React from 'react'
import { Card, CardActionArea, CardMedia, Typography, CardContent, CardActions, Button } from '@material-ui/core'
import styled from 'styled-components'
import { Link, useHistory } from 'react-router-dom'
import { utilProps } from '../../styled/styledMixins'
import { useDispatch } from 'react-redux'
import { VideoCardActionType } from '../../store/reducers/videoCard'

const Container = styled.div`
    height: 100%;
    .MuiCard-root{
        height: 100%;

        .MuiCardContent-root{
            padding-bottom: 0;
        }
    }
    .MuiCardActionArea-root{
        height: 90%;
        .MuiCardMedia-root{
            height: 50%;
        }
        .MuiCardContent-root{
            height: 50%;
        }
    }
        .MuiCardActions-root{
            height: 10%;
        }
`
const TypographyStyled = styled(Typography) <any>`
    overflow: hidden;

`
const TypographyTitleStyled = styled(Typography) <any>`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

`


export default function VideoCard(props: any) {
    console.log(props);
    let history = useHistory();
    const dispatch = useDispatch();

    const searchType = props.videoData.id.kind;
    const videoId = props.videoData.id.videoId;
    const videoThumbnailUrl = props.videoData.snippet.thumbnails.high.url;
    const videoTitle = props.videoData.snippet.title;
    const videoDescription = props.videoData.snippet.description;
    const channelTitle = props.videoData.snippet.channelTitle;

    function onClickCard() {
        console.log()

        history.push(`/detail/${videoId}`)

    }
    return (

        <Container>
            <Card >

                <CardActionArea component="a" onClick={onClickCard}>
                    <CardMedia
                        component="img"
                        alt={videoTitle}
                        height="140"
                        image={videoThumbnailUrl}
                        title={videoTitle}
                    />
                    <CardContent>
                        <TypographyTitleStyled gutterBottom variant="h5" component="h2">
                            {videoTitle}
                        </TypographyTitleStyled>
                        {searchType == "youtube#video" ? <Typography variant="subtitle1" component="h4">
                            {channelTitle}
                        </Typography> : null}

                        <TypographyStyled variant="body2" color="textSecondary" component="p">
                            {videoDescription}
                        </TypographyStyled>
                    </CardContent>
                </CardActionArea>

                <CardActions>
                    <Button size="small" onClick={onClickCard} >
                        Detalhes do Video
                    </Button>
                </CardActions>
            </Card>
        </Container>
    )
}
