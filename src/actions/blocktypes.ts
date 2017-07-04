import * as actions from '../constants/actions';

export function addBlockType(data) {
  return {
    type: actions.ADD_BLOCK_TYPE,
    data: data
  }
}

export function editBlockType(id, data) {
  return {
    type: actions.EDIT_BLOCK_TYPE,
    id: id,
    data: data
  }
}

export function deleteBlockType(id) {
  return {
    type: actions.DELETE_BLOCK_TYPE,
    id: id
  }
}
