import fetch from 'isomorphic-fetch';

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

export async function postBudget(budget) {
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

export async function putBudget(id, update) {
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

export async function deleteBudget(id) {
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
