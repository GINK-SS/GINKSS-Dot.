import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import NotificationModal from '../../components/common/NotificationModal';
import { notificationState } from '../../store/notification';

const Notification = () => {
  const [isNotification, setIsNotification] = useRecoilState(notificationState);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (isNotification) {
      timeout = setTimeout(() => {
        setIsNotification(false);
      }, 1500);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [isNotification, setIsNotification]);

  return <NotificationModal message="현재는 다크모드만 이용 가능합니다." />;
};

export default Notification;
