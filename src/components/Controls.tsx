import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Slider from '@react-native-community/slider';

type ControlsParams = {
  setSize(number: number): void;
  setOpacity(number: number): void;
  size: number;
  opacity: number;
};

const Controls: React.FC<ControlsParams> = ({
  setOpacity,
  setSize,
  size,
  opacity,
}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text>Size</Text>
        <Slider
          value={size}
          minimumValue={50}
          maximumValue={500}
          minimumTrackTintColor="#08C18A"
          maximumTrackTintColor="#ccc"
          onValueChange={setSize}
        />
      </View>
      <View>
        <Text>Opacity</Text>
        <Slider
          value={opacity}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="#08C18A"
          maximumTrackTintColor="#ccc"
          onValueChange={setOpacity}
        />
      </View>
    </View>
  );
};

export default Controls;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});
