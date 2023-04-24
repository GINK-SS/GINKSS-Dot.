import { atom } from 'recoil';

/**
 * 테마 (default: true)
 * (다크 모드면 true, 라이트 모드면 false)
 */
export const themeState = atom({
  key: 'themeState',
  default: true,
});
