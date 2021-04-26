import React, {useEffect, useRef} from 'react';
import {SafeAreaView, View} from 'react-native';
import {DynamicCollage} from 'react-native-images-collage';
import {captureRef} from 'react-native-view-shot';

import styles from './styles';

const Collage = () => {
  const collageRef = useRef(null);

  useEffect(() => {
    if (collageRef) {
      setTimeout(() => {
        console.log('capturou');
        // captureRef(collageRef, {
        //   format: 'jpg',
        //   quality: 0.8,
        // }).then(
        //   uri => console.log('Image saved to', uri),
        //   error => console.error('Oops, snapshot failed', error),
        // );
      }, 5000);
    }
  }, [collageRef]);

  return (
    <SafeAreaView style={styles.container}>
      <DynamicCollage
        ref={collageRef}
        width="100%"
        height={200}
        images={[
          'https://scontent.fmcp2-1.fna.fbcdn.net/v/t1.6435-9/166238752_1682708898602961_6679181502879792079_n.jpg?_nc_cat=110&_nc_map=control&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=8QKyUmWeSMwAX-H77BF&_nc_ht=scontent.fmcp2-1.fna&oh=ce9b8ae4181153b3df84dda042fe7e48&oe=60ACF646',
          'https://scontent.fmcp2-1.fna.fbcdn.net/v/t1.6435-9/166238752_1682708898602961_6679181502879792079_n.jpg?_nc_cat=110&_nc_map=control&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=8QKyUmWeSMwAX-H77BF&_nc_ht=scontent.fmcp2-1.fna&oh=ce9b8ae4181153b3df84dda042fe7e48&oe=60ACF646',
        ]}
        matrix={[1, 1]}
        isEditButtonVisible={true}
        editButtonPosition={'bottom-right'}
        EditButtonComponent={() => <View />}
        imageStyle={{
          resizeMode: 'contain',
        }}
      />
    </SafeAreaView>
  );
};

export default Collage;
