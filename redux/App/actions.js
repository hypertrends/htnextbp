import {
  LOAD_TENANT_SETTINGS,
  LOAD_TENANT_SETTINGS_FAILURE,
  LOAD_TENANT_SETTINGS_SUCCESS
} from './constants';

export function loadTenantSettings(tenantId) {
  console.log("LOADING TENANT");
  return {
    type: LOAD_TENANT_SETTINGS,
    tenantId
  };
}

export function loadTenantSettingsSuccess(tenantSettings) {
  return {
    type: LOAD_TENANT_SETTINGS_SUCCESS,
    tenantSettings
  };
}

export function loadTenantSettingsError(error) {
  return {
    type: LOAD_TENANT_SETTINGS_FAILURE,
    error
  };
}