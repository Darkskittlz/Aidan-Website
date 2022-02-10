import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import VideoPlayer from "react-background-video-player";
import styled from "styled-components";
import video from '../../assets/takeMeThereVideo.mp4';


const VideoContainer = styled.div`
    height: 500px;
    position: relative;
    justify-content: center;
    display: flex;
    z-index: 999;

    @media (max-width: 768px){
      display: flex;
      justify-content: center;
      width: 100%;
      background-size: cover;
      margin: 0;
    }
`


class Video extends React.Component {
    render() {
        return (
            <VideoContainer>
                <VideoPlayer
                    className="video"
                    style={{ borderRadius: "10px" }}
                    src={video}
                    autoPlay={true}
                    muted={true}
                />
            </VideoContainer>
        );
    }
}

export default Video;


