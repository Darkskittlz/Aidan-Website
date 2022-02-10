import React from 'react';
import Grid from '@material-ui/core/Grid';
import Product from "./Product/Product";
import useStyles from './styles';
import styled from "styled-components";
import ParticleBackground from '../../ParticleBackground';
import Music from '../Plugins/Music';
import FooterComponent from '../Footer/Footer';
import AidanProfile from '../../assets/AidanProfile.jpg';
import Video from '../Plugins/Video';
import './products.css'

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  z-index: 999;
  border: 2px solid black;
  height: 400px;
  margin-top: 20px;
  margin-bottom: 100px;



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
  width: 50%;

  @media (max-width: 768px){
      width: 100%;
    }

  img {
    width: 100%;
    display: flex;
    align-content: center;
    justify-content: start;
    border-radius: 10px;
    opacity: 1;
    backdrop-filter: blur(10px);

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
  width: 48%;
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
  margin-top: 10px;
  margin-bottom: 50px;
`

const SectionTitle = styled.h2`
  color: white;
  z-index: 999;
  text-align: center;
  margin-top: 20px;
  font-size: 70px;
`

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();


  return (
    <main className={classes.content}>
      <div id="toolbar" className={classes.toolbar} />
      <ParticleBackground />
      <div class="wrapper">
        <Video />
        <Row>
          <Col>
            <img src={AidanProfile} alt="headshot" />
          </Col>
          <Col2>
            <Col2Text>
              <h1> Bio </h1>
              <h3>
                Eccentric Miami artist Aidan Paul Neal is manifesting a vibrant career in the tropics
                of South Florida as he draws influence from every spectrum of the arts. As a trained
                dancer he creatively fuses all the facets of a true performing artist. When it comes to
                his own sound, AP derives inspiration from the likes of Tom Misch, Justin Timberlake,
                Bruno Mars, and The Miss Ella Fitzgerald.
              </h3>
            </Col2Text>
            <br />
            <Col2Text>
              <h3>
                Born with his feet in the sand, Aidan Paul also has his heart in Santa Cruz California,
                where he grew up as a child. "I am at peace whenever I find myself exploring the Redwood
                forests of Felton, or climbing the giant banyan trees in Miami-Dade.
              </h3>
            </Col2Text>
          </Col2>
        </Row>
        <Music />
        <GridContainer>
          <SectionTitle> Sticky Art </SectionTitle>
          <Grid container justify="center" spacing={2}>
            {products.map((product) => (
              <Grid key={product.id} item xs={12} sm={7} md={5} lg={4}>
                <Product product={product} onAddToCart={onAddToCart} />
              </Grid>
            ))}
          </Grid>
          <br />
          <br />
          <br />
        </GridContainer>
      </div>
      <div class="push"></div>
      <div class="footer"><FooterComponent /></div>
    </main>
  );
};

export default Products;

