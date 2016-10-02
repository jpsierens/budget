export type addBudgetType = {
    name: string,
    note: string
};

export type TransactionType = {
    __v: number,
    _id: string,
    expense: boolean,
    amount: number,
    date: string
};

export type BudgetType = {
    __v: number,
    _id: string,
    completed: boolean,
    updatedAt: string,
    name: string,
    note: string,
    transactions: TransactionType[]
};

export type addBudgetActionType = {
    type: string,
    data: addBudgetType
};

export type removeBudgetActionType = {
    type: string,
    id: string
};

export type updateBudgetActionType = {
	type: string,
    updates: Object,
    id: string
};
