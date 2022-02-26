import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import VideoPlayer from "react-background-video-player";
import styled from "styled-components";
import video from '../../assets/DanceReel.mp4';

const Wrapper = styled.div`
    width: 100%;
    justify-content: center;
    display: flex;
    @media (max-width: 768px){
        height: 70%;
    }
`


const VideoContainer = styled.div`
    height: 500px;
    position: relative;
    justify-content: center;
    display: flex;
    z-index: 999;
    width: 80%;
    margin-top: 20px;
    object-fit: cover;

    @media (max-width: 768px){
      display: flex;
      justify-content: center;
      width: 95%;
      margin-top: 30px;
      background-size: cover;
      margin: 0;
    }
`


class Video extends React.Component {
    render() {
        return (
            <Wrapper>
                <VideoContainer>
                    <VideoPlayer
                        className="video"
                        style={{ borderRadius: "10px" }}
                        src={video}
                        autoPlay={true}
                        muted={true}
                    />
                </VideoContainer>
            </Wrapper>
        );
    }
}

export default Video;


