import * as React from 'react';
import Svg, {Defs, ClipPath, Path, G} from 'react-native-svg';
import {IconProps} from '.';

const ArrowUpIcon: React.FC<IconProps> = ({color = '#121331', width = 25}) => {
  const height = width;

  return (
    <Svg width={width} height={height} x={0} y={0} viewBox="0 0 500 500">
      <Defs>
        <ClipPath id="prefix__a">
          <Path d="M0 0h500v500H0z" />
        </ClipPath>
      </Defs>
      <G clipPath="url(#prefix__a)">
        <Path
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke={color}
          strokeWidth={40}
          d="M78.825 333.127l173.631-173.632 173.628 173.632"
          fill="none"
        />
      </G>
    </Svg>
  );
};

export default ArrowUpIcon;
