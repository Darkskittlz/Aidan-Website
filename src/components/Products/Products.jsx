import React from 'react';
import Grid from '@material-ui/core/Grid';
import Product from "./Product/Product";
import useStyles from './styles';
import styled from "styled-components";
import ParticleBackground from '../../ParticleBackground';
import FooterComponent from '../Footer/Footer';
import './products.css'


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
  margin-bottom: 50px;
`

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;

  button {
    padding: 10px;
    background-color: #f012dd;
    border-radius: 10px;
  }

  a {
    text-decoration: none;
  }
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

  if (!products.length) return <p>Loading...</p>;


  return (
    <main className={classes.content}>
      <div id="toolbar" className={classes.toolbar} />
      <ParticleBackground />
      <div class="wrapper">
        <GridContainer>
          <SectionTitle> Sticky Art </SectionTitle>
          <Container>
            <a href="https://spaces.chec.io/38902"><button>Store</button></a>
          </Container>
          <Grid container justify="center" spacing={2}>
            {products.map((product) => (
              <Grid key={product.id} item xs={12} sm={7} md={5} lg={4}>
                <Product product={product} onAddToCart={onAddToCart} />
              </Grid>
            ))}
          </Grid>
        </GridContainer>
      </div>
      <div class="push"></div>
      <div class="footer"><FooterComponent /></div>
    </main>
  );
};

export default Products;

