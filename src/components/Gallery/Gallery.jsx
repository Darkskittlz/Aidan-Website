import React from 'react';
import styled from "styled-components";
import ParticleBackground from '../../ParticleBackground';
import FooterComponent from '../Footer/Footer';
import useStyles from './styles';
import { photos } from '../constants/constants'
import ImageGallery from 'react-image-gallery';
import './gallery.css';


const SectionContainer = styled.div`
  width: 100%;
  z-index: 999;
  backdrop-filter: blur(10px);
  @media (max-width: 860px){
    width: 100%;
    display: flex; 
    justify-content: center;
  }
  `

const SectionTitle = styled.h2`
  color: white;
  text-align: center;
  margin-top: 20px;
  font-size: 70px;
  @media (max-width: 860px){
    text-align: center;
  }
`

const GridContainer = styled.div`
    opacity: 1;
    backdrop-filter: blur(10px);
    border-radius: 10px;
    margin-top: 10px;
    z-index: 999;
    /* margin-bottom: 400px; */
    display: flex; 
    justify-content: center;
    width: 100%
  `

const PhotoGridContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;

    @media (max-width: 860px){
      display: flex;
      justify-content: center;
      flex-direction: column;
      width: 100%;
    }
`



const Gallery = ({ products, onAddToCart }) => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <ParticleBackground />
      <SectionContainer><SectionTitle> Gallery </SectionTitle></SectionContainer>
      <div class="wrapper">
        <GridContainer>
          <PhotoGridContainer>
            <ImageGallery items={photos} />
          </PhotoGridContainer>
          </GridContainer>
        </div>
        <div class="push"></div>
      <div class="footer"><FooterComponent /></div>
    </main>
  );
};

export default Gallery;

