import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import GalleryScreen from './screens/GalleryScreen';
import FullScreen from './screens/FullScreen';

const AppNavigator = createStackNavigator({
  'Gallery': {
    screen: GalleryScreen,
    },
  'Full size': {
    screen: FullScreen,
    },
  },{
      defaultNavigationOptions: {
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: '#3282b8',
      }

    }
  },{
        initialRouteName: 'Gallery'
    }
);
export const AppNavigation = createAppContainer(AppNavigator);