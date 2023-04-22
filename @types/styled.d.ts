import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    bgColor: string;
    textColor: string;
    headerTextColor: string;
    subHeaderTextColor: string;
    calloutTextColor: string;
    calloutBgColor: string;
    boxBorderColor: string;
    boxBgColor: string;
    boxHoverBorderColor: string;
    boxHoverBgColor: string;

    transDuration: string;
  }
}
