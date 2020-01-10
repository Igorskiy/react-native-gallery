import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { getImagesFromServer } from './imagesApi';

const LOAD_IMAGES = 'LOAD_IMAGES';
export const loadImages = images => ({
  type: LOAD_IMAGES,
    images,
});

export const getLoadedImages = () =>  async(dispatch) => {
  const images = await getImagesFromServer();
   dispatch(loadImages(images));
};

const initialState = {
  images: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case LOAD_IMAGES: 
      return {
        ...state, 
        images: action.images,
      };
      default: return state;
  }
}

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(thunk)
);

export default store;