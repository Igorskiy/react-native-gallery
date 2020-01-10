import React from 'react';
import { View, Image } from 'react-native';
import styles from '../styles';

const FullScreen = ({ navigation }) => {

  return (
    <View>
      <Image source={{uri: navigation.getParam('image')}}
        style={styles.gallery__photo_fullSize}
        resizeMode='contain'
        />
    </View>
  );
}

  export default FullScreen;