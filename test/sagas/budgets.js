import "babel-polyfill";
import expect from "expect";
import { put, call } from 'redux-saga/effects'
import * as sagas from "../../app/actions/sagas";
import * as types from "../../app/actions/types";
import { postBudget, deleteBudget, putBudget } from '../../app/api/budgets';

describe('redux sagas', () => {
    const budgetModel = {
        name: "test the budgets",
        note: "Testing budgets"
    };

    describe('add budget', () => {
        const action = {
            type: types.ADD_BUDGET_CLICK,
            data: budgetModel
        };
        const generator = sagas.addBudget(action);
        let returnedBudgetId;

        it('should execute the call method and return the effect', () => {
            expect(generator.next().value).toEqual(call(postBudget, budgetModel));
        });

        it('should dispatch an ADD_BUDGET_SUCCESS action once the budget has been added succesfully', (done) => {
            postBudget(budgetModel).then(budget => {
                returnedBudgetId = budget._id;
                expect(generator.next(budget).value.PUT.action)
                    .toEqual({
                        type: types.ADD_BUDGET_SUCCESS,
                        budget    
                    });
                done();
            });
        });

        it('should be done', () => {
            expect(generator.next().done).toEqual(true);
        });

        after('delete dummy budget', (done) => {
            // lets get rid of the test budget.
            deleteBudget(returnedBudgetId)
                .then(() => done())
                .catch(e => {
                    console.log('ERROR removing budget: '+e);
                    done();
                });
        })
    });

    describe('remove budget', () => {
        let createdBudget, action, generator;

        before('create a dummy budget and start the generator', (done) => {
            // create a dummy budget
            postBudget(budgetModel).then(t => {
                createdBudget = t;
                action = {
                    type: types.REMOVE_BUDGET_CLICK,
                    id: createdBudget._id
                };
                generator = sagas.removeBudget(action);
                done();
            })
        });

        it ('should execute the call method and return the effect', () => {
            expect(generator.next().value).toEqual(call(deleteBudget, createdBudget._id));
        });

        it('should dispatch a REMOVE_BUDGET_SUCCESS action once the budget has been deleted', (done) => {
            deleteBudget(createdBudget._id).then(budget => {
                expect(generator.next(budget).value.PUT.action)
                    .toEqual({
                        type: types.REMOVE_BUDGET_SUCCESS,
                        budget    
                    });
                done();
            });
        });

        it('should be done', () => {
            expect(generator.next().done).toEqual(true);
        });
    });

    describe('update budget', () => {
        let createdBudget, action, generator;

        before('create a dummy budget and start the generator', (done) => {
            // create a dummy budget
            postBudget(budgetModel).then(t => {
                createdBudget = t;
                action = {
                    type: types.UPDATE_BUDGET_CLICK,
                    id: createdBudget._id,
                    updates: {
                        completed: true,
                        updatedAt: Date.now()
                    }
                };
                generator = sagas.updateBudget(action);
                done();
            })
        });

        it ('should execute the call method and return the effect', () => {
            expect(generator.next().value).toEqual(call(putBudget, createdBudget._id, action.updates));
        });

        it('should dispatch a UPDATE_BUDGET_SUCCESS action once the budget has been updated', (done) => {
            putBudget(createdBudget._id, action.updates).then(budget => {
                expect(generator.next(budget).value.PUT.action)
                    .toEqual({
                        type: types.UPDATE_BUDGET_SUCCESS,
                        budget,
                        updates: action.updates
                    });
                done();
            });
        });

        it('should be done', () => {
            expect(generator.next().done).toEqual(true);
        });

        after('delete dummy budget', (done) => {
            // lets get rid of the dummy budget.
            deleteBudget(createdBudget._id)
                .then(() => done())
                .catch(e => {
                    console.log('ERROR removing budget: '+e);
                    done();
                });
        })

    });

});
