import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import styled from "styled-components";

import logo from '../../assets/waterDropLogo.png';
import useStyles from './styles';



const NavBarCenter = styled.div`
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
            <img src={logo} alt="commerce.js" height="55px" className={classes.image} />
          </Typography>
          <NavBarCenter>
            <Typography component={Link} to="/updates" variant="h6" className={classes.title} color="inherit">
              <h2>Updates</h2>
            </Typography>
            <Typography component={Link} to="/bookings" variant="h6" className={classes.title} color="inherit">
              <h2>Bookings</h2>
            </Typography>
            <Typography component={Link} to="/gallery" variant="h6" className={classes.title} color="inherit">
              <h2>Gallery</h2>
            </Typography>
          </NavBarCenter>

          <div className={classes.grow} />

          {location.pathname === '/' && (
            <div className={classes.button}>
              <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
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
