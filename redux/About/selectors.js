import { createSelector } from 'reselect';

const selectAboutContainerFromState = (state) => state.about;
const selectAboutDataFromState = () => createSelector(selectAboutContainerFromState, state => state.data);
export { selectAboutDataFromState };