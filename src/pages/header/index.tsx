import React from 'react';
import { Button, styled } from '@mui/material';
type Props = {};
const NavBar = styled('nav')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem',
  backgroundColor: '#f0f0f0',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
});

const NavItem = styled('li')({
  listStyle: 'none',
  margin: '0 1rem',
  '& a': {
    textDecoration: 'none',
    color: '#333',
    fontWeight: 'bold',
  },
});

const SignUpButton = styled(Button)({
  backgroundColor: 'red',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#0056b3',
  },
});

const Header = () => {
  return (
    <NavBar>
      <NavItem>
        <a href='/'>Andes</a>
      </NavItem>
      <NavItem>
        <a href='#example'>Documentation</a>
      </NavItem>
      <NavItem>
        <a href='#example'>Example</a>
      </NavItem>
      <NavItem>
        <a href='/LogIn'>Log In</a>
      </NavItem>
     

      <SignUpButton variant="contained">Get Started</SignUpButton>
    </NavBar>
    
  );
};

export default Header;

