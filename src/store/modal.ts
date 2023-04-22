import { atom } from 'recoil';

/**
 * 테마 (default: false)
 * (연락 모달창을 띄우려면 true, 아니면 false)
 */
export const contactState = atom({
  key: 'contactState',
  default: false,
});
