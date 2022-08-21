import { Text } from '@nextui-org/react';

interface BadgeInfoProps {
  channel: string;
  time: string | undefined;
}

const BadgeInfo = ({ channel, time }: BadgeInfoProps) => {
  return (
    <>
      {' '}
      <Text
        color='#001d3d'
        css={{
          mt: 23,
          textAlign: 'left',
          fontSize: '16px',
          lineHeight: '1.2',
          background: 'rgb(255 214 10)',
          padding: '6px 14px',
          width: 'fit-content',
          borderRadius: 'ius: 3px',
          fontWeight: 600,
        }}>
        {channel} | {time}
      </Text>
    </>
  );
};

export default BadgeInfo;
