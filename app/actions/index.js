// @flow
import * as types from './types';
import { addBudgetType, moveBudgetType } from '../types';

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

export function moveBudget(dragIndex: number, hoverIndex: number, budget: moveBudgetType) {
    return {
        type: types.MOVE_BUDGET,
        dragIndex,
        hoverIndex,
        budget
    };
}
