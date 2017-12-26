import { getBudgets } from './budgets';
import { getCategories } from './categories';

export async function getInitialState() {
    try {
        const budgets = await getBudgets();
        const categories = await getCategories();

        return { budgets, categories };
    } catch (e) {
        throw e;
    }
}
