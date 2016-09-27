import { takeEvery } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import { postBudget, deleteBudget, putBudget } from '../api';
import * as types from './types';

function* handleServerResponse(budget, success, failed, errorMsg, additional = {}) {
    if (budget && budget.name) {
        yield put(Object.assign({}, { type: success, budget }, additional));
    } else {
        yield put({ type: failed, error: errorMsg });
    }
}

export function* addBudget(action) {
    try {
        const budget = yield call(postBudget, action.data);

        yield* handleServerResponse(
            budget,
            types.ADD_BUDGET_SUCCESS,
            types.ADD_BUDGET_FAILED,
            'NETWORK ERROR: Budget wasn\'t created'
        );
    } catch(e) {
        yield put({
            type: types.ADD_BUDGET_FAILED,
            error: e
        });
    }
}

function* watchAddBudget() {
    yield* takeEvery(types.ADD_BUDGET_CLICK, addBudget);
}

export function* removeBudget(action) {
    try {
        const budget = yield call(deleteBudget, action.id);

        yield* handleServerResponse(
            budget,
            types.REMOVE_BUDGET_SUCCESS,
            types.REMOVE_BUDGET_FAILED,
            'NETWORK ERROR: Budget wasn\'t deleted'
        );
    } catch(e) {
        yield put({
            type: types.REMOVE_BUDGET_FAILED,
            error: e
        });
    }
}

function* watchRemoveBudget() {
    yield* takeEvery(types.REMOVE_BUDGET_CLICK, removeBudget);
}

export function* updateBudget(action) {
    try {
        const { id, updates } = action;
        const budget = yield call(putBudget, id, updates);

        yield* handleServerResponse(
            budget,
            types.UPDATE_BUDGET_SUCCESS,
            types.UPDATE_BUDGET_FAILED,
            'NETWORK ERROR: Budget status wasn\'t updated',
            { updates }
        );
    } catch(e) {
        yield put({
            type: types.UPDATE_BUDGET_FAILED,
            error: e
        });
    }
}

function* watchUpdateBudget() {
    yield* takeEvery(types.UPDATE_BUDGET_CLICK, updateBudget);
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
    yield [
        watchAddBudget(),
        watchRemoveBudget(),
        watchUpdateBudget()
    ];
}
