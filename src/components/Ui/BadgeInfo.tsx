import { Text } from '@nextui-org/react';
import { Link } from '@tanstack/react-location';

interface BadgeInfoProps {
  channel: string;
  time: string;
  path: number;
}

export const BadgeInfo = ({ channel, time, path }: BadgeInfoProps) => {
  return (
    <Link to={`/explore/${path}`}>
      <Text
        color='#0F172B'
        css={{
          '&:hover': {
            transition: 'all 0.2s ease-in-out',
            background: '#fff',
          },
          mt: 23,
          textAlign: 'center',
          fontSize: '13px',
          lineHeight: '1.2',
          background: 'rgb(255 214 10)',
          padding: '6px 14px',
          width: 'fit-content',
          m: '0px 23px',
          borderRadius: 'ius: 3px',
          fontWeight: 600,
          '@xs': {
            mx: 'auto',
          },
          '@lg': {
            fontSize: '16px',
            textAlign: 'left',
            m: '12px 0px',
            mt: 20,
          },
        }}>
        {channel} | {time}
      </Text>
    </Link>
  );
};
