import { DefaultTheme } from 'styled-components';
import palette from '../palette';

// Todo: 라이트 모드 구현
export const lightTheme: DefaultTheme = {
  bgColor: '#1A1A1A',
  textColor: palette.gray050,
  subTextColor: palette.gray200,

  upperBgColor: palette.gray800,
  upperTextColor: palette.gray100,

  btnBgColor: palette.orange6,
  btnBorderColor: palette.orange2,
  btnTextColor: palette.gray050,
  btnHoverBgColor: palette.orange7,
  btnHoverBorderColor: palette.orange3,
  btnHoverTextColor: palette.gray000,

  subPointColor: palette.green6,
  subPointLighterColor: palette.green4,
  subPointDarkerColor: palette.green8,
  pointColor: palette.orange6,
  pointLighterColor: palette.orange4,
  pointDarkerColor: palette.orange8,

  transDuration: '0.3s',
};

export const darkTheme: DefaultTheme = {
  textColor: palette.gray050,
  subTextColor: palette.gray500,

  bgColor: palette.gray900,
  upperBgColor: palette.gray800,
  upperTextColor: palette.gray100,

  btnBgColor: palette.orange5,
  btnBorderColor: palette.orange4,
  btnTextColor: palette.gray050,
  btnHoverBgColor: palette.orange6,
  btnHoverBorderColor: palette.orange5,
  btnHoverTextColor: palette.gray000,

  pointColor: palette.green6,
  pointLighterColor: palette.green4,
  pointDarkerColor: palette.green8,
  subPointColor: palette.orange6,
  subPointLighterColor: palette.orange4,
  subPointDarkerColor: palette.orange8,

  transDuration: '0.3s',
};
