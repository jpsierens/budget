import fetch from 'isomorphic-fetch';

const CATEGORY_URL = 'http://localhost:3001/transactionCategories';
const jsonHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};

export async function getCategories() {
    try {
        const options = { mode: 'cors', method: 'GET' };
        const response = await fetch(CATEGORY_URL, options);

        return await response.json();
    } catch(e) {
        throw e;
    }
}

export async function postCategory(category: Object) {
    try {
        const options = {
            mode: 'cors',
            method: 'POST',
            headers: jsonHeaders,
            body: JSON.stringify(category)
        };

        const response = await fetch(CATEGORY_URL, options);

        return await response.json();
    } catch(e) {
        throw e;
    }
}

export async function putCategory(id: string, update: Object) {
    try {
        const options = {
            mode: 'cors',
            method: 'PUT',
            headers: jsonHeaders,
            body: JSON.stringify(update)
        };

        const response = await fetch(`${ CATEGORY_URL }/${id}`, options);

        return await response.json();
    } catch(e) {
        throw e;
    }
}

export async function deleteCategory(id: string) {
    try {
        const options = {
            mode: 'cors',
            method: 'DELETE',
            headers: jsonHeaders
        };

        const response = await fetch(`${ CATEGORY_URL }/${id}`, options);

        return await response.json();
    } catch(e) {
        throw e;
    }
}
