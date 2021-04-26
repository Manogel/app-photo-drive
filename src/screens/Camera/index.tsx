import Controls from 'components/Controls';
import MaskCameraOverlay from 'components/MaskCameraOverlay';
import Masks from 'components/Masks';
import React, {useState} from 'react';
import {ImageSourcePropType, SafeAreaView} from 'react-native';

import {RNCamera} from 'react-native-camera';
import styles from './styles';

const Camera = () => {
  const [imageMask, setImageMask] = useState<ImageSourcePropType | undefined>();
  const [imageSize, setImageSize] = useState(250);
  const [imageOpacity, setImageOpacity] = useState(1);
  const [camZoom] = useState(0);

  const handleSelectMask = React.useCallback((mask: ImageSourcePropType) => {
    setImageMask(mask);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <RNCamera
        zoom={camZoom}
        useNativeZoom
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        androidRecordAudioPermissionOptions={{
          title: 'Permission to use audio recording',
          message: 'We need your permission to use your audio',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}>
        <MaskCameraOverlay
          image={imageMask}
          size={imageSize}
          opacity={imageOpacity}
        />
      </RNCamera>

      <Masks onSelectMask={handleSelectMask} />
      {imageMask && (
        <Controls
          setSize={setImageSize}
          setOpacity={setImageOpacity}
          size={imageSize}
          opacity={imageOpacity}
        />
      )}
    </SafeAreaView>
  );
};

export default Camera;
