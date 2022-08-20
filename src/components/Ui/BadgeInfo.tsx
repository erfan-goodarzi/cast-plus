import { Text } from '@nextui-org/react';

interface BadgeInfoProps {
  channel: string | undefined;
  author: string | undefined;
  time: number | undefined;
}

const BadgeInfo = ({ channel, author, time }: BadgeInfoProps) => {
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
          width: 'max-content',
          borderRadius: 'ius: 3px',
          fontWeight: 600,
        }}>
        {channel} | {author} | {time}
      </Text>
    </>
  );
};

export default BadgeInfo;
