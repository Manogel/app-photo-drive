import * as React from 'react';
import Svg, {Defs, ClipPath, Path, G} from 'react-native-svg';
import {IconProps} from '.';

const ShutterPhotoIcon: React.FC<IconProps> = ({
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
      <G
        clipPath="url(#prefix__a)"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={color}
        strokeWidth={40}
        fill="none">
        <Path d="M89.881 250c0 88.431 71.688 160.119 160.119 160.119S410.119 338.431 410.119 250 338.431 89.881 250 89.881 89.881 161.569 89.881 250z" />
        <Path d="M388.65 169.863l-.04.08-92.45 160.12" />
        <Path d="M250.034 89.973l.05.074 92.442 160.125" />
        <Path d="M111.539 170.073l.09-.006 184.892.005" />
        <Path d="M111.66 330.063l.04-.08 92.45-160.12" />
        <Path d="M250.276 409.953l-.05-.074-92.442-160.124" />
        <Path d="M388.771 329.853l-.09.006-184.892-.005" />
      </G>
    </Svg>
  );
};

export default ShutterPhotoIcon;
