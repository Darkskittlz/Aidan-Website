import React from 'react';
import styled from "styled-components";
import ParticleBackground from '../../ParticleBackground';
import FooterComponent from '../Footer/Footer';
import useStyles from './styles';
import Grid from '@material-ui/core/Grid';
import Product from "../Products/Product/Product";


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

const Gallery = ({ products, onAddToCart }) => {
  const classes = useStyles();
return (
  <main className={classes.content}>
  <div className={classes.toolbar} />
    <ParticleBackground />
    <GridContainer>
        <SectionTitle> Sticky Art </SectionTitle>
        <Grid container justify="center" spacing={4}>
          {/* {products.map((product) => (
            <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
              <Product product={product} onAddToCart={onAddToCart} />
            </Grid>
          ))} */}
        </Grid>
    </GridContainer>
    <FooterComponent />
  </main>
  );
};

export default Gallery;

