import { getBudgets } from './budgets';
import { getTransCats } from './transCats';

export async function getInitialState() {
    try {
        const budgets = await getBudgets();
        const transCats = await getTransCats();

        return { budgets, transCats };
    } catch (e) {
        throw e;
    }
}

