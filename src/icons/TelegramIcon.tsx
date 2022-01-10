/* eslint-disable react/display-name */
import * as React from 'react';

import { styled, SvgIconConfig } from 'stitches.config';

import { IconProps } from 'types';

export const TelegramIcon = styled(
  React.forwardRef<SVGSVGElement, IconProps>((props, forwardedRef) => {
    return (
      <svg {...props} ref={forwardedRef}>
        <path d="M9.32168 15.6895L9.0211 19.9199C9.45157 19.9199 9.63711 19.7344 9.85977 19.5117L11.8785 17.582L16.0607 20.6436C16.8289 21.0703 17.367 20.8477 17.5748 19.9385L20.3209 7.08008C20.5658 5.94824 19.9127 5.50293 19.1631 5.78125L3.02793 11.9562C1.92578 12.383 1.94434 12.999 2.84239 13.2736L6.96524 14.5576L16.5469 8.56445C16.9959 8.26758 17.4078 8.43086 17.0701 8.73144L9.32168 15.6895Z" />
      </svg>
    );
  }),
  SvgIconConfig
);

export default TelegramIcon;
