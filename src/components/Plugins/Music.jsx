import React from 'react';
import Footer from '../Footer/Footer';
import styled from "styled-components";
import SpotifyPlayer from 'react-spotify-player';

const size = {
    width: '100%',
    height: 300,
    padding: '20px'

};

const view = 'list'; // or 'coverart'
const theme = 'black'; // or 'white'

const GridContainer = styled.div`
  opacity: 0.9;
  backdrop-filter: blur(10px);
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
`
const Music = () => {
return (
    // size may also be a plain string using the presets 'large' or 'compact'
    <GridContainer>
        <SpotifyPlayer
          uri="https://open.spotify.com/artist/2w251FvFhXVbtcc3iwmfXV?si=v6FyQF2ORQe6f4lMLVaYMw"
          size={size}
          view={view}
          theme={theme}
        />
    </GridContainer>
  );
};

export default Music;

