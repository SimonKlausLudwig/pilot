import React from 'react';

export const looks = ['orange', 'dark', 'default'] as const;
export const sizes = ['small', 'medium', 'big'] as const;
type Size = typeof sizes[number];
export const tagNames = ['a', 'button', 'div'] as const;
export const width = ['min', 'max'] as const;

type Look = typeof looks[number];

export const Sizes: { [P in typeof sizes[number]]: any } = {
  small: { padding: '0 4px' },
  medium: { padding: '10px 25px' },
  big: { padding: '12px 43px' },
};

export const Looks: { [P in typeof looks[number]]: any } = {
  orange: {
    backgroundImage:
      'linear-gradient(230deg, rgb(203, 117, 46) 0%, rgb(168, 52, 52) 97%)',
  },
  dark: { backgroundColor: '#111426' },
  default: { backgroundColor: '#0ba3a7' },
};

export interface ButtonProps {
  text?: string;
  href?: string;
  look?: Look;
  size?: Size;
  tagName?: typeof tagNames[number];
  width?: typeof width[number];
  target?: '_blank' | '_self' | '_parent' | '_top' | 'framename';
  id?: string;
  onClick?: () => void;
}

const ButtonStyle = {
  display: 'inline-flex',
  fontSize: '14px',
  lineHeight: '22px',
  padding: '12px 43px',
  textDecoration: 'none !important',
  textTransform: 'uppercase',
  borderRadius: '2px',
  border: 'none',
  alignSelf: 'center',
  cursor: 'pointer',
  justifyContent: 'center',
  fontWeight: 600,
  textAlign: 'center',
  whiteSpace: 'nowrap',
  maxWidth: '100%',
  overflow: 'hidden',
  transition: 'background .15s ease',
  color: '#E5ECF4',
  boxShadow: 'none',
};

const Widths: { [P in typeof width[number]]: any } = {
  min: { display: 'flex' },
  max: { display: 'block' },
};

export const Button = (props: ButtonProps) => {
  const TagName = props.tagName || (props.href ? 'a' : 'div');
  return (
    <TagName
      data-test="button"
      {...{ ...props, style: undefined }}
      target={props.target}
      css={[
        ButtonStyle,
        Widths[props.width || 'max'],
        Sizes[props.size || 'medium'],
        Looks[props.look || 'default'],
      ]}
      href={props.href}
      onClick={props.onClick}
      id={props.id}
    >
      {props.text}
    </TagName>
  );
};
