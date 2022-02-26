import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import styled from "styled-components";
import { mobile } from '../responsive';
import { LinkTwoTone, YouTube } from '@material-ui/icons';
import { Facebook, Instagram } from '@mui/icons-material';

import logo from '../../assets/sunLogo.png';
import useStyles from './styles';

const NavBarCenter = styled.div`
  display: flex;
  width: 100%;
  right: 0;
`

const SocialContainer = styled.div`
    display: flex;
    ${mobile({ justifyContent: 'center' })}
`;

const SocialIcon = styled.div`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    //This is saying take my props, look inside (props.color) and find color. 
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 15px;
    filter: invert(1);

    @media (max-width: 860px){
      display: none;    
    }


`;

const NavBarRight = styled.div`
  display: flex;
  width: 400px;
  h2 {
    font-size: 20px;
    display: flex;
    align-items: center;
    margin-top: 10px;
    color: white;

    @media (max-width: 860px){
        font-size: 15px;
        margin-left: 10px;
      }
  }
`


const PrimarySearchAppBar = ({ totalItems }) => {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const classes = useStyles();
  const location = useLocation();

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);

  const mobileMenuId = 'primary-search-account-menu-mobile';

  const renderMobileMenu = (
    <Menu anchorEl={mobileMoreAnchorEl} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} id={mobileMenuId} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right' }} open={isMobileMenuOpen} onClose={handleMobileMenuClose}>
      <MenuItem>
        <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
          <Badge badgeContent={totalItems} color="secondary">
            <ShoppingCart />
          </Badge>
        </IconButton>
        <p>Cart</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
            <img src={logo} alt="commerce.js" height="70px" className={classes.image} />
          </Typography>
          <NavBarCenter>
            <SocialContainer>
              <SocialIcon color="3B5999">
                <Facebook onClick={() => window.open('https://www.facebook.com/ItsAidanPaul', '_blank')} />
              </SocialIcon>
              <SocialIcon color="E4405F" >
                <Instagram onClick={() => window.open('https://www.instagram.com/aidanpaulmusic/', '_blank')} />
              </SocialIcon>
              <SocialIcon color="55ACEE" >
                <YouTube onClick={() => window.open('https://www.youtube.com/channel/UCNhe2SJj5CVBkdtKWSj8HEw?view_as=subscriber', '_blank')} />
              </SocialIcon>
              <SocialIcon color="000000">
                <LinkTwoTone onClick={() => window.open('https://linktr.ee/APMedia', '_blank')} />
              </SocialIcon>
            </SocialContainer>
          </NavBarCenter>
          <NavBarRight>
            <Typography component={Link} to="/updates" variant="h6" className={classes.title} color="inherit">
              <h2>Updates</h2>
            </Typography>
            <Typography component={Link} to="/bookings" variant="h6" className={classes.title} color="inherit">
              <h2>Bookings</h2>
            </Typography>
            <Typography component={Link} to="/gallery" variant="h6" className={classes.title} color="inherit">
              <h2>Shop</h2>
            </Typography>
          </NavBarRight>

          <div className={classes.grow} />

          {location.pathname === '/gallery' && (
            <div className={classes.button}>
              <IconButton component={Link} to="/cart" aria-label="Show cart items" color="white">
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </>
  );
};

export default PrimarySearchAppBar;
