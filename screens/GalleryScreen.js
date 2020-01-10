import React, { useEffect } from 'react';
import {Text, View, Image, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { getLoadedImages } from '../store';
import styles from '../styles';

const GalleryScreen = ({ navigation, getLoadedImages, images }) => {
  useEffect( () => {
    getLoadedImages()
  }, [])

return (
  <FlatList
    data={images}
    keyExtractor={item => item.urls.full}
    renderItem={({ item }) => (
    <View style={styles.gallery}>
      <View style={styles.gallery__photo} >
        <TouchableOpacity 
          onPress={() =>(
            navigation.navigate('Full size', {image: item.urls.full}))}
          activeOpacity={0.7}
        >
          <View style={styles.gallery__photo_photoInfo}>
            <Text 
              style={styles.gallery__photo_photoInfo_text}
              numberOfLines={2}
              >
              {item.user.name}
            </Text>
            {item.description && 
              <Text 
                style={styles.gallery__photo_photoInfo_text}
                numberOfLines={2}
              >
                {item.description}
              </Text>
            }
          </View>
          <Image 
            source={{uri: item.urls.small}}
            resizeMode='cover' 
            style={styles.gallery__photo_fullSize}
          />
        </TouchableOpacity>
      </View>
    </View>
  )}
  />
);
}

  const mapStateToProps = state => ({
    images: state.images,
  });
  const mapDispatchToProps = dispatch => ({
    getLoadedImages: ()=> dispatch(getLoadedImages())
  });

  export default connect(mapStateToProps, mapDispatchToProps)(GalleryScreen);