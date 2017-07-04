import { handleActions } from 'redux-actions';
import * as Actions from '../../constants/actions';

const initialState: CreateStoreState = {
  processing: false  
};

export default handleActions<CreateStoreState, Create>({

  [Actions.STITCH]: (state, action) => {
    return {
      processing: true
    };
  },

  [Actions.RESET_ALL]: (state, action) => {
    return {
      processing: false
    }; 
  }

}, initialState);
