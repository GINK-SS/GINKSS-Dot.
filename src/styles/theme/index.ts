import { DefaultTheme } from 'styled-components';
import palette from '../palette';

export const lightTheme: DefaultTheme = {
  bgColor: palette.gray000,
  textColor: palette.gray085,
  headerTextColor: palette.gray085,
  subHeaderTextColor: palette.gray050,
  calloutTextColor: palette.gray070,
  calloutBgColor: palette.gray010,
  boxBorderColor: palette.gray030,
  boxBgColor: palette.gray000,
  boxHoverBorderColor: palette.gray070,
  boxHoverBgColor: palette.gray005,

  transDuration: '0.3s',
};

export const darkTheme: DefaultTheme = {
  // bgColor: palette.gray080,
  bgColor: '#1E1C1C',
  textColor: palette.gray010,
  headerTextColor: palette.gray010,
  subHeaderTextColor: palette.gray040,
  calloutTextColor: palette.gray020,
  calloutBgColor: palette.gray085,
  boxBorderColor: palette.gray060,
  boxBgColor: palette.gray095,
  boxHoverBorderColor: palette.gray020,
  boxHoverBgColor: palette.gray090,

  transDuration: '0.3s',
};
