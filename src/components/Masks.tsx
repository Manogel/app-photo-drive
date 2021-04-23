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
import among_img from 'assets/among.png';
import ArrowUpIcon from './icons/ArrowUp';

const IMAGES = [among_img, among_img, among_img, among_img];

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
        data={IMAGES}
        renderItem={({item}) => (
          <TouchableOpacity activeOpacity={0.8} onPress={onSelectMask}>
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
