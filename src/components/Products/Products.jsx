import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import Product from "./Product/Product";
import useStyles from './styles';
import styled from "styled-components";
import ParticleBackground from '../../ParticleBackground';
import Music from '../Plugins/Music';
import FooterComponent from '../Footer/Footer';

const Row = styled.div`
  display: flex;
  flex-direction: row;
  z-index: 999;
  border: 2px solid black;


`

const Col = styled.div`
  display: flex;
  z-index: 999;

  img {
    width: 600px;
    border-radius: 10px;
    opacity: 1;
    backdrop-filter: blur(10px);
  }
`

const Col2 = styled.div`
  display: flex;
  border-radius: 10px;
  margin-left: 20px;
  opacity: 0.9;
  backdrop-filter: blur(10px);
  width: 60%;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  z-index: 999;
`

const Col2Text = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  z-index: 999;
  justify-content: center;
  align-content: center;

  h1 {
    margin-bottom: 25px;
    text-align: center;
    text-decoration: underline;
    color: white;
  }

  h3 {
    text-align: left;
    margin: 20px;
    font-size: 25px;
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
      <div className={classes.toolbar} />
      <ParticleBackground />
      <Row>
        <Col>
          <img src="https://static.wixstatic.com/media/e80a20_be9ec5fdac3a4e51b7d4ee4c28bfbece~mv2.jpg/v1/fill/w_539,h_700,fp_0.55_0.40,q_85,usm_0.66_1.00_0.01/e80a20_be9ec5fdac3a4e51b7d4ee4c28bfbece~mv2.webp" />
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
        <Grid container justify="center" spacing={4}>
          {products.map((product) => (
            <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
              <Product product={product} onAddToCart={onAddToCart} />
            </Grid>
          ))}
        </Grid>
        <br />
        <br />
        <br />
      </GridContainer>
      <FooterComponent />
    </main>
  );
};

export default Products;

