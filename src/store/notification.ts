import { atom } from 'recoil';

/**
 * 알람 (default: false)
 * (알람 창을 띄우려면 true, 아니면 false)
 */
export const notificationState = atom({
  key: 'notificationState',
  default: false,
});
