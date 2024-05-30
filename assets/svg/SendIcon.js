import * as React from 'react';
import Svg, {Defs, Path, G} from 'react-native-svg';

const SendIcon = ({fill = ''}) => (
  <Svg width="40px" height="40px" viewBox="0 0 32 32">
    <Defs />
    <G id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
      <G
        id="Icon-Set-Filled"
        transform="translate(-570.000000, -257.000000)"
        fill="#FF6347">
        <Path
          d="M580.407,278.75 C581.743,281.205 586,289 586,289 C586,289 601.75,258.5 602,258 L602.02,257.91 L580.407,278.75 L580.407,278.75 Z M570,272 C570,272 577.298,276.381 579.345,277.597 L601,257 C598.536,258.194 570,272 570,272 L570,272 Z"
          id="send-email"
        />
      </G>
    </G>
  </Svg>
);
export default SendIcon;
