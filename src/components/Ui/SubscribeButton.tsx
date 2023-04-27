import { faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, keyframes } from '@nextui-org/react';
import { useToggle } from 'ahooks';

const bellAnimation = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '25%': { transform: 'rotate(20deg)' },
  '85%': { transform: 'rotate(-20deg)' },
  '100%': { transform: 'rotate(0deg)' },
});

export const SubscribeButton = () => {
  const [isSubscribed, { toggle }] = useToggle();

  const labels = ['subscribe', 'unsubscribe'];

  return (
    <Button
      bordered
      onClick={() => {
        toggle();
      }}
      iconRight={
        <FontAwesomeIcon
          style={{
            animation: `${bellAnimation} .7s`,
          }}
          icon={faBell}
        />
      }
      css={{
        color: isSubscribed ? '$primary' : '#fff',
        borderColor: isSubscribed ? '$primary' : '#fff',
        borderRadius: 3,
      }}
      auto>
      {labels[Number(isSubscribed)]}
    </Button>
  );
};
