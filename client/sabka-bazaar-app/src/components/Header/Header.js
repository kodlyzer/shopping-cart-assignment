import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MenuOutlined, ShoppingCartOutlined } from '@ant-design/icons';

import Logo from '../../images/logo_2x.png';

import { HeaderContainer, Nav, LinksWrapper, ListHolder } from './Header.styled';

const Header = () => {
  return (
    <HeaderContainer>
      <Nav>
        <img src={Logo} alt='header logo' height={70} />
        <LinksWrapper>
          <ListHolder>
            <li>
              <Link to='/login'>SignIn</Link>
            </li>
            <li>
              <Link to='/signup'>Register</Link>
            </li>
          </ListHolder>
          <ListHolder>
            <li>
              <Link to='/home'>Home</Link>
            </li>
            <li>
              <Link to='/products'>Products</Link>
            </li>
            <li>
              <Link to='/cart'>Cart</Link>
            </li>
          </ListHolder>
        </LinksWrapper>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
