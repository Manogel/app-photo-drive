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
    bottom: 20,
    alignSelf: 'center',
  },
});

const MaskCameraOverlay: React.FC = () => {
  return (
    <View style={styles.container}>
      <ButtonIcon
        icon={ShutterPhotoIcon}
        style={styles.camIcon}
        iconProps={{
          color: '#fff',
          height: 60,
          width: 60,
        }}
      />
    </View>
  );
};

export default MaskCameraOverlay;
