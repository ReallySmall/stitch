import { handleActions } from 'redux-actions';
import * as Actions from '../../constants/actions';

const initialState: CreateStoreState = {
  processing: false,
  minDataEntered: false  
};

export default handleActions<CreateStoreState, Create>({

  [Actions.STITCH]: (state, action) => {
    return {
      processing: true
    };
  },

  // If at least the project details form has been completed, the data is considered 'stitchable'
  [Actions.EDIT_PROJECT_DETAILS]: (state, action) => {
    return {
      minDataEntered: true
    };
  },

  [Actions.RESET_ALL]: (state, action) => {
    return {
      processing: false,
      minDataEntered: false
    }; 
  }

}, initialState);