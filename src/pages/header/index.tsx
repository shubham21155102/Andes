import React from 'react';
import { Button, styled } from '@mui/material';
import Link from 'next/link';
type Props = {};
import { Roboto_Flex } from 'next/font/google';
const roboto=Roboto_Flex({
      weight:'100',
      subsets: ['latin']
})
const NavBar = styled('nav')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem',
  backgroundColor: 'black',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
});

const NavItem = styled('li')({
  listStyle: 'none',
  margin: '0 1rem',
  '& a': {
    textDecoration: 'none',
    // color: '#333',
    color:'red',
    fontWeight: 'bold',
  },
});

const SignUpButton = styled(Button)({
  backgroundColor: 'red',
  // color: '#fff',
  '&:hover': {
    backgroundColor: '#0056b3',
  },
});

const Header = () => {
  return (
    <NavBar className={roboto.className}>
      <NavItem>
        <Link href={{pathname:'/'}}>Andes</Link>
      </NavItem>
      <NavItem>
      <Link href="#example">Documentation</Link>
      </NavItem>
      <NavItem>
      <Link href="#example">Example</Link>
      </NavItem>
      <NavItem>
      <Link href={{pathname:'/LogIn'}}>Log In</Link>
      </NavItem>
     
      {/* <Button>Hii</Button> */}
      <SignUpButton variant="contained" style={{backgroundColor:'red'}}>Get Started</SignUpButton>
    </NavBar>
    
  );
};

export default Header;

