import * as types from './types';

export function addBudget(budget) {
    return {
        type: types.ADD_BUDGET_CLICK,
        data: budget
    };
}

export function removeBudget(id) {
    return {
        type: types.REMOVE_BUDGET_CLICK,
        id
    };
}

export function updateBudget(id, updates) {
    return {
        type: types.UPDATE_BUDGET_CLICK,
        updates,
        id
    };
}

export function moveBudget(dragIndex, hoverIndex, budget) {
    return {
        type: types.MOVE_BUDGET,
        dragIndex,
        hoverIndex,
        budget
    };
}
