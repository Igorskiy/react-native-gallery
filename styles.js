import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    gallery: {
      position: 'relative',
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    gallery__photo: {
      width: '100%',
      height: 300,
      marginBottom: 10,
    },
    gallery__photo_fullSize: {
      width: '100%',
      height: '100%'
    },
    gallery__photo_photoInfo: {
      position: 'absolute',
      borderTopRightRadius: 10,
      borderBottomRightRadius: 10,

      top: '70%',
      zIndex: 1,
      paddingHorizontal: 10,
      overflow: 'hidden',
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },
    gallery__photo_photoInfo_text: {
      color: 'white',
      fontWeight: 'bold',
    }
  });
  