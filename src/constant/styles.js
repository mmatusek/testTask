const mediaQ = (size) => `@media only screen and (min-width: ${size}px)`;

export const colors = {
  black: "#000000",
  white: "#FFFFFF",
  brown: "#AA6E10",
  red: "#E90107",
  grey: "#00000029",
  yellow: "#FDB201",
  green: "#667A3B",
  concrete: "#f3f3f3",
  doveGray: "#707070",
  silver: "#C7C7C7",
  theme: "#F84445",
  alto: "#E0E0E0",
  codGray: "#151515",
  transparent: "transparent",
};

export const mediaQueries = {
  xs: mediaQ(320),
  sm: mediaQ(576),
  md: mediaQ(850),
  lg: mediaQ(992),
  xl: mediaQ(1200),
  xxl: mediaQ(1440),
  xxxl: mediaQ(1600),
};

export const fontWeight = {
  light: 300,
  medium: 400,
  extraMedium: 500,
  semiBold: 600,
  heavy: 700,
  extraBold: 800,
  superBold: 900,
};

export const fontSize = {
  xxxSmall: "0.625rem",
  xxSmall: "0.7rem",
  xSmall: "0.8rem",
  small: "0.85rem",
  base: "16px",
  normal: "1rem",
  normalExtended: "1.1rem",
  medium: "1.2rem",
  mediumExtended: "1.3rem",
  large: "1.5rem",
  largeExtended: "1.8rem",
  extraLarge: "2rem",
  extraLargeExtended: "2.5rem",
  biggest: "3rem",
  biggestExtended: "4rem",
  offTheScale: "5rem",
};

export const fontFamily = {
  openSans: "'Open Sans', sans-serif",
  spartan: "'Spartan', sans-serif",
};
