import React from 'react';
import useStyles from './styles';
import styled from "styled-components";
import ParticleBackground from '../../ParticleBackground';
import Music from '../Plugins/Music';
import FooterComponent from '../Footer/Footer';
import AidanProfile from '../../assets/Headshot-Aidan.jpeg';
import Video from '../Plugins/Video';
import './home.css';
import '../Bookings/bookings.css';

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  z-index: 999;
  border: 2px solid black;
  height: 400px;
  margin-top: 20px;
  margin-bottom: 20px;

  @media (max-width: 768px){
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: 100%;
    }
`

const Col = styled.div`
  display: flex;
  z-index: 999;
  width: 30%;
  justify-content: center;
  backdrop-filter: blur(10px);
  border-radius: 10px;
  margin-left: 10px;

  @media (max-width: 768px){
      width: 100%;
    }

  img {
    width: 77%;
    height: 400px;
    display: flex;
    align-content: center;
    border-radius: 10px;
    opacity: 1;

    @media (max-width: 768px){
      margin-top: 10px;
    }
  }
`

const Col2 = styled.div`
  display: flex;
  border-radius: 10px;
  opacity: 0.9;
  backdrop-filter: blur(10px);
  width: 68%;
  flex-direction: column;
  z-index: 999;
  height: 100%;
  @media (max-width: 860px){
      display: flex;
      flex: flex-wrap;
      width: 100%;
      justify-content: center;
    }
`

const Col2Text = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  z-index: 999;
  margin-left: 10px;
  justify-content: center;
  align-content: start;

  h1 {
    margin-top: 10px;
    text-align: center;
    text-decoration: underline;
    color: white;
  }

  h3 {
    text-align: left;
    margin-top: 5px;
    font-size: 19px;
    color: white;
  }

`

const GridContainer = styled.div`
  opacity: 0.9;
  backdrop-filter: blur(10px);
  border-radius: 10px;
  /* margin-top: 10px; */
  margin-bottom: 50px;
`

const SectionTitle = styled.h2`
  color: white;
  z-index: 999;
  text-align: center;
  margin-top: 20px;
  font-size: 70px;
`

const Grid2Container = styled.div`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  background-color: black;
`

const Banner = styled.div`
  z-index: 999;
  backdrop-filter: blur(10px);

  h1 {
    color: white;
    font-size: 100px;
    font-family: 'Dancing Scipt', sans-serif;
  }
`



const Home = ({ products, onAddToCart }) => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div id="toolbar" className={classes.toolbar} />
      <ParticleBackground />
      <div className="wrapper">
        {/* <Grid2Container>
          <Banner>
            <h1>Dance Reel</h1>
          </Banner>
        </Grid2Container> */}
        <Video />
        <Row>
          <Col>
            <img src={AidanProfile} alt="headshot" />
          </Col>
          <Col2>
            <Col2Text>
              <h1> Bio </h1>
              <h3>
                Aidan Paul is an interdisciplinary artist fusing the mediums of dance, songwriting, recording and film production.
                From Miami, Aidan resides in Little Havana, singing and dancing professionally for several South Florida venues.
                His vibrant performances embrace individuality and unique style.
              </h3>
            </Col2Text>
            <br />
            <Col2Text>
              <h3>
                Aidan's original music can be found on all streaming platforms and is a rich blend of jazz, acoustic and disco
                pop. He is adept at constructing, arranging and recording his music from conception to finished product. He has
                officially released four original songs with accompanying videos that were self-directed, receiving thousands of
                views since recently graduating with a BFA in Music Theater from Florida State University.
              </h3>
            </Col2Text>
          </Col2>
        </Row>
        <Music />
      </div>
      <div class="push"></div>
      <div class="footer"><FooterComponent /></div>
    </main>
  );
};


export default Home;

