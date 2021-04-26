import React, {useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import ArrowDownIcon from './icons/ArrowDown';
import ArrowUpIcon from './icons/ArrowUp';
import img_1 from 'assets/1.png';
import img_2 from 'assets/2.png';
import img_3 from 'assets/3.png';
import img_4 from 'assets/4.png';
import img_face1 from 'assets/face1.png';
import img_face2 from 'assets/face2.png';
import img_face3 from 'assets/face3.png';
import img_face4 from 'assets/face4.png';

const MASKS = [
  img_1,
  img_2,
  img_3,
  img_4,
  img_face1,
  img_face2,
  img_face3,
  img_face4,
];

type MasksParams = {
  onSelectMask(mask: any): void;
};

const Masks: React.FC<MasksParams> = ({onSelectMask}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(state => !state);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.header}
        onPress={handleOpen}>
        <Text style={styles.headerTitle}>Masks</Text>
        {open ? <ArrowUpIcon /> : <ArrowDownIcon />}
      </TouchableOpacity>

      <FlatList
        contentContainerStyle={[
          styles.body,
          {
            display: open ? 'none' : 'flex',
          },
        ]}
        bounces={false}
        horizontal
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        keyExtractor={({index}) => index}
        data={MASKS}
        renderItem={({item}) => (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => onSelectMask(item)}>
            <Image source={item} style={styles.image} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Masks;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomColor: '#eeeeee',
    borderBottomWidth: 0.5,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#08C18A',
  },
  body: {
    paddingHorizontal: 20,
  },
  separator: {
    width: 25,
  },
  image: {
    resizeMode: 'contain',
    height: 90,
    width: 40,
  },
});
