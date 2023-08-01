import { Button, styled, Box, Typography } from '@mui/material';
import { kMaxLength } from 'buffer';
import React from 'react';
import { Roboto, Roboto_Flex } from "@next/font/google";

const roboto = Roboto_Flex({
  weight: '700',
  subsets: ['latin']
});

const SignUpButton = styled(Button)({
  // ...styles
});

const LandingPage = () => {
  const text = "Extract what you need from your documents.";
  const texts = "Save engineering time with Andes. Unleash the power of AI in your applications! Connect with leading LLMs, enhance your application's chat and text extraction capabilities.";
  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh">
      {/* Add Google Fonts */}
      {/* <GoogleFont href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@700&subset=latin&display=swap" rel="stylesheet" /> */}
      <Typography variant='h6' alignItems="left" style={{color:'red'}}>Andes extract</Typography>
      <Box display="flex" alignItems="center" justifyContent="center" flexDirection="row"> {/* Change flexDirection to "row" */}
        <Typography variant="h2" gutterBottom className={roboto.className} style={{color:'white'}} >Extract 
        </Typography>
        <Typography variant='h2' gutterBottom className={roboto.className} style={{ color: 'red',fontStyle:'italic' }} mx={2}>what you need</Typography>
        <Typography variant="h2" gutterBottom className={roboto.className} style={{color:'white'}}>from your documents.
        </Typography>
          
      </Box>

      <Typography variant="h5" align="center" gutterBottom style={{color:'white'}}>
        {texts}
      </Typography>
      {/* <SignUpButton variant="contained">Get Started</SignUpButton> */}
    </Box>
  );
}

export default LandingPage;
