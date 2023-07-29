import { Button, styled, Box, Typography } from '@mui/material';
import React from 'react';

const SignUpButton = styled(Button)({
  backgroundColor: '#007bff',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#0056b3',
  },
});

const LandingPage = () => {
  const text = "APIs to make shipping quick and easy";
  const texts = "Save engineering time with Andes. Unleash the power of AI in your applications! Connect with leading LLMs, enhance your application's chat and text extraction capabilities.";

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh">
      <Typography variant="h3" gutterBottom>
        {text}
      </Typography>
      <Typography variant="h5" align="center" gutterBottom>
        {texts}
      </Typography>
      <SignUpButton variant="contained">Get Started</SignUpButton>
    </Box>
  );
}

export default LandingPage;
