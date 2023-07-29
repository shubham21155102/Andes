import { useState } from 'react';
import { Container, Paper, Typography, TextField, Button } from '@mui/material';
import Header from '../header';
import Footer from '../Footer';
import Link from 'next/link';

const LogIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here (e.g., API call, validation)
    // Replace the following line with your actual login logic
    console.log('Username:', username, 'Password:', password);
  };

  return (
    <>
      <Header />
      <Container maxWidth="xs">
        <Paper elevation={3} sx={{ padding: '2rem', marginTop: '2rem' }}>
          <Typography variant="h5" align="center" gutterBottom>
            Login
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Username"
              variant="outlined"
              margin="normal"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Link href={{ pathname: '/SignUp' }}>
              Don&apos;t have an account?
            </Link>
            <Button type="submit" variant="contained"
              style={{ color: 'powderblue', backgroundColor: 'gray' }} fullWidth>
              Login
            </Button>
          </form>
        </Paper>
      </Container>
      <Footer />
    </>
  );
};

export default LogIn;
