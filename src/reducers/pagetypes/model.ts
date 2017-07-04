import { handleActions } from 'redux-actions';
import * as Actions from '../../constants/actions';

export const pageTypeFields: PageTypeStoreState = {
  fields: {
    name: { 
      type: 'text',
      name: 'name', 
      label: 'Page Type', 
      value: '',
      validators: []
    },
    description: { 
      type: 'text',
      name: 'description', 
      label: 'Description', 
      value: '',
      validators: []
    }
  } 
};