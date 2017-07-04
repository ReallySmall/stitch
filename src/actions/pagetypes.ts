import * as actions from '../constants/actions';

export function addPageType(data) {
  return {
    type: actions.ADD_PAGE_TYPE,
    data: data
  }
}

export function editPageType(id, data) {
  return {
    type: actions.EDIT_PAGE_TYPE,
    id: id,
    data: data
  }
}

export function deletePageType(id) {
  return {
    type: actions.DELETE_PAGE_TYPE,
    id: id
  }
}