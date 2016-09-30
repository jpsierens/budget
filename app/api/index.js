// @flow
import fetch from 'isomorphic-fetch';
import { addBudgetActionType, updateBudgetActionType } from '../types';

const BUDGET_URL = 'http://localhost:3001/budgets';
const jsonHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};

export async function getBudgets() {
    try {
        const options = { mode: 'cors', method: 'GET' };
        const response = await fetch(BUDGET_URL, options);

        return await response.json();
    } catch(e) {
        throw e;
    }
}

export async function postBudget(budget: addBudgetActionType) {
    try {
        const options = {
            mode: 'cors',
            method: 'POST',
            headers: jsonHeaders,
            body: JSON.stringify(budget)
        };

        const response = await fetch(BUDGET_URL, options);

        return await response.json();
    } catch(e) {
        throw e;
    }
}

export async function putBudget(id: string, update: updateBudgetActionType) {
    try {
        const options = {
            mode: 'cors',
            method: 'PUT',
            headers: jsonHeaders,
            body: JSON.stringify(update)
        };

        const response = await fetch(`${ BUDGET_URL }/${id}`, options);

        return await response.json();
    } catch(e) {
        throw e;
    }
}

export async function deleteBudget(id: string) {
    try {
        const options = {
            mode: 'cors',
            method: 'DELETE',
            headers: jsonHeaders
        };

        const response = await fetch(`${ BUDGET_URL }/${id}`, options);

        return await response.json();
    } catch(e) {
        throw e;
    }
}
