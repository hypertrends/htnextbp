export const LOAD_ABOUT_DATA = 'app/About/LOAD_ABOUT_DATA';
export const LOAD_ABOUT_DATA_SUCCESS = 'app/About/LOAD_ABOUT_DATA_SUCCESS';
export const LOAD_ABOUT_DATA_FAILURE = 'app/About/LOAD_ABOUT_DATA_FAILURE';

export function loadAboutData() {
  return {
    type: LOAD_ABOUT_DATA,
  };
}

export function loadAboutDataSuccess(data) {
  return {
    type: LOAD_ABOUT_DATA_SUCCESS,
    data
  };
}

export function loadAboutDataError(error) {
  return {
    type: LOAD_ABOUT_DATA_FAILURE,
    error
  };
}