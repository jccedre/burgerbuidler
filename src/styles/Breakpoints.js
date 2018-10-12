import { css } from 'styled-components';

 const breakpoints = {
   small: 0,
   largeSmall: 500,
   medium: 768,
   large: 1024,
   xlarge: 1200,
   xxlarge: 1440,
 };

 export const media = Object.keys(breakpoints).reduce((accumulator, label) => {
   accumulator[label] = (...args) => css`
     @media (min-width: ${breakpoints[label] / 16}em) {
       ${css(...args)}
     }
   `
   return accumulator
 }, {});
