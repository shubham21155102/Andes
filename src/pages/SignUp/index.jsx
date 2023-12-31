import { useState } from 'react';
import { Container, Paper, Typography, TextField, Button } from '@mui/material';
import Header from '../header';
import Footer from '../Footer';
import Link from 'next/link';
import { Roboto_Flex } from 'next/font/google';
const roboto=Roboto_Flex({
      weight:'300',
      subsets: ['latin']
})
const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email,setEmail]=useState('');
  const [phone,setPhone]=useState('');
  const [password, setPassword] = useState('');
    

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here (e.g., API call, validation)
    // Replace the following line with your actual login logic
    console.log('Username:', username, 'Password:', password," Email:", email," Phone", phone);
  };

  return (
    <>
    <Header/>
    <Container maxWidth="xs">
      <Paper elevation={3} sx={{ padding: '2rem', marginTop: '2rem' }} className={roboto.className}  style={{backgroundColor:'skyblue',borderRadius:'50px'}}>
        <Typography variant="h5" align="center" gutterBottom className={roboto.className} style={   {color:'black',fontFamily:'Roboto',fontWeight:'bold',fontSize:'30px'}   }>
          SignUp
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
            label="Email"
            type="email"
            variant="outlined"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
           <TextField
            fullWidth
            label="Phone"
            type="phome"
            variant="outlined"
            margin="normal"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
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
          <Link href={{pathname: '/LogIn' }}>
              Already have an account
             </Link>
          <Button type="submit" variant="contained"  fullWidth
          style={{color:'powderblue',backgroundColor:'gray'}}>
            SignUp
          </Button>
        </form>
      </Paper>
    </Container>
    <Footer/>
    </>
  );
};

export default SignUp;
