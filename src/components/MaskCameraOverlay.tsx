import React from 'react';
import {StyleSheet, View} from 'react-native';
import ButtonIcon from './ButtonIcon';
import ShutterPhotoIcon from './icons/ShutterPhoto';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },

  camIcon: {
    position: 'absolute',
    bottom: 10,
    right: 0,
    left: 0,
  },
});

const MaskCameraOverlay: React.FC = () => {
  return (
    <View style={styles.container}>
      <ButtonIcon icon={ShutterPhotoIcon} />
    </View>
  );
};

export default MaskCameraOverlay;
