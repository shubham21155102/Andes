import React from 'react'
import { styled, Typography, Container, Paper } from '@mui/material';

const ContactSection = styled('section')({
    // backgroundColor: '#f9f9f9',
    padding: '2rem 0',
  });
  
  const SectionHeader = styled('header')({
    marginBottom: '1rem',
  });
  
  const ListItem = styled('li')({
    padding: '1rem',
    border: '1px solid #ccc',
    borderRadius: '8px',
    marginBottom: '1rem',
  });
  
  const Pre = styled(Paper)({
    border: 'none',
    padding: '0.5rem',
    // backgroundColor: '#f1f1f1',
    overflowX: 'auto',
  });
  const Example = () => {
    return (
      <ContactSection id="example" className="contact">
        <Container data-aos="fade-up">
          <SectionHeader>
            <Typography variant="h5" gutterBottom>
                <center>
            <h1>
            Example
                </h1>  
                </center>
             
            </Typography>
          </SectionHeader>
          <ul>
            <ListItem>
              <Typography variant="body1" gutterBottom>
                Import pre-requisites
              </Typography>
              <Pre>
                {`import os
  import requests
  
  BASE_URL = 'https://api.tryandes.com'
  HEADERS = {'Authorization': 'Bearer YOUR_AUTH_TOKEN'} # replace this with your API key`}
              </Pre>
            </ListItem>
            <ListItem>
              <Typography variant="body1" gutterBottom>
                Generate a link to chat with a document
              </Typography>
              <Pre>
                {`# test file upload
  test_file = open('/home/ubuntu/test.pdf', 'rb')
  files = {'file': test_file}
  response = requests.post(f'{BASE_URL}/document', files=files, headers=HEADERS)
  assert response.status_code == 200, response.text
  
  response = response.json()
  id = response['id']
  
  # test chat is working
  question = 'whats the document about'
  response = requests.post(
      f'{BASE_URL}/document/{id}/chat',
      json={'message': question},
      headers=HEADERS
  )
  assert response.status_code == 200, response.text
  answer = response.json()
  print(answer)`}
              </Pre>
            </ListItem>
            <ListItem>
              <Typography variant="body1" gutterBottom>
                Get document chat history
              </Typography>
              <Pre>
                {`# doc chat history
  response = requests.get(f'{BASE_URL}/document/{id}/chat', headers=HEADERS)
  assert response.status_code == 200, response.text
  response.json()`}
              </Pre>
            </ListItem>
            <ListItem>
              <Typography variant="body1" gutterBottom>
                Generate a link to chat with a webpage
              </Typography>
              <Pre>
                {`# test webpage crawl
  url = 'https://www.nfx.com/post/systems-of-elite-ceos'
  response = requests.post(f'{BASE_URL}/webpage', json={'url': url}, headers=HEADERS)
  assert response.status_code == 200, response.text
  
  response = response.json()
  id = response['id']
  
  # test chat is working
  question = 'whats the document about'
  response = requests.post(
      f'{BASE_URL}/webpage/{id}/chat',
      json={'message': question},
      headers=HEADERS
  )
  assert response.status_code == 200, response.text
  answer = response.json()
  print(answer)`}
              </Pre>
            </ListItem>
          </ul>
        </Container>
      </ContactSection>
    );
  };
  
  export default Example;
  