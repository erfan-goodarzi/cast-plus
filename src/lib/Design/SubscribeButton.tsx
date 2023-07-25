import { faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, keyframes } from '@nextui-org/react';
import { useLocalStorageState, useToggle } from 'ahooks';
import { useEffect, useRef } from 'react';

import { SuccessNotif } from '../Notification';

const bellAnimation = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '25%': { transform: 'rotate(20deg)' },
  '85%': { transform: 'rotate(-20deg)' },
  '100%': { transform: 'rotate(0deg)' },
});

interface Props {
  podcastId: number;
}

interface Storage {
  podcast: SubscribedPodcasts;
}

interface SubscribedPodcasts {
  id: number[];
  isSubscribed: boolean;
}

export const SubscribeButton = ({ podcastId }: Props) => {
  const [isToggled, { toggle: toggleSubscription }] = useToggle();
  const [localStorageData, setLocalStorageData] = useLocalStorageState<Storage>(
    'SubscribedPodcasts',
    { defaultValue: { podcast: { isSubscribed: false, id: [] } } },
  );
  const didInit = useRef(false); // Prevent running twice.

  useEffect(() => {
    if (!didInit.current) {
      didInit.current = true;
      setLocalStorageData(prevState => ({
        podcast: {
          ...prevState!.podcast,
          isSubscribed: localStorageData.podcast.id.includes(podcastId),
        },
      }));
    }
  }, [localStorageData.podcast.id, podcastId, setLocalStorageData]);

  const labels = ['subscribe', 'unsubscribe'];
  const isPodSubscribed = localStorageData.podcast.isSubscribed;

  return (
    <Button
      bordered
      onPress={e => {
        SuccessNotif({
          msg: isPodSubscribed ? 'Unsubscribed' : 'Successfully Subscribed 🎉',
        });

        toggleSubscription();
        setLocalStorageData(prevState => {
          const updatedIds = prevState?.podcast.id.includes(podcastId)
            ? prevState.podcast.id.filter(id => id !== podcastId)
            : [...(prevState?.podcast.id ?? []), podcastId];

          return {
            podcast: {
              id: updatedIds,
              isSubscribed: !isToggled,
            },
          };
        });
        const bellIcon = e.target.querySelector('svg');
        bellIcon!.style.animation = `${bellAnimation()} .7s`;
        bellIcon!.style.animationIterationCount = '2';
        // reset the animation trigger
        bellIcon!.addEventListener('animationend', () => {
          bellIcon!.style.animation = '';
        });
      }}
      iconRight={<FontAwesomeIcon icon={faBell} />}
      css={{
        color: isPodSubscribed ? '$primary' : '#fff',
        borderColor: isPodSubscribed ? '$primary' : '#fff',
        borderRadius: 3,
      }}
      auto
    >
      {labels[Number(isPodSubscribed)]}
    </Button>
  );
};
