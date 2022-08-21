import { Avatar, Button, Container, Spacer, Text } from '@nextui-org/react';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { useMediaQuery } from 'react-responsive';

const HeaderDetails = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  const nameUsers = ['Junior', 'Jane', 'W', 'John', 'JR'];
  const pictureUsers = [
    'https://i.pravatar.cc/150?u=a042581f4e29026024d',
    'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    'https://i.pravatar.cc/150?u=a04258114e29026702d',
    'https://i.pravatar.cc/150?u=a048581f4e29026701d',
    'https://i.pravatar.cc/150?u=a092581d4ef9026700d',
  ];
  return (
    <Container>
      {' '}
      <Text
        h1
        color='#fff'
        css={{
          marginInline: 'auto',
          fontSize: '28px',
          width: '100%',
          textAlign: 'center',
          lineHeight: '1.2',
          '@xs': {},
          '@sm': {},
          '@md': {},
          '@lg': {
            width: '54%',
            fontSize: '56px',
          },
        }}>
        Discover better insight every single day.
      </Text>
      <Spacer />
      <Text
        color='#c4c4c4'
        css={{
          marginInline: 'auto',
          width: '100%',
          textAlign: 'center',
          fontSize: '15px',
          '@lg': {
            width: '54%',
            fontSize: '21px',
          },
        }}>
        Discovered latest top-notch stories from world wide community. quality
        informative podcast and verified creators.
      </Text>
      <Button
        css={{
          marginInline: 'auto',
          mt: 22,
          background: '#14213D',
          border: 'none',
          borderRadius: '3px',
          padding: '12px 13px',
          fontSize: '12px',
          '@lg': {
            fontSize: '16px',
            padding: '22px 28px',
          },
        }}
        auto
        iconRight={<FontAwesomeIcon icon={faAnglesRight} />}>
        Browse Podcast
      </Button>
      {isTabletOrMobile ? <Spacer y={6} /> : <Spacer y={9} />}
      <Avatar.Group>
        {pictureUsers.map((url, index) => (
          <Avatar
            key={index}
            size='lg'
            pointer
            src={url}
            bordered
            color='gradient'
            stacked
          />
        ))}
        <Text css={{ color: '#fff', m: 7 }}>
          {isTabletOrMobile
            ? ' And more people'
            : 'And more people are listening on cast plus'}
        </Text>
      </Avatar.Group>
    </Container>
  );
};

export default HeaderDetails;
