import React from 'react';
import { Box, Container, Grid, Heading, Text } from 'theme-ui';
import BlockTitle from 'components/block-title';
import Image from 'components/image';

import icon1 from 'assets/icons/service-1-1.svg';
import icon2 from 'assets/icons/service-1-2.svg';
import icon3 from 'assets/icons/service-1-3.svg';
import icon4 from 'assets/icons/service-1-4.svg';
import {FaAngleRight} from "react-icons/fa";

const SERVICES_DATA = [
  {
    icon: icon1,
    title: 'Document upload and ingestion by AI',
    text:
      'Upload and translate your Web page, PDF, text or images documents one by one or with asynchronous batches. Keep control of your data indexes collections in your data management space.',
  },
  {
    icon: icon2,
    title: 'Q&A chat with the newest AI models on YOUR documents',
    text:
      'Experience a chat with the newest GPT AI models on your documents. No coding required. In future beta: Publish a public or private chat application directly or embed it in your application to give your users new docsraptor.ai superpowers.',
  },
  {
    icon: icon3,
    title: 'Customize your own integration with our API',
    text:
      'In future beta: Call your secured and dedicated prediction API on YOUR documents to integrate with your own application. ',
  },
  {
    icon: icon4,
    title: 'Contribute to the community to build the service you want and get the service for free',
    text:
      'docsraptor.ai is currently in closed alpha and we are engaged to build the best community with all our users around AI powered documents Q&A!',
  },
];

const Services = () => {
  return (
    <Box sx={styles.services} id="features">
      <Container>
        <BlockTitle
          slogan="Streamlined Features"
          title="Discover the exciting features of the service"
          styles={styles.blockTitle}
        />
        <Grid sx={styles.grid}>
          {SERVICES_DATA.map((service, index) => (
            <Box
              className="service-card"
              sx={styles.serviceCard}
              key={`service-post-${index}`}
            >
              <Box className="service-icon" sx={styles.icon}>
                <Image src={service.icon} alt="" />
              </Box>
              <Heading as="h3">{service.title}</Heading>
              <Text as="p">{service.text}</Text>
            </Box>
          ))}
        </Grid>
        <Box sx={styles.serviceFooter}><a target="_blank" href="https://discord.com/channels/1138385140674998312/1138558383549587477"><h2>Come to talk with the community about more data connectors, chat application publication and API integration options!<FaAngleRight/></h2></a></Box>
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  serviceFooter: {
   textAlign: 'center',
    padding: '40px 60px 60px 10px',
  },
  services: {
    pt: ['80px', null, null, null, null, null, '140px'],
    '.service-card:nth-of-type(2)': {
      '.service-icon': {
        backgroundImage:
          'linear-gradient(320.89deg, #25D9D9 10.83%, rgba(37, 217, 217, 0.5) 88.7%)',
      },
    },
    '.service-card:nth-of-type(3)': {
      '.service-icon': {
        backgroundImage:
          'linear-gradient(319.4deg, #0898E7 5.17%, rgba(8, 152, 231, 0.5) 94.34%)',
      },
    },
    '.service-card:nth-of-type(4)': {
      '.service-icon': {
        backgroundImage:
          'linear-gradient(322.63deg, #FF9066 9.94%, rgba(255, 144, 102, 0.5) 91.14%)',
      },
    },
  },
  blockTitle: {
    textAlign: 'center',
  },
  grid: {
    display: 'grid',
    gridGap: ['30px', null, null, null, null, '60px'],
    gridTemplateColumns: [
      '1fr',
      null,
      null,
      '1fr 1fr',
      null,
      '1fr 1fr 1fr 1fr',
    ],
  },
  icon: {
    display: 'flex',
    ml: 'auto',
    mr: 'auto',
    width: ['80px', null, null, '110px'],
    height: ['80px', null, null, '110px'],
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: ['20px', null, null, '40px'],
    backgroundImage:
      'linear-gradient(323.91deg, #FFCC40 7.09%, rgba(255, 204, 64, 0.5) 88.82%)',
  },
  serviceCard: {
    textAlign: 'center',
    h3: {
      margin: 0,
      fontSize: ['18px', null, null, 3],
      fontWeight: 'bold',
      lineHeight: 1,
      color: 'black',
      mt: ['30px', null, null],
      mb: ['20px', null, null],
    },
    p: {
      margin: 0,
      fontSize: [0, null, null, '15px'],
      color: 'heading_secondary',
      width: '100%',
      maxWidth: [null, null, null, null, '84%', '100%'],
      mx: [null, null, null, null, 'auto', '0'],
    },
  },
};
