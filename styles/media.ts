import { CSSProp, css } from 'styled-components';

type MediaQueryProps = {
  mobile: number;
  tablet: number;
  miniDesktop: number;
};

const sizes: MediaQueryProps = {
  mobile: 684,
  tablet: 768,
  miniDesktop: 1170,
};

// // Iterate through the sizes and create a media template
type BackQuoteArgs = string[];

const media = {
  mobile: (literals: TemplateStringsArray, ...args: BackQuoteArgs): CSSProp =>
    css`
      @media only screen and (max-width: ${sizes.mobile}px) {
        ${css(literals, ...args)}
      }
    `,
  tablet: (literals: TemplateStringsArray, ...args: BackQuoteArgs): CSSProp =>
    css`
      @media only screen and (max-width: ${sizes.tablet}px) {
        ${css(literals, ...args)}
      }
    `,
  miniDesktop: (
    literals: TemplateStringsArray,
    ...args: BackQuoteArgs
  ): CSSProp =>
    css`
      @media only screen and (max-width: ${sizes.miniDesktop}px) {
        ${css(literals, ...args)}
      }
    `,
} as Record<
  keyof typeof sizes,
  (l: TemplateStringsArray, ...p: BackQuoteArgs) => CSSProp
>;

export default media;
