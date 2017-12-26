// @flow
import * as types from './types';
import { addBudgetType, BudgetType, TransactionType } from '../types';

export function addBudget(budget: addBudgetType) {
    return {
        type: types.ADD_BUDGET_CLICK,
        data: budget
    };
}

export function removeBudget(id: string) {
    return {
        type: types.REMOVE_BUDGET_CLICK,
        id
    };
}

export function updateBudget(id: string, updates: Object) {
    return {
        type: types.UPDATE_BUDGET_CLICK,
        updates,
        id
    };
}

export function moveBudget(dragIndex: number, hoverIndex: number, budget: BudgetType) {
    return {
        type: types.MOVE_BUDGET,
        dragIndex,
        hoverIndex,
        budget
    };
}

export function addTransaction(transaction: TransactionType) {
    return {
        type: types.ADD_TRANSACTION_CLICK,
        data: transaction
    };
}


export function updateTransaction(transaction: TransactionType) {
    return {
        type: types.UPDATE_TRANSACTION_CLICK,
        data: transaction
    };
}

export function addCategory(cat: Object) {
    return {
        type: types.ADD_CATEGORY_CLICK,
        data: cat
    };
}

export function removeCategory(id: string) {
    return {
        type: types.REMOVE_CATEGORY_CLICK,
        id
    };
}

export function updateCategory(id: string, updates: Object) {
    return {
        type: types.UPDATE_CATEGORY_CLICK,
        updates,
        id
    };
}
