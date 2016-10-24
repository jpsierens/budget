import fetch from 'isomorphic-fetch';

const TRANSCAT_URL = 'http://localhost:3001/transactionCategories';

export async function getTransCats() {
    try {
        const options = { mode: 'cors', method: 'GET' };
        const response = await fetch(TRANSCAT_URL, options);

        return await response.json();
    } catch(e) {
        throw e;
    }
}
