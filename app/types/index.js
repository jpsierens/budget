export type addBudgetType = {
    name: string,
    note: string
};

export type moveBudgetType = {
    __v: number,
    _id: string,
    completed: boolean,
    updatedAt: string,
    name: string,
    note: string
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
