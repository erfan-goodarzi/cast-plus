import { Avatar, Button, Container, Spacer, Text } from '@nextui-org/react';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';

const HeaderDetails = () => {
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
          width: '53%',
          textAlign: 'center',
          fontSize: '56px',
          lineHeight: '1.2',
        }}>
        Discover better insight every single day.
      </Text>
      <Spacer />
      <Text
        color='#c4c4c4'
        css={{
          marginInline: 'auto',
          width: '54%',
          textAlign: 'center',
          fontSize: '21px',
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
          padding: '22px 28px',
        }}
        auto
        iconRight={<FontAwesomeIcon icon={faAnglesRight} />}>
        Browse Podcast
      </Button>
      <Spacer y={9} />
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
          And more people are listening on cast plus
        </Text>
      </Avatar.Group>
    </Container>
  );
};

export default HeaderDetails;
