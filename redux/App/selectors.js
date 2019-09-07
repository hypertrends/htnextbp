import { createSelector } from 'reselect';

const selectAppStateContainer = (state) => state.global;
const getTenantSettingsFromState = () => createSelector(selectAppStateContainer, state => state.tenantSettings);
export { getTenantSettingsFromState };