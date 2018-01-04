// @flow
import { takeEvery } from 'redux-saga';
import { put, call } from 'redux-saga/effects';

import * as types from './types';
import { postBudget, deleteBudget, putBudget } from '../api/budgets';
import { postCategory, deleteCategory, putCategory } from '../api/categories';
import { addBudgetActionType, removeBudgetActionType, updateBudgetActionType } from '../types';

function* handleServerResponse(response, success, failed, errorMsg, additional = {}) {
    if (response) {
        yield put(Object.assign({}, { type: success, response }, additional));
    } else {
        yield put({ type: failed, error: errorMsg });
    }
}

export function* addBudget(action: addBudgetActionType): Generator<any, void, any> {
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

export function* removeBudget(action: removeBudgetActionType): Generator<any, void, any> {
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

export function* updateBudget(action: updateBudgetActionType): Generator<any, void, any> {
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

export function* addCategory(action: Object): Generator<any, void, any> {
    try {
        const category = yield call(postCategory, action.data);

        yield* handleServerResponse(
            category,
            types.ADD_CATEGORY_SUCCESS,
            types.ADD_CATEGORY_FAILED,
            'NETWORK ERROR: Category wasn\'t created'
        );
    } catch(e) {
        yield put({
            type: types.ADD_CATEGORY_FAILED,
            error: e
        });
    }
}

function* watchAddCategory() {
    yield* takeEvery(types.ADD_CATEGORY_CLICK, addCategory);
}

export function* removeCategory(action: Object): Generator<any, void, any> {
    try {
        const category = yield call(deleteCategory, action.id);

        yield* handleServerResponse(
            category,
            types.REMOVE_CATEGORY_SUCCESS,
            types.REMOVE_CATEGORY_FAILED,
            'NETWORK ERROR: Category wasn\'t deleted'
        );
    } catch(e) {
        yield put({
            type: types.REMOVE_CATEGORY_FAILED,
            error: e
        });
    }
}

function* watchRemoveCategory() {
    yield* takeEvery(types.REMOVE_CATEGORY_CLICK, removeCategory);
}

export function* updateCategory(action: Object): Generator<any, void, any> {
    try {
        const { id, updates } = action;
        const category = yield call(putCategory, id, updates);

        yield* handleServerResponse(
            category,
            types.UPDATE_CATEGORY_SUCCESS,
            types.UPDATE_CATEGORY_FAILED,
            'NETWORK ERROR: Category status wasn\'t updated',
            { updates }
        );
    } catch(e) {
        yield put({
            type: types.UPDATE_CATEGORY_FAILED,
            error: e
        });
    }
}

function* watchUpdateCategory() {
    yield* takeEvery(types.UPDATE_BUDGET_CLICK, updateCategory);
}

// single entry point to start all Sagas at once
export default function* rootSaga(): Generator<any, void, void> {
    yield [
        watchAddBudget(),
        watchRemoveBudget(),
        watchUpdateBudget(),
        watchAddCategory(),
        watchRemoveCategory(),
        watchUpdateCategory()
    ];
}
