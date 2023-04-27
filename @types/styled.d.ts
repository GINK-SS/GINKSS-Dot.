import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    bgColor: string;
    textColor: string;
    subTextColor: string;

    upperBgColor: string;
    upperTextColor: string;

    btnBgColor: string;
    btnBorderColor: string;
    btnTextColor: string;
    btnHoverBgColor: string;
    btnHoverBorderColor: string;
    btnHoverTextColor: string;

    pointColor: string;
    pointLighterColor: string;
    pointDarkerColor: string;
    subPointColor: string;
    subPointLighterColor: string;
    subPointDarkerColor: string;

    transDuration: string;
  }
}
