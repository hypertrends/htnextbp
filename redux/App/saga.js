import { all, call, put, takeLatest } from 'redux-saga/effects';
import { loadTenantSettingsSuccess } from './actions'
import { LOAD_TENANT_SETTINGS } from './constants';

export function* loadTenantSettingsSaga(action) {
  yield put(loadTenantSettingsSuccess({ tenantSettings: { "id" : "Tenant1", "title": "Tenant ONE" } }));
}

export function* watchLoadTenantSettings() {
  yield takeLatest(LOAD_TENANT_SETTINGS, loadTenantSettingsSaga);
}

export default function* rootSaga() {
  yield all([
    watchLoadTenantSettings(),
  ]);
}