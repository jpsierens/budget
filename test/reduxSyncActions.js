import expect from "expect";
import * as actions from "../app/actions/index";
import * as types from "../app/actions/types";

describe('sync actions', () => {
    const budget = {
        _id: "57d3ce8b66e5e92c16bc6528",
        name: "test the budgets",
        updatedAt: "2016-09-11T09:21:57.834Z",
        note: "Testing budgets",
        completed: false
    };
    const transCat = {
        _id: "57d3ce8b66e5e92c16bc6528",
        name: "test the transcats",
        type: "expense"
    };

    describe('addBudget', () => {
        it('should create an action to add a budget', () => {
            const expectedAction = {
                type: types.ADD_BUDGET_CLICK,
                data: budget
            };
            expect(actions.addBudget(budget)).toEqual(expectedAction);
        })
    });

    describe('removeBudget', () => {
        it('should create an action to remove a budget', () => {
            const id = "someid123";
            const expectedAction = {
                type: types.REMOVE_BUDGET_CLICK,
                id
            };
            expect(actions.removeBudget(id)).toEqual(expectedAction);
        })
    });

    describe('moveBudget', () => {
        it('should create an action to move a budget', () => {
            const dragIndex = 1;
            const hoverIndex = 2;
            const expectedAction = {
                type: types.MOVE_BUDGET,
                dragIndex,
                hoverIndex,
                budget
            };
            expect(actions.moveBudget(dragIndex, hoverIndex, budget))
                .toEqual(expectedAction);
        })
    });

    describe('updateBudget', () => {
        it('should create an action to update a budget', () => {
            const id = "someid123";
            const updates = { completed: false };
            const expectedAction = {
                type: types.UPDATE_BUDGET_CLICK,
                updates,
                id
            };
            expect(actions.updateBudget(id, updates))
                .toEqual(expectedAction);
        })
    });

    describe('addTransCat', () => {
        it ('should create an action to add a transaction category', () => {
            const expectedAction = {
                type: types.ADD_TRANSCAT_CLICK,
                data: transCat
            };
            expect(actions.addTransCat(transCat)).toEqual(expectedAction);
        });
    });

});
