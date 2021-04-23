import * as React from 'react';
import Svg, {Defs, ClipPath, Path, G} from 'react-native-svg';
import {IconProps} from '.';

const ArrowDownIcon: React.FC<IconProps> = ({
  color = '#121331',
  width = 25,
}) => {
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
          d="M430.957 162.123L247.403 345.677 63.853 162.123"
          fill="none"
        />
      </G>
    </Svg>
  );
};

export default ArrowDownIcon;
