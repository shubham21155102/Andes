import { styled } from '@mui/material';
import React from 'react';

const FooterContainer = styled('footer')({
  // backgroundColor: '#f9f9f9',
  padding: '2rem 0',
  color:"white",
});

const FooterTop = styled('div')({
  // backgroundColor: '#fff',
});

const FooterInfo = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '& .logo': {
    display: 'flex',
    alignItems: 'center',
    '& img': {
      height: '40px',
      marginRight: '8px',
    },
    '& span': {
      fontSize: '1.5rem',
      fontWeight: 'bold',
    },
  },
});

const FooterContact = styled('div')({
  textAlign: 'center',
  '& h4': {
    marginBottom: '1rem',
  },
});

const Copyright = styled('div')({
  textAlign: 'center',
  // backgroundColor: '#fff',
  color:"white",
  padding: '1rem 0',
});
const ContactSection = styled('section')({
  backgroundColor: '#f9f9f9',
  padding: '2rem 0',
});

const InfoBox = styled('div')({
  textAlign: 'center',
  '& h3': {
    marginBottom: '1rem',
  },
  '& .social-links a': {
    color: '#007bff',
    fontSize: '2rem',
    margin: '0 0.5rem',
  },
});

const Footer = () => {
  return (
    <FooterContainer style={{backgroundColor:'black',fontFamily:'Apple',fontSize:'20px'}}>
      <FooterTop>
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-5 col-md-12">
              <FooterInfo>
              
                {/* <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M88.7 223.8L0 375.8V96C0 60.7 28.7 32 64 32H181.5c17 0 33.3 6.7 45.3 18.7l26.5 26.5c12 12 28.3 18.7 45.3 18.7H416c35.3 0 64 28.7 64 64v32H144c-22.8 0-43.8 12.1-55.3 31.8zm27.6 16.1C122.1 230 132.6 224 144 224H544c11.5 0 22 6.1 27.7 16.1s5.7 22.2-.1 32.1l-112 192C453.9 474 443.4 480 432 480H32c-11.5 0-22-6.1-27.7-16.1s-5.7-22.2 .1-32.1l112-192z"/></svg> */}
                  <span>Andes</span>
               
                <p>The marketplace for Large Language Model (LLM) APIs.</p>
              </FooterInfo>
            </div>

            <div className="col-lg-3 col-md-12">
              <FooterContact>
                <h4>Contact Us</h4>
                <p>
                  650, California Street<br />
                  San Francisco, CA 94108
                  United States
                  <br /><br />
                  <strong>Phone:</strong> +1 5589 55488 55<br />
                  <strong>Email:</strong> akshay@tryandes.com<br />
                </p>
              </FooterContact>
            </div>
          </div>
        </div>
      </FooterTop>

      <div className="container">
        <Copyright>
          &copy; Copyright <strong><span>Andes</span></strong>. All Rights Reserved
        </Copyright>
      </div>
    </FooterContainer>
  );
};

export default Footer;
