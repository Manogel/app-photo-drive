import React from 'react';
import {StyleSheet, View, Image, ImageSourcePropType} from 'react-native';
import ButtonIcon from './ButtonIcon';
import ShutterPhotoIcon from './icons/ShutterPhoto';

type MaskCameraOverlayParams = {
  size?: number;
  image?: ImageSourcePropType;
  opacity?: number;
};

const MaskCameraOverlay: React.FC<MaskCameraOverlayParams> = ({
  size = 250,
  image,
  opacity = 1,
}) => {
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

      {image && (
        <Image
          source={image}
          style={[
            styles.imageMask,
            {
              width: size,
              height: size,
              opacity,
            },
          ]}
        />
      )}
    </View>
  );
};

export default MaskCameraOverlay;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },

  camIcon: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
  },

  imageMask: {
    flex: 1,
    resizeMode: 'contain',
    position: 'relative',
    alignSelf: 'center',
    marginBottom: '20%',
  },
});
