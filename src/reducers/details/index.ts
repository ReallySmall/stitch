import { handleActions } from 'redux-actions';
import * as Actions from '../../constants/actions';

const initialState: ProjectDetailsStoreState = {
	0: {
	    fields: {
			domain: { 
				type: 'text',
				name: 'domain', 
				label: 'domain', 
				value: '',
				validators: ['required']
			},
			httpsonly: { 
				type: 'checkbox',
				name: 'httpsonly',
				label: 'https only', 
				value: false,
				validators: []
			}
	    }
    }
};

export default handleActions<ProjectDetailsStoreState, ProjectDetails>({

  [Actions.EDIT_PROJECT_DETAILS]: (state, action) => {

   	let newState = state;

  	Object.keys(action.data).map(function(datum, index){
      newState[action.id].fields[datum].value = action.data[datum]; 
    });

	return Object.assign({}, state, newState);

  },

  [Actions.RESET_ALL]: (state, action) => {

  	let newState = state;

  	Object.keys(newState['0'].fields).map(function(field, index){
      newState['0'].fields[field].value = ''; 
    });

  	return Object.assign({}, newState);
  }

}, initialState);