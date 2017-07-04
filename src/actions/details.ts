import * as actions from '../constants/actions';

export function editProjectDetails(id, data) {
  return {
    type: actions.EDIT_PROJECT_DETAILS,
    id: id,
    data: data
  }
}
