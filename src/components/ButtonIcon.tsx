import React from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {IconProps} from './icons';

// import * as S from './styles';
interface ButtonIconProps extends TouchableOpacityProps {
  icon: React.FC<IconProps>;
  iconProps?: IconProps;
}

const ButtonIcon: React.FC<ButtonIconProps> = ({
  icon: Icon,
  iconProps,
  ...touchableOpacityProps
}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} {...touchableOpacityProps}>
      <Icon {...iconProps} />
    </TouchableOpacity>
  );
};

export default ButtonIcon;
