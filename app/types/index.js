export type addBudgetType = {
    name: string,
    note: string
};

export type TransactionType = {
    _id: string,
    expense: boolean,
    amount: number,
    date: string,
    description: string
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

export type transCatType = {
    __v: number,
    _id: string,
    name: string,
    type: string
}
