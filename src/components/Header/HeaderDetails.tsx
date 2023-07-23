import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Avatar, Button, Container, Spacer, Text } from '@nextui-org/react';
import { Link } from '@tanstack/react-location';
import { useMediaQuery } from 'react-responsive';

export const HeaderDetails = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 767px)' });

  const pictureUsers = [
    'https://i.pravatar.cc/150?u=a042581f4e29026024d',
    'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    'https://i.pravatar.cc/150?u=a04258114e29026702d',
    'https://i.pravatar.cc/150?u=a048581f4e29026701d',
    'https://i.pravatar.cc/150?u=a092581d4ef9026700d',
  ];

  return (
    <Container css={{ paddingTop: '5.5rem' }}>
      <Text
        h1
        color="#fff"
        css={{
          'marginInline': 'auto',
          'fontSize': '28px',
          'width': '100%',
          'textAlign': 'center',
          'lineHeight': '1.2',
          '@xs': {
            fontSize: '45px',
          },
          '@sm': {
            width: '75%',
          },
          '@md': {},
          '@lg': {
            width: '54%',
            fontSize: '56px',
          },
        }}
      >
        Discover better insight every single day.
      </Text>
      <Spacer />
      <Text
        color="#c4c4c4"
        css={{
          'marginInline': 'auto',
          'width': '100%',
          'textAlign': 'center',
          'fontSize': '15px',
          '@sm': {
            width: '51%',
          },
          '@lg': {
            width: '54%',
            fontSize: '21px',
          },
        }}
      >
        Discovered latest top-notch stories from world wide community. quality
        informative podcast and verified creators.
      </Text>
      <Button
        css={{
          'marginInline': 'auto',
          'color': '$accents0',
          'mt': 22,
          'background': '#0F172B',
          'border': 'none',
          'borderRadius': '3px',
          'padding': '12px 13px',
          'fontSize': '12px',
          '@lg': {
            fontSize: '16px',
            padding: '22px 28px',
          },
        }}
        auto
        iconRight={<FontAwesomeIcon icon={faAnglesRight} />}
      >
        <Link to="/explore">Browse Podcast</Link>
      </Button>
      {isTabletOrMobile ? <Spacer y={6} /> : <Spacer y={9} />}
      <Avatar.Group css={{ position: 'absolute', bottom: '3rem' }}>
        {pictureUsers.map(url => (
          <Avatar
            key={Object.values(url).join('-')}
            size="lg"
            pointer
            src={url}
            bordered
            color="gradient"
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
