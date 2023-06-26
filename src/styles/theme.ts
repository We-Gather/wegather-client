import { css, DefaultTheme, CSSObject } from 'styled-components';

interface MyTheme {
  device: {
    tablet: string;
    laptop: string;
    laptopL: string;
    desktop: string;
  };
}
declare module 'styled-components' {
  export interface DefaultTheme extends MyTheme {}
}

const sizes = {
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '1920px',
};

const device = {
  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  laptopL: `(min-width: ${sizes.laptopL})`,
  desktop: `(min-width: ${sizes.desktop})`,
};


const theme: MyTheme = {
  device,
};

export default theme;
