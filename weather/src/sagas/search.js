import { call, put, takeLatest } from 'redux-saga/effects'
import Api from '../services/Api'

const api = Api.create()

function * searchCity(action) {
    console.log('searchCity saga')
    try {
        const response = yield call(api.searchCity, action.text);
        yield put({type: "SEARCH_CITY_SUCCESS", result: response.data});
    } catch (e) {
        yield put({type: "SEARCH_CITY_FAILURE"});
    }
}

export default function * searchSaga() {
    yield takeLatest("SEARCH_CITY", searchCity);
}
