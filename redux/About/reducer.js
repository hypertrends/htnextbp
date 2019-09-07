import produce from "immer";
import { LOAD_ABOUT_DATA, LOAD_ABOUT_DATA_FAILURE, LOAD_ABOUT_DATA_SUCCESS } from './actions';

export const initialState = {
  loading: false,
  error: undefined,
  data: undefined
};

export const AboutReducer = (state = initialState, action) => produce(state, draft => {
  switch (action.type) {
    case LOAD_ABOUT_DATA:
      draft.loading = true;
      break;
    case LOAD_ABOUT_DATA_SUCCESS:
      draft.data = action.data;
      break;
    case LOAD_ABOUT_DATA_FAILURE:
      draft.error = action.error;
      break;
    default:
      return state
  }
});