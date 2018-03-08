import React from 'react';
import Hero from 'grommet/components/Hero';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Image from 'grommet/components/Image';

const About = () => (
  <div>
    <Hero
      background={
        <Image
          src="./images/beachstairs.jpg"
          height="100%"
          width="100%"
          fit="cover"
          full={true}
          align={{ center: true }}
        />
      }
      backgroundColorIndex="dark"
      size="large"
    >
      <Box direction="row" justify="center" align="center">
        <Box basis="1/2" align="end" pad="medium" />
        <Box basis="1/2" align="start" pad="medium">
          <Heading margin="none">Jesse Olsen</Heading>
        </Box>
      </Box>
    </Hero>
    <h2>About this website</h2>
    <Box>
      This website was developed using React, Redux, and Grommet 1 and 2.
    </Box>
    <h2>About Jesse</h2>
    <Box>
      Jesse Olsen has been developing software for over 20 years. He has a
      Masters Degree in Computer Science from Brigham Young University (BYU
      Provo). He has invented and submitted 6 patents to the U.S. Patent Office.
      He enjoys teaching others, and holds a weekly training meeting over lunch
      to teach others programming skills. He has developed code in React,
      JavaScript, Go, Python, Java, etc. He is an Eagle Scout, and has been an
      adult leader in Boy Scouts.
    </Box>
  </div>
);

export default About;
