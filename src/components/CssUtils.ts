export const SMARTPHONE_BREAKPOINT =
  '@media only screen and (max-width: 900px)';

export interface ResponsiveStyle {
  desktop?: any;
  mobile?: any;
  tablet?: any;
}

export const desktopStyle = (css: any) => css;

export const mobileStyle = (css: any) => ({
  [SMARTPHONE_BREAKPOINT]: {
    ...css,
  },
});

export const tabletStyle = (css: any) => ({
  [SMARTPHONE_BREAKPOINT]: {
    ...css,
  },
});

export const responsive = (css: ResponsiveStyle) => {
  return [desktopStyle(css.desktop), mobileStyle(css.mobile)];
};
