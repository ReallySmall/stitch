import { handleActions } from 'redux-actions';
import { uuidv4 } from '../../helpers';
import { blockTypeFields } from './model';
import * as Actions from '../../constants/actions';

const initialState: BlockTypeStoreState = {};

export default handleActions<BlockTypeStoreState, BlockType>({

  [Actions.ADD_BLOCK_TYPE]: (state, action) => {

    const newId = uuidv4();
    const newState = state;

    newState[newId] = blockTypeFields();

    Object.keys(action.data).map(function(datum, index){
      newState[newId].fields[datum].value = action.data[datum]; 
    });

    return Object.assign({}, state, newState);

  },

  [Actions.EDIT_BLOCK_TYPE]: (state, action) => {
    
    let newState = state;

    Object.keys(action.data).map(function(datum, index){
      newState[action.id].fields[datum].value = action.data[datum]; 
    });

    return Object.assign({}, state, newState); 
    
  },

  [Actions.DELETE_BLOCK_TYPE]: (state, action) => {

    let newState = state;

    delete newState[action.id];

    return Object.assign({}, state, newState);
 
  },

  [Actions.RESET_ALL]: (state, action) => {
    return {};
  }

}, initialState);