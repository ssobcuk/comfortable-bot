import * as React from 'react';
import Svg, {Rect, Path, Circle} from 'react-native-svg';

const CloseIcon = ({fill = ''}) => (
  <Svg width="40px" height="40px" viewBox="0 0 16 16" id="svg8">
    <Rect
      transform="rotate(45)"
      ry={0}
      y={-1}
      x={4.3137083}
      height={2}
      width={14}
      id="rect1006"
      style={{
        opacity: 1,
        vectorEffect: 'none',
        fill: '#373737',
        fillOpacity: 1,
        stroke: 'none',
        strokeWidth: 4,
        strokeLinecap: 'square',
        strokeLinejoin: 'round',
        strokeMiterlimit: 4,
        strokeDasharray: 'none',
        strokeDashoffset: 3.20000005,
        strokeOpacity: 1,
      }}
    />
    <Rect
      transform="rotate(-45)"
      ry={0}
      y={10.313708}
      x={-7}
      height={2}
      width={14}
      id="rect1006-5"
      style={{
        opacity: 1,
        vectorEffect: 'none',
        fill: '#373737',
        fillOpacity: 1,
        stroke: 'none',
        strokeWidth: 4,
        strokeLinecap: 'square',
        strokeLinejoin: 'round',
        strokeMiterlimit: 4,
        strokeDasharray: 'none',
        strokeDashoffset: 3.20000005,
        strokeOpacity: 1,
      }}
    />
  </Svg>
);
export default CloseIcon;
