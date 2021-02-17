import React from 'react';
import Container from '~/components/Container';
import { responsive } from '~/components/CssUtils';
import { Button, ButtonProps } from '~/components/Button/Button';

interface BannerProps {
  title: string;
  subtitle: string;
  button: ButtonProps;
}

const Style = {
  desktop: {
    display: 'grid',
    gridTemplateColumns: '1fr auto',
    width: '100%',
    justifyContent: 'space-between',
  },
  mobile: {
    display: 'grid',
    gridTemplateColumns: '1fr auto',
  },
};
const Wrapper = {
  background: 'blue',
  padding: '14px 0 18px',
};

const Subtitle = {
  mobile: {
    display: 'none',
  },
};

export const PageBanner = (props: BannerProps) => {
  return (
    <div css={Wrapper}>
      <Container>
        <div css={responsive(Style)}>
          <div>
            <h2>{props.title}</h2>
            <p css={responsive(Subtitle)}>{props.subtitle}</p>
          </div>
          <Button {...props.button} />
        </div>
      </Container>
    </div>
  );
};
