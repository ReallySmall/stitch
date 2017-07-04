import * as actions from '../constants/actions';

export function stitch() {
  return {
    type: actions.STITCH
  }
}

export function resetAll() {
  return {
    type: actions.RESET_ALL
  }
}