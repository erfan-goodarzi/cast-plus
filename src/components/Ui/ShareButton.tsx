import { faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Popover, Text } from '@nextui-org/react';

export const ShareButton = () => {
  return (
    <Popover isBordered placement='top'>
      <Popover.Trigger>
        <Button
          bordered
          iconRight={<FontAwesomeIcon icon={faShareAlt} />}
          css={{
            color: '#fff',
            borderColor: '#fff',
            p: '2px 24px',
            borderRadius: 3,
          }}
          auto>
          Share
        </Button>
      </Popover.Trigger>
      <Popover.Content>
        <Text css={{ p: '$10' }}>This is the content of the popover.</Text>
      </Popover.Content>
    </Popover>
  );
};
