import media from './media';

const flexSet = (just = 'center', align = 'center') => {
  return `display: flex;
  justify-content: ${just};
  align-items: ${align};`;
};

const flexColumnSet = (just = 'center', align = 'center') => {
  return `display: flex;
  flex-direction: column;
  justify-content: ${just};
  align-items: ${align};`;
};

const bgSection = (url: string) => `
  z-index : 0;
  background-repeat: no-repeat;
  height: 100vh;
  background-size : 100% 100%;
  background-image: url(${url});
`;

const colors = {
  red: '#f26462',
  black: 'rgb(61, 61, 61)',
  primaryGray: '#3f4150',
  secondaryGray: '#8c8d96',
  tertiaryGray: '#b2b3b9',
  border: '#EFEFEF',
  selected: '#f2f2f2',
  bgGray: '#f6f5f5',
};

export const theme = {
  flexColumnSet,
  flexSet,
  bgSection,
  colors,
  media,
};

export type Theme = typeof theme;
