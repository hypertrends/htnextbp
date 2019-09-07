import produce from "immer";
import { 
  LOAD_TENANT_SETTINGS,
  LOAD_TENANT_SETTINGS_SUCCESS,
  LOAD_TENANT_SETTINGS_FAILURE
} from './constants';

export const initialState = {
  loading: false,
  error: undefined,
  tenantSettings: undefined,
  themeSettings:undefined,
};

export const AppReducer = (state = initialState, action) => produce(state, draft => {
  switch (action.type) {
    case LOAD_TENANT_SETTINGS:
      draft.loading = true;
      break;
    case LOAD_TENANT_SETTINGS_SUCCESS:
      draft.tenantSettings = action.tenantSettings;
      break;
    case LOAD_TENANT_SETTINGS_FAILURE:
      draft.error = action.error;
      break;
    default:
      return state
  }
});