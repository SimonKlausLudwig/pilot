import React, { ReactNode } from 'react';
import { desktopStyle, mobileStyle } from './CssUtils';

export const looks = ['blue', 'orange', 'white', 'default'] as const;
type Look = typeof looks[number];

const ColorStyle: { [P in Look]: { background: string } } = {
  blue: {
    background:
      'linear-gradient(230deg, rgb(10, 53, 107) 0%, rgb(11, 149, 167) 97%)',
  },
  orange: {
    background: 'linear-gradient(230deg,#cb752e,#a83434 97%)',
  },
  white: {
    background: 'linear-gradient(230deg,#cb752e,#a83434 97%)',
  },
  default: {
    background: 'transparent',
  },
};

const PaddingStyle = (withPadding: boolean) => ({
  padding: withPadding ? '30px 0' : '0',
});

export interface ContainerProps {
  children: ReactNode;
  look?: Look;
  padding?: boolean;
  className?: string;
}

const Style = {
  VID_CONTAINER: { width: '100%', maxWidth: '100vw', overflow: 'hidden' },
  VID_CONTAINER_MOBILE: { width: '95%', maxWidth: '100vw', overflow: 'hidden' },
  CONTAINER_INNER: {
    maxWidth: '1128px',
    padding: '0',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

const Container = (props: ContainerProps) => (
  <div
    css={[
      desktopStyle(Style.VID_CONTAINER),
      ColorStyle[props.look || 'default'],
      PaddingStyle(props.padding || true),
    ]}
  >
    <div
      data-test="wrapper-container"
      css={[
        desktopStyle(Style.CONTAINER_INNER),
        mobileStyle(Style.VID_CONTAINER_MOBILE),
      ]}
    >
      {props.children}
    </div>
  </div>
);

export default Container;
