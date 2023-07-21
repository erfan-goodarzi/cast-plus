import { Badge as NextBadge, NormalSizes } from '@nextui-org/react';

interface Props {
  content: string;
  size?: NormalSizes;
}

export const Badge = ({ content, size }: Props) => {
  return (
    <NextBadge
      size={size}
      css={{
        background: 'transparent',
        color: '$primary',
        fontSize: 13,
      }}
      isSquared
      variant='bordered'>
      {content}
    </NextBadge>
  );
};
