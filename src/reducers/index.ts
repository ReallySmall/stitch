import { combineReducers, Reducer } from 'redux';
import { reducer as formReducer } from 'redux-form';
import create from './create/';
import details from './details/';
import pagetypes from './pagetypes/';
import blocktypes from './blocktypes/';

export interface RootState {
  create: CreateStoreState,
  details: ProjectDetailsStoreState,
  pagetypes: PageTypeStoreState,
  blocktypes: BlockTypeStoreState,
  formReducer: any
}

export default combineReducers<RootState>({
  create,
  details,
  pagetypes,
  blocktypes,
  form: formReducer
});
